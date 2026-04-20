import { useState, useRef, useEffect } from 'react';
import { Resizable } from 're-resizable';
import { X, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../contexts/AppContext';

interface CastModeProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'zh' | 'en';
  theme?: 'dark' | 'light';
}

export function CastMode({ isOpen, onClose, language: propLanguage, theme: propTheme }: CastModeProps) {
  const { theme: contextTheme, language: contextLanguage } = useApp();
  const theme = propTheme || contextTheme;
  const language = propLanguage || contextLanguage;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState({ width: 800, height: 600 }); // 4:3 ratio
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 获取所有可用的页面路由
  const pages = language === 'zh' 
    ? [
        { path: '/', name: '首页' },
        { path: '/constellation', name: '星座简介' },
        { path: '/services', name: '开放服务' },
        { path: '/about', name: '关于我们' },
      ]
    : [
        { path: '/', name: 'Home' },
        { path: '/constellation', name: 'Constellation' },
        { path: '/services', name: 'Services' },
        { path: '/about', name: 'About Us' },
      ];

  // 切换全屏
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // 切换页面
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  // 键盘快捷键
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isFullscreen) {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousPage();
      } else if (e.key === 'ArrowRight') {
        goToNextPage();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen]);

  // 更新 iframe 内容
  useEffect(() => {
    if (iframeRef.current && isOpen) {
      iframeRef.current.src = pages[currentPage].path;
    }
  }, [currentPage, isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{
          backgroundColor: theme === 'dark' 
            ? 'rgba(0, 5, 32, 0.95)' 
            : 'rgba(0, 0, 0, 0.85)'
        }}
      >
        {/* 背景模糊层 */}
        <div className="absolute inset-0 backdrop-blur-md" onClick={isFullscreen ? undefined : onClose} />

        {/* 投屏画框 */}
        <div
          ref={containerRef}
          className="relative z-10 flex flex-col items-center justify-center"
          style={{
            width: isFullscreen ? '100vw' : undefined,
            height: isFullscreen ? '100vh' : undefined,
          }}
        >
          {isFullscreen ? (
            // 全屏模式
            <div className="w-full h-full flex flex-col">
              {/* 全屏顶部控制栏 */}
              <div className={`flex items-center justify-between px-6 py-4 ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-black/80 to-transparent'
                  : 'bg-gradient-to-b from-gray-900/80 to-transparent'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-2 rounded-lg backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-cyan-400/30'
                      : 'bg-white/20 border border-cyan-300/50'
                  }`}>
                    <span className="text-white font-medium">{pages[currentPage].name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className={`p-3 rounded-lg backdrop-blur-xl transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                        : 'bg-white/20 hover:bg-white/30 border border-white/30 text-white'
                    }`}
                    title="退出全屏 (F)"
                  >
                    <Minimize2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={onClose}
                    className={`p-3 rounded-lg backdrop-blur-xl transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 text-red-400'
                        : 'bg-red-500/30 hover:bg-red-500/40 border border-red-300/50 text-red-300'
                    }`}
                    title="关闭投屏 (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 全屏内容区 */}
              <div className="flex-1 relative">
                <iframe
                  ref={iframeRef}
                  src={pages[currentPage].path}
                  className="w-full h-full border-0"
                  title="Cast Content"
                />
              </div>

              {/* 全屏底部切页控制 */}
              <div className={`flex items-center justify-center gap-4 px-6 py-4 ${
                theme === 'dark'
                  ? 'bg-gradient-to-t from-black/80 to-transparent'
                  : 'bg-gradient-to-t from-gray-900/80 to-transparent'
              }`}>
                <button
                  onClick={goToPreviousPage}
                  className={`p-3 rounded-lg backdrop-blur-xl transition-all hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-white/10 hover:bg-white/20 border border-cyan-400/30 text-cyan-400'
                      : 'bg-white/20 hover:bg-white/30 border border-cyan-300/50 text-cyan-300'
                  }`}
                  title="上一页 (←)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className={`px-6 py-2 rounded-lg backdrop-blur-xl ${
                  theme === 'dark'
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-white/20 border border-white/30'
                }`}>
                  <span className="text-white font-medium">
                    {currentPage + 1} / {pages.length}
                  </span>
                </div>
                <button
                  onClick={goToNextPage}
                  className={`p-3 rounded-lg backdrop-blur-xl transition-all hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-white/10 hover:bg-white/20 border border-cyan-400/30 text-cyan-400'
                      : 'bg-white/20 hover:bg-white/30 border border-cyan-300/50 text-cyan-300'
                  }`}
                  title="下一页 (→)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ) : (
            // 窗口模式
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <Resizable
                size={size}
                onResizeStop={(e, direction, ref, d) => {
                  setSize({
                    width: size.width + d.width,
                    height: size.height + d.height,
                  });
                }}
                minWidth={400}
                minHeight={300}
                lockAspectRatio={false}
                className={`rounded-2xl overflow-hidden shadow-2xl ${
                  theme === 'dark'
                    ? 'shadow-cyan-500/20'
                    : 'shadow-blue-500/30'
                }`}
                style={{
                  border: theme === 'dark'
                    ? '2px solid rgba(34, 211, 238, 0.3)'
                    : '2px solid rgba(59, 130, 246, 0.5)',
                }}
              >
                <div className="w-full h-full flex flex-col">
                  {/* 顶部控制栏 */}
                  <div className={`flex items-center justify-between px-4 py-3 backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-cyan-900/40 border-b border-cyan-400/20'
                      : 'bg-gradient-to-r from-blue-100/90 via-cyan-100/90 to-blue-100/90 border-b border-blue-300/50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
                      } animate-pulse`} />
                      <span className={`font-medium text-sm ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}>
                        {pages[currentPage].name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleFullscreen}
                        className={`p-2 rounded-lg transition-all hover:scale-110 ${
                          theme === 'dark'
                            ? 'hover:bg-white/10 text-cyan-400'
                            : 'hover:bg-blue-200/50 text-blue-600'
                        }`}
                        title="全屏 (F)"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={onClose}
                        className={`p-2 rounded-lg transition-all hover:scale-110 ${
                          theme === 'dark'
                            ? 'hover:bg-red-500/20 text-red-400'
                            : 'hover:bg-red-100 text-red-600'
                        }`}
                        title="关闭 (Esc)"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 内容区 */}
                  <div className="flex-1 bg-white relative overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      src={pages[currentPage].path}
                      className="w-full h-full border-0"
                      title="Cast Content"
                    />
                  </div>

                  {/* 底部切页控制 */}
                  <div className={`flex items-center justify-center gap-3 px-4 py-3 backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-cyan-900/40 border-t border-cyan-400/20'
                      : 'bg-gradient-to-r from-blue-100/90 via-cyan-100/90 to-blue-100/90 border-t border-blue-300/50'
                  }`}>
                    <button
                      onClick={goToPreviousPage}
                      className={`p-2 rounded-lg transition-all hover:scale-110 ${
                        theme === 'dark'
                          ? 'hover:bg-white/10 text-cyan-400'
                          : 'hover:bg-blue-200/50 text-blue-600'
                      }`}
                      title="上一页 (←)"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className={`px-4 py-1 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-blue-200'
                    }`}>
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                      }`}>
                        {currentPage + 1} / {pages.length}
                      </span>
                    </div>
                    <button
                      onClick={goToNextPage}
                      className={`p-2 rounded-lg transition-all hover:scale-110 ${
                        theme === 'dark'
                          ? 'hover:bg-white/10 text-cyan-400'
                          : 'hover:bg-blue-200/50 text-blue-600'
                      }`}
                      title="下一页 (→)"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Resizable>

              {/* 提示信息 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`mt-6 text-center text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-300'
                }`}
              >
                <p>
                  {language === 'zh' 
                    ? '💡 快捷键：F - 全屏 | ← → - 切页 | Esc - 关闭'
                    : '💡 Shortcuts: F - Fullscreen | ← → - Switch Pages | Esc - Close'
                  }
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}