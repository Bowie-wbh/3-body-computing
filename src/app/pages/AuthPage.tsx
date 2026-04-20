import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { Starfield } from '../components/Starfield';
import { ArrowLeft, Phone, Lock, Mail, Check } from 'lucide-react';

type PageMode = 'login' | 'register' | 'forgot';
type LoginMode = 'code' | 'password';

export default function AuthPage() {
  const navigate = useNavigate();
  const { language, theme } = useApp();
  const t = translations[language].auth;

  // Auto scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pageMode, setPageMode] = useState<PageMode>('login');
  const [loginMode, setLoginMode] = useState<LoginMode>('code');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [countdown, setCountdown] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Validation functions
  const validatePhone = (phone: string) => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (pwd: string) => {
    return pwd.length >= 6;
  };

  // Handle get verification code
  const handleGetCode = () => {
    if (!validatePhone(phoneNumber)) {
      setErrors({ phone: t.phoneError });
      return;
    }
    
    // Mock sending code
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validatePhone(phoneNumber)) {
      newErrors.phone = t.phoneError;
    }

    if (loginMode === 'password') {
      if (!validatePassword(password)) {
        newErrors.password = t.passwordError;
      }
    } else {
      if (!code) {
        newErrors.code = t.codeError;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock login success
    console.log('Login successful:', { loginMode, phoneNumber, password, code });
    navigate('/constellation');
  };

  // Handle register
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validatePhone(phoneNumber)) {
      newErrors.phone = t.phoneError;
    }

    if (!validatePassword(password)) {
      newErrors.password = t.passwordError;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = t.passwordMismatch;
    }

    if (!code) {
      newErrors.code = t.codeError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock register success
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setPageMode('login');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
      setCode('');
      setErrors({});
    }, 2000);
  };

  // Handle forgot password
  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validateEmail(email)) {
      newErrors.email = t.emailError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock send reset link
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setPageMode('login');
      setEmail('');
      setErrors({});
    }, 2000);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#000520] via-[#000a30] to-[#001040] text-white'
        : 'bg-gradient-to-b from-sky-50 via-cyan-50 to-blue-100 text-gray-900'
    }`}>
      {/* Always show starfield background */}
      <Starfield count={300} speed={0.5} mouseEffect={false} />

      {/* Back to Home button - Always visible */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => navigate('/')}
        className={`fixed top-6 left-6 z-50 px-6 py-3 rounded-full backdrop-blur-xl border transition-all flex items-center gap-2 ${
          theme === 'dark'
            ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white'
            : 'bg-white/80 border-gray-200 hover:bg-white shadow-lg text-gray-900'
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">{t.backHome}</span>
      </motion.button>

      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md relative z-10"
        >
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className={`text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark'
                ? 'from-blue-400 via-cyan-400 to-green-400'
                : 'from-blue-600 via-cyan-600 to-green-600'
            }`}>
              {pageMode === 'login' ? t.title : pageMode === 'register' ? t.registerTitle : t.forgotPasswordTitle}
            </h1>
          </div>

          {/* Form Container */}
          <div className={`p-8 rounded-2xl backdrop-blur-xl border ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200 shadow-xl'
          }`}>
            <AnimatePresence mode="wait">
              {pageMode === 'login' && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Login Mode Toggle */}
                  <div className={`flex gap-2 mb-8 p-1 rounded-lg ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                  }`}>
                    <button
                      onClick={() => setLoginMode('code')}
                      className={`flex-1 px-4 py-2 rounded-lg transition-all font-medium ${
                        loginMode === 'code'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                          : theme === 'dark'
                          ? 'text-white/60 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t.phoneLogin}
                    </button>
                    <button
                      onClick={() => setLoginMode('password')}
                      className={`flex-1 px-4 py-2 rounded-lg transition-all font-medium ${
                        loginMode === 'password'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                          : theme === 'dark'
                          ? 'text-white/60 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t.phonePassword}
                    </button>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    {/* Phone Number */}
                    <div>
                      <label className={`block text-sm mb-2 font-medium ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>{t.phone}</label>
                      <div className="relative">
                        <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                          theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            setErrors({ ...errors, phone: '' });
                          }}
                          placeholder={t.phone}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                          } focus:outline-none ${errors.phone ? 'border-red-500' : ''}`}
                          required
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {loginMode === 'password' ? (
                      /* Password Mode */
                      <div>
                        <label className={`block text-sm mb-2 font-medium ${
                          theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                        }`}>{t.password}</label>
                        <div className="relative">
                          <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                          }`} />
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                              setErrors({ ...errors, password: '' });
                            }}
                            placeholder={t.password}
                            className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                              theme === 'dark'
                                ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                            } focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
                            required
                          />
                        </div>
                        {errors.password && (
                          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                        <div className="mt-2 text-right">
                          <button
                            type="button"
                            onClick={() => setPageMode('forgot')}
                            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            {t.forgotPassword}
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Verification Code Mode */
                      <div>
                        <label className={`block text-sm mb-2 font-medium ${
                          theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                        }`}>{t.code}</label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                              theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                            }`} />
                            <input
                              type="text"
                              value={code}
                              onChange={(e) => {
                                setCode(e.target.value);
                                setErrors({ ...errors, code: '' });
                              }}
                              placeholder={t.code}
                              className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                                theme === 'dark'
                                  ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                                  : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                              } focus:outline-none ${errors.code ? 'border-red-500' : ''}`}
                              required
                            />
                          </div>
                          <button
                            type="button"
                            onClick={handleGetCode}
                            disabled={countdown > 0}
                            className={`px-4 py-3 rounded-lg border transition-all whitespace-nowrap font-medium ${
                              countdown > 0
                                ? theme === 'dark'
                                  ? 'bg-white/5 border-white/10 text-white/40 cursor-not-allowed'
                                  : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                                : theme === 'dark'
                                ? 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {countdown > 0 ? `${countdown}s` : t.getCode}
                          </button>
                        </div>
                        {errors.code && (
                          <p className="text-red-500 text-sm mt-1">{errors.code}</p>
                        )}
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="button"
                      onClick={() => window.open('https://cushy-oasis-70308618.figma.site/', '_blank')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      {t.login}
                    </motion.button>

                    {/* Register Link */}
                    <div className="text-center">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}>{t.noAccount} </span>
                      <button
                        type="button"
                        onClick={() => {
                          setPageMode('register');
                          setErrors({});
                        }}
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        {t.register}
                      </button>
                    </div>

                    {/* Admin Login Link */}
                    
                  </form>
                </motion.div>
              )}

              {pageMode === 'register' && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleRegister} className="space-y-6">
                    {/* Phone Number */}
                    <div>
                      <label className={`block text-sm mb-2 font-medium ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>{t.phone}</label>
                      <div className="relative">
                        <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                          theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            setErrors({ ...errors, phone: '' });
                          }}
                          placeholder={t.phone}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                          } focus:outline-none ${errors.phone ? 'border-red-500' : ''}`}
                          required
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Password */}
                    <div>
                      <label className={`block text-sm mb-2 font-medium ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>{t.password}</label>
                      <div className="relative">
                        <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                          theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({ ...errors, password: '' });
                          }}
                          placeholder={t.password}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                          } focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
                          required
                        />
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className={`block text-sm mb-2 font-medium ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>{t.confirmPassword}</label>
                      <div className="relative">
                        <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                          theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setErrors({ ...errors, confirmPassword: '' });
                          }}
                          placeholder={t.confirmPassword}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                          } focus:outline-none ${errors.confirmPassword ? 'border-red-500' : ''}`}
                          required
                        />
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                      )}
                    </div>

                    {/* Verification Code */}
                    <div>
                      <label className={`block text-sm mb-2 font-medium ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>{t.code}</label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                          }`} />
                          <input
                            type="text"
                            value={code}
                            onChange={(e) => {
                              setCode(e.target.value);
                              setErrors({ ...errors, code: '' });
                            }}
                            placeholder={t.code}
                            className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                              theme === 'dark'
                                ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                            } focus:outline-none ${errors.code ? 'border-red-500' : ''}`}
                            required
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleGetCode}
                          disabled={countdown > 0}
                          className={`px-4 py-3 rounded-lg border transition-all whitespace-nowrap font-medium ${
                            countdown > 0
                              ? theme === 'dark'
                                ? 'bg-white/5 border-white/10 text-white/40 cursor-not-allowed'
                                : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                              : theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {countdown > 0 ? `${countdown}s` : t.getCode}
                        </button>
                      </div>
                      {errors.code && (
                        <p className="text-red-500 text-sm mt-1">{errors.code}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      {t.registerButton}
                    </motion.button>

                    {/* Login Link */}
                    <div className="text-center">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}>{t.haveAccount} </span>
                      <button
                        type="button"
                        onClick={() => {
                          setPageMode('login');
                          setErrors({});
                        }}
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        {t.goToLogin}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {pageMode === 'forgot' && (
                <motion.div
                  key="forgot"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleForgotPassword} className="space-y-6">
                    {/* Email */}
                    <div>
                      <label className={`block text-sm mb-2 font-medium ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>{t.email}</label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                          theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors({ ...errors, email: '' });
                          }}
                          placeholder={t.email}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                          } focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                          required
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      {t.sendResetLink}
                    </motion.button>

                    {/* Back to Login Link */}
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => {
                          setPageMode('login');
                          setErrors({});
                        }}
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        {t.backToLogin}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mt-4 p-4 rounded-lg backdrop-blur-xl border flex items-center gap-3 ${
                  theme === 'dark'
                    ? 'bg-green-500/20 border-green-400/30 text-green-300'
                    : 'bg-green-100 border-green-300 text-green-800'
                }`}
              >
                <Check className="w-5 h-5" />
                <span className="font-medium">
                  {pageMode === 'register' ? t.registerSuccess : t.resetSuccess}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}