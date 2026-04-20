import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useApp } from '../contexts/AppContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X,
  Orbit,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, theme, setTheme } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const navItems = language === 'zh' 
    ? ['星座简介', '开放服务', '关于我们']
    : ['Constellation', 'Services', 'About Us'];

  const navPaths = ['/constellation', '/services', '/about'];

  return (
    <>
      {/* Collapsed Circular Button */}
      <AnimatePresence>
        {navbarCollapsed && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            onClick={toggleNavbar}
            className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-xl shadow-2xl flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-blue-500/80 via-cyan-500/80 to-green-500/80 hover:from-blue-600/90 hover:via-cyan-600/90 hover:to-green-600/90' 
                : 'bg-gradient-to-br from-blue-400/90 via-cyan-400/90 to-green-400/90 hover:from-blue-500 hover:via-cyan-500 hover:to-green-500'
            }`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full Navbar */}
      <AnimatePresence>
        {!navbarCollapsed && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 2xl:px-8 3xl:px-10 5xl:px-4"
          >
            <div className={`container-responsive-wide mx-auto backdrop-blur-xl ${
              theme === 'dark' ? 'bg-black/20' : 'bg-white/80'
            } border ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            } rounded-2xl px-6 py-3 shadow-2xl`}>
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link 
                  to="/constellation" 
                  className="flex items-end gap-3 group cursor-pointer"
                >
                  <motion.span 
                    className="text-4xl font-bold bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    zero2x
                  </motion.span>
                  <span className={`text-base font-bold hidden sm:block transition-all ${
                    theme === 'dark' ? 'text-white/90 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {language === 'zh' ? '三体计算星座' : 'Three-Body Constellation'}
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === navPaths[index];
                    return (
                      <Link
                        key={item}
                        to={navPaths[index]}
                        className="relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20 text-transparent bg-clip-text font-semibold'
                              : theme === 'dark' 
                                ? 'text-white/70 hover:text-white hover:bg-white/5' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          <span className={isActive ? 'bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-semibold' : ''}>
                            {item}
                          </span>
                        </motion.div>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                        {!isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {/* Language Toggle - 优化版 */}
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: theme === 'dark' ? '0 0 15px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLanguage}
                    className={`px-3 py-2 rounded-lg ${
                      theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                    } border transition-all flex items-center gap-1.5`}
                    title={language === 'zh' ? 'Switch to English' : '切换到中文'}
                  >
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {language === 'zh' ? '中' : 'EN'}
                    </span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                      /
                    </span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                      {language === 'zh' ? 'EN' : '中'}
                    </span>
                  </motion.button>

                  {/* Theme Toggle */}
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: theme === 'dark' ? '0 0 15px rgba(250, 204, 21, 0.3)' : '0 0 15px rgba(59, 130, 246, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                    } border transition-all`}
                  >
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon className="w-5 h-5 text-blue-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Register Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/auth')}
                    className={`hidden md:block px-4 py-2 rounded-lg ${
                      theme === 'dark' ? 'text-white/80 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    } transition-all`}
                  >
                    {language === 'zh' ? '注册' : 'Register'}
                  </motion.button>

                  {/* Login Button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 25px rgba(59, 130, 246, 0.6), 0 10px 20px rgba(0, 0, 0, 0.2)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/auth')}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-medium transition-all relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                    <span className="relative z-10">{language === 'zh' ? '登录' : 'Login'}</span>
                  </motion.button>

                  {/* Collapse Navbar Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleNavbar}
                    className={`hidden md:block p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                    } border transition-all`}
                    title={language === 'zh' ? '隐藏导航栏' : 'Collapse Navbar'}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="eyeoff"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <EyeOff className={`w-5 h-5 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`} />
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>

                  {/* Mobile Menu Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:hidden p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                    } border transition-all`}
                  >
                    <AnimatePresence mode="wait">
                      {mobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className={`w-5 h-5 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className={`w-5 h-5 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden"
                  >
                    <div className="pt-4 pb-2 space-y-2">
                      {navItems.map((item, index) => {
                        const isActive = location.pathname === navPaths[index];
                        return (
                          <motion.div
                            key={item}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={navPaths[index]}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-4 py-2 rounded-lg ${
                                isActive
                                  ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20'
                                  : theme === 'dark' 
                                    ? 'text-white/80 hover:text-white hover:bg-white/5' 
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                              } transition-all`}
                            >
                              <span className={isActive ? 'bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-semibold' : ''}>
                                {item}
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          navigate('/auth');
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                          theme === 'dark' 
                            ? 'text-white/80 hover:text-white hover:bg-white/5' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                        } transition-all md:hidden`}
                      >
                        {language === 'zh' ? '注册' : 'Register'}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}