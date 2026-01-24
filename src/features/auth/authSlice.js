import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async actions
// export const loginUser = createAsyncThunk(
//   'auth/login',
//   async (credentials) => {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       body: JSON.stringify(credentials)
//     });
//     return response.json();
//   }
// );

// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (userData) => {
//     const response = await fetch('/api/register', {
//       method: 'POST',
//       body: JSON.stringify(userData)
//     });
//     return response.json();
//   }
// );

// // Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: null,
//     loading: false,
//     error: null
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;