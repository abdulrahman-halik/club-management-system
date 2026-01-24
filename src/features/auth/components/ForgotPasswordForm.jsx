import { useState } from 'react';

export default function ForgotPasswordForm({ onSubmit, loading }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter your email to receive a password reset link</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
        </form>
    );
}