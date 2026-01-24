import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { registerUser } from '../authSlice';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleRegister = async (userData) => {
        const result = await dispatch(registerUser(userData));
        if (result.type === 'auth/register/fulfilled') {
            navigate('/login');
        }
    };

    return (
        <div className="register-page">
            <h1>Create Account</h1>
            {error && <p className="error">{error}</p>}
            <RegisterForm onSubmit={handleRegister} loading={loading} />
            <Link to="/login">Already have an account? Login</Link>
        </div>
    );
}