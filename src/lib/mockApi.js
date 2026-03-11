/**
 * Mock API Setup
 * This file sets up mock API responses for testing without a backend server
 */

import apiClient from './api-client';

// Mock user database
const mockUsers = [
  {
    id: '1',
    fullName: 'Admin User',
    email: 'admin@uyc.com',
    password: 'Admin@123', // In real app, this would be hashed
    role: 'admin'
  },
  {
    id: '2',
    fullName: 'John Doe',
    email: 'john@uyc.com',
    password: 'John@1234',
    role: 'member'
  }
];

// Mock token generator
const generateMockToken = () => {
  return 'mock-token-' + Math.random().toString(36).substr(2, 9);
};

// Setup mock API interceptor
export const setupMockApi = () => {
  // Intercept all requests
  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // Mock Login endpoint
      if (originalRequest.url === '/auth/login' && originalRequest.method === 'post') {
        const { email, password } = originalRequest.data;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const user = mockUsers.find((u) => u.email === email && u.password === password);

        if (user) {
          return Promise.resolve({
            status: 200,
            data: {
              success: true,
              message: 'Login successful',
              token: generateMockToken(),
              user: {
                id: user.id,
                name: user.fullName,
                email: user.email,
                role: user.role
              }
            }
          });
        } else {
          return Promise.reject({
            response: {
              status: 401,
              data: {
                success: false,
                message: 'Invalid email or password'
              }
            }
          });
        }
      }

      // Mock Register endpoint
      if (originalRequest.url === '/auth/register' && originalRequest.method === 'post') {
        const { fullName, email, password } = originalRequest.data;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Check if user already exists
        const existingUser = mockUsers.find((u) => u.email === email);

        if (existingUser) {
          return Promise.reject({
            response: {
              status: 409,
              data: {
                success: false,
                message: 'Email already registered'
              }
            }
          });
        }

        // Create new user
        const newUser = {
          id: String(mockUsers.length + 1),
          fullName,
          email,
          password,
          role: 'member'
        };

        mockUsers.push(newUser);

        return Promise.resolve({
          status: 201,
          data: {
            success: true,
            message: 'Registration successful. Please log in with your credentials.',
            user: {
              id: newUser.id,
              name: newUser.fullName,
              email: newUser.email,
              role: newUser.role
            }
          }
        });
      }

      return Promise.reject(error);
    }
  );
};

// Setup mock request interceptor to intercept before the request is made
export const setupMockApiRequest = () => {
  apiClient.interceptors.request.use((config) => {
    // Log all requests for debugging
    console.log(`[Mock API] ${config.method?.toUpperCase()} ${config.url}`, {
      data: config.data
    });
    return config;
  });
};

export default setupMockApi;
