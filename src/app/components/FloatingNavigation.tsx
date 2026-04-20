import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { useApp } from '../contexts/AppContext';

interface FloatingNavigationProps {
  totalScreens?: number;
}

export function FloatingNavigation({ totalScreens = 7 }: FloatingNavigationProps) {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useApp();

  // Track current screen based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const screens = document.querySelectorAll('[data-screen]');
      let current = 1;

      screens.forEach((screen) => {
        const rect = screen.getBoundingClientRect();
        const screenTop = rect.top;
        const screenHeight = rect.height;
        
        // Consider a screen as "current" if its center is in the viewport
        if (screenTop <= window.innerHeight / 2 && screenTop + screenHeight > window.innerHeight / 2) {
          current = parseInt(screen.getAttribute('data-screen') || '1');
        }
      });

      setCurrentScreen(current);

      // Show/hide based on scroll position
      setIsVisible(window.scrollY > 200);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific screen
  const scrollToScreen = (screenNumber: number) => {
    const targetScreen = document.querySelector(`[data-screen="${screenNumber}"]`);
    if (targetScreen) {
      targetScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Navigate to previous/next page
  const navigatePage = (direction: 'prev' | 'next') => {
    const pages = ['/intro', '/constellation', '/services', '/about', '/auth'];
    const currentIndex = pages.indexOf(location.pathname);
    
    if (direction === 'prev' && currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (direction === 'next' && currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if we can navigate to prev/next page
  const canNavigatePrev = () => {
    const pages = ['/intro', '/constellation', '/services', '/about', '/auth'];
    const currentIndex = pages.indexOf(location.pathname);
    return currentIndex > 0;
  };

  const canNavigateNext = () => {
    const pages = ['/intro', '/constellation', '/services', '/about', '/auth'];
    const currentIndex = pages.indexOf(location.pathname);
    return currentIndex < pages.length - 1;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-6 bottom-6 z-50 flex flex-col gap-3"
        >
          {/* Vertical navigation (screens) */}
          <div className={`flex flex-col gap-2 p-3 rounded-2xl backdrop-blur-xl border shadow-2xl ${
            theme === 'dark'
              ? 'bg-white/10 border-cyan-400/30'
              : 'bg-white/90 border-cyan-300'
          }`}>
            {/* Up button */}
            <button
              onClick={() => scrollToScreen(Math.max(1, currentScreen - 1))}
              disabled={currentScreen === 1}
              className={`p-2 rounded-lg transition-all ${
                currentScreen === 1
                  ? 'opacity-30 cursor-not-allowed'
                  : theme === 'dark'
                  ? 'hover:bg-cyan-400/20 text-cyan-400'
                  : 'hover:bg-cyan-100 text-cyan-600'
              }`}
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            {/* Screen indicator */}
            <div className={`px-3 py-1 text-sm font-bold text-center ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            }`}>
              {currentScreen}/{totalScreens}
            </div>

            {/* Down button */}
            <button
              onClick={() => scrollToScreen(Math.min(totalScreens, currentScreen + 1))}
              disabled={currentScreen === totalScreens}
              className={`p-2 rounded-lg transition-all ${
                currentScreen === totalScreens
                  ? 'opacity-30 cursor-not-allowed'
                  : theme === 'dark'
                  ? 'hover:bg-cyan-400/20 text-cyan-400'
                  : 'hover:bg-cyan-100 text-cyan-600'
              }`}
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal navigation (pages) */}
          <div className={`flex gap-2 p-3 rounded-2xl backdrop-blur-xl border shadow-2xl ${
            theme === 'dark'
              ? 'bg-white/10 border-green-400/30'
              : 'bg-white/90 border-green-300'
          }`}>
            {/* Left button */}
            <button
              onClick={() => navigatePage('prev')}
              disabled={!canNavigatePrev()}
              className={`p-2 rounded-lg transition-all ${
                !canNavigatePrev()
                  ? 'opacity-30 cursor-not-allowed'
                  : theme === 'dark'
                  ? 'hover:bg-green-400/20 text-green-400'
                  : 'hover:bg-green-100 text-green-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right button */}
            <button
              onClick={() => navigatePage('next')}
              disabled={!canNavigateNext()}
              className={`p-2 rounded-lg transition-all ${
                !canNavigateNext()
                  ? 'opacity-30 cursor-not-allowed'
                  : theme === 'dark'
                  ? 'hover:bg-green-400/20 text-green-400'
                  : 'hover:bg-green-100 text-green-600'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
