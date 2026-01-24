import { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (data) => {
        setLoading(true);
        // API call to send reset email
        await fetch('/api/forgot-password', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        setLoading(false);
        setSuccess(true);
    };

    return (
        <div className="forgot-password-page">
            <h1>Reset Password</h1>
            {success ? (
                <p>Check your email for reset instructions</p>
            ) : (
                <ForgotPasswordForm onSubmit={handleSubmit} loading={loading} />
            )}
            <Link to="/login">Back to Login</Link>
        </div>
    );
}