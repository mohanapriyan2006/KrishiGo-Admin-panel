import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout } from 'lucide-react';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simple authentication check (replace with real API call)
    if (formData.email === 'admin@krishigo.com' && formData.password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setErrors({ password: 'Invalid email or password' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-light to-primary">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Sprout size={48} color="#78BB1B" />
          </div>
          <h1 className="text-3xl mb-2 text-primary-dark">KrishiGo Admin</h1>
          <p className="text-text-light">Sign in to manage your agricultural platform</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-text-dark">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@krishigo.com"
              className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
            />
            {errors.email && <div className="text-error text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium text-text-dark">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
            />
            {errors.password && <div className="text-error text-sm mt-1">{errors.password}</div>}
          </div>
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-primary-dark border-none text-base"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-text-light">
          Demo credentials: admin@krishigo.com / admin123
        </div>
      </div>
    </div>
  );
}

export default Login;
