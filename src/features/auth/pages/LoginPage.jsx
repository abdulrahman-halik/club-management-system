import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../authSlice';


export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleLogin = async (credentials) => {
        const result = await dispatch(loginUser(credentials));
        if (result.type === 'auth/login/fulfilled') {
            navigate('/dashboard');
        }
    };
    return (
        <LoginForm
            onFormSubmit={(credentials) => handleLogin(credentials)}
            loading={loading}
            apiError={error}
        />
    );
};
