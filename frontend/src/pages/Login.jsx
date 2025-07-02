 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff, Shield, Loader2 } from "lucide-react";

// In a real app, these would come from environment variables or secure authentication
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "password123";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [isSignup, setIsSignup] = useState(true); // to toggle signup/login label

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        
        if (!validateForm()) return;
        
        setIsLoading(true);
        setErrors({});
        setMessage("");

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            setMessage("Welcome back! Login successful");
            setIsSignup(false); // Change signup to login

            setTimeout(() => {
                alert("Redirecting to admin dashboard...");
                navigate("/AdminApi_key!234csacsybaybAbBbbncuuu25686wddby");
            }, 2000);
        } else {
            setMessage("Invalid credentials. Please check your email and password.");
            setErrors({ general: "Invalid email or password" });
        }
        
        setIsLoading(false);
    };

    const handleInputChange = (field, value) => {
        if (field === 'email') setEmail(value);
        if (field === 'password') setPassword(value);
        
        // Clear errors when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
        if (errors.general) {
            setErrors(prev => ({ ...prev, general: '' }));
        }
        if (message) {
            setMessage("");
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
            </div>

            <div className='relative z-10 w-full max-w-md px-6'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className='text-4xl font-bold text-white mb-2'>
                        Admin Portal
                    </h1>
                    <p className='text-slate-300 text-lg'>
                        {isSignup ? "Sign up to access your dashboard" : "Sign in to access your dashboard"}
                    </p>
                </div>

                {/* Login Form */}
                <div className='bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8'>
                    {/* Success/Error Messages */}
                    {message && (
                        <div className={`mb-6 p-4 rounded-lg border ${
                            message.includes('successful') 
                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                                : 'bg-red-500/10 border-red-500/20 text-red-400'
                        }`}>
                            <p className='text-sm font-medium'>{message}</p>
                        </div>
                    )}

                    <div className='space-y-6'>
                        {/* General Error */}
                        {errors.general && (
                            <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-3'>
                                <p className='text-red-400 text-sm'>{errors.general}</p>
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-semibold text-slate-200 mb-2'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <Mail className='h-5 w-5 text-slate-400' />
                                </div>
                                <input
                                    id='email'
                                    type='email'
                                    required
                                    value={email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                    className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.email 
                                            ? 'border-red-500 focus:ring-red-500/50' 
                                            : 'border-white/20 focus:ring-emerald-500/50 focus:border-emerald-500/50'
                                    }`}
                                    placeholder='Enter your email'
                                />
                            </div>
                            {errors.email && (
                                <p className='mt-1 text-red-400 text-sm'>{errors.email}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-semibold text-slate-200 mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <Lock className='h-5 w-5 text-slate-400' />
                                </div>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                    className={`w-full pl-10 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.password 
                                            ? 'border-red-500 focus:ring-red-500/50' 
                                            : 'border-white/20 focus:ring-emerald-500/50 focus:border-emerald-500/50'
                                    }`}
                                    placeholder='Enter your password'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors'
                                >
                                    {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className='mt-1 text-red-400 text-sm'>{errors.password}</p>
                            )}
                        </div>

                       
                   

                        {/* Submit Button */}
                        <button
                            type='button'
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className='w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    {isSignup ? "Sign Up" : "Login"}
                                    <ArrowRight className='w-5 h-5 ml-2' />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Demo Credentials */}
                    <div className='mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50'>
                        <p className='text-slate-300 text-xs font-semibold mb-2'>Demo Credentials:</p>
                        <div className='space-y-1 text-xs text-slate-400'>
                            <p>Email: admin@example.com</p>
                            <p>Password: password123</p>
                        </div>
                    </div>
                </div>

                
              
            </div>
        </div>
    );
};

export default LoginPage;
