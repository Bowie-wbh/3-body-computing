import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { Starfield } from '../components/Starfield';
import { ArrowLeft, Lock, User, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { language, theme } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证管理员账号密码
    if (username === 'wbh' && password === 'wbh') {
      // 登录成功，保存管理员状态
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError(language === 'zh' ? '账号或密码错误' : 'Invalid username or password');
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#000520] via-[#000a30] to-[#001040] text-white'
        : 'bg-gradient-to-b from-sky-50 via-cyan-50 to-blue-100 text-gray-900'
    }`}>
      <Starfield count={300} speed={0.5} mouseEffect={false} />

      {/* Back to Home button */}
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
        <span className="font-medium">{language === 'zh' ? '返回首页' : 'Back Home'}</span>
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 mb-4">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className={`text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark'
                ? 'from-blue-400 via-cyan-400 to-green-400'
                : 'from-blue-600 via-cyan-600 to-green-600'
            }`}>
              {language === 'zh' ? '管理员登录' : 'Admin Login'}
            </h1>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              {language === 'zh' ? '请使用管理员账号登录' : 'Please login with admin account'}
            </p>
          </div>

          {/* Form Container */}
          <div className={`p-8 rounded-2xl backdrop-blur-xl border ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200 shadow-xl'
          }`}>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username */}
              <div>
                <label className={`block text-sm mb-2 font-medium ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {language === 'zh' ? '账号' : 'Username'}
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setError('');
                    }}
                    placeholder={language === 'zh' ? '请输入账号' : 'Enter username'}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                        : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                    } focus:outline-none ${error ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className={`block text-sm mb-2 font-medium ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {language === 'zh' ? '密码' : 'Password'}
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                  }`} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder={language === 'zh' ? '请输入密码' : 'Enter password'}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500'
                        : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500'
                    } focus:outline-none ${error ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {language === 'zh' ? '登录' : 'Login'}
              </motion.button>

              {/* User Login Link */}
              <div className="text-center">
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {language === 'zh' ? '普通用户？' : 'Regular user?'}{' '}
                </span>
                <button
                  type="button"
                  onClick={() => navigate('/auth')}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {language === 'zh' ? '用户登录' : 'User Login'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
