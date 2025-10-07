import React, { useState, useEffect } from "react";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, X } from "lucide-react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Reset form when switching modes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isOpen, isLogin]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Auth Modal - Ukuran diperkecil */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm transform transition-all border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X size={18} />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                INTENS.ID
              </span>
            </div>
            <h2 className="text-base font-semibold text-gray-900 tracking-wide">
              {isLogin ? "WELCOME BACK" : "JOIN OUR COMMUNITY"}
            </h2>
            <p className="mt-1 text-xs text-gray-600 tracking-wide">
              {isLogin
                ? "Sign in to your account to continue"
                : "Create your account and start your journey"}
            </p>
          </div>

          {/* Auth Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields - Only for Signup */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                    FIRST NAME
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <User className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="appearance-none block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-sm tracking-wide"
                      placeholder="First name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                    LAST NAME
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <User className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="appearance-none block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-sm tracking-wide"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Mail className="h-3.5 w-3.5 text-gray-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-sm tracking-wide"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                PASSWORD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Lock className="h-3.5 w-3.5 text-gray-400" />
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none block w-full pl-8 pr-8 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-sm tracking-wide"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide">
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <Lock className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="appearance-none block w-full pl-8 pr-8 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-sm tracking-wide"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-2 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me & Forgot Password - Only for Login */}
            {isLogin && (
              <div className="flex items-center justify-between text-xs tracking-wide">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3 w-3 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-1.5 text-gray-700">
                    Remember me
                  </label>
                </div>

                <button
                  type="button"
                  className="text-gray-900 hover:text-gray-600 transition-colors font-medium text-xs"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Terms and Conditions - Only for Signup */}
            {!isLogin && (
              <div className="flex items-center text-xs tracking-wide">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-3 w-3 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-1.5 text-gray-700 text-xs leading-tight"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-gray-900 hover:text-gray-600 font-medium"
                  >
                    Terms and Conditions
                  </button>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                    {isLogin ? "SIGNING IN..." : "CREATING ACCOUNT..."}
                  </div>
                ) : (
                  <div className="flex items-center text-sm">
                    {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
                    <ArrowRight
                      size={14}
                      className="ml-1.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                )}
              </button>
            </div>
          </form>

          {/* Switch Auth Mode */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="text-center text-xs text-gray-600 tracking-wide">
              <span>
                {isLogin ? "New to Intens.id? " : "Already have an account? "}
              </span>
              <button
                onClick={isLogin ? switchToSignup : switchToLogin}
                className="font-medium text-gray-900 hover:text-gray-600 transition-colors text-xs"
              >
                {isLogin ? "CREATE ACCOUNT" : "SIGN IN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
