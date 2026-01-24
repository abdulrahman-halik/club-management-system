import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Trophy, Mail, Lock } from 'lucide-react';
import LoginForm from '../components/LoginForm';


const LoginPage = () => {
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
        <div className="login-page">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <LoginForm onSubmit={handleLogin} loading={loading} />
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/register">Don't have an account? Register</Link>
        </div>
    );
};

export default Login;   