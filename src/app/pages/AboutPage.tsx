import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LightBackground } from '../components/LightBackground';
import { Cpu, Zap, Wifi, Server, Brain, Phone, Mail, MapPin, Check, Handshake, FileText, Rocket, Satellite, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { aboutPageImages } from '../data/imageConfig';

// Import technology images from Figma design
import imgComputer from "figma:asset/302b1c8b7eabefdf2aad9f0fdf984025237ae16b.png";
import imgModel from "figma:asset/ea8e5b8358a7b0a42e463ca3875b86619a0c3aac.png";
import imgLaser from "figma:asset/1ad5b028dd81536db5f25e923ff9b59cd9fae5f6.png";
import imgRouter from "figma:asset/b706473cdb60b7a0c844fb6e4e744832ca2b1c5a.png";
import imgDistributed from "figma:asset/24006ac554fcbc60285022ae3a46441a9b1e0fe0.png";

// Import WeChat QR code from Figma design
import imgQRCode from "figma:asset/a23f5a4ce4d94b9f5ff7c33506afc114326b5a67.png";

export default function AboutPage() {
  const { language, theme } = useApp();
  const t = translations[language].about;

  // Auto scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#000520] via-[#000a30] to-[#001040] text-white'
        : 'bg-gradient-to-b from-sky-50 via-cyan-50 to-emerald-50 text-gray-900'
    }`}>
      {theme === 'dark' && <Starfield count={250} speed={0.3} />}
      <Navbar />

      {/* Screen 1 - About */}
      <Screen1 t={t.screen1} />

      {/* Screen 2 - Timeline */}
      <Screen2 t={t.screen2} />

      {/* Screen 3 - Achievements */}
      <Screen3 t={t.screen3} />

      {/* Screen 4 - Contact */}
      <Screen4 t={t.screen4} />

      <Footer />
    </div>
  );
}

function Screen1({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 pt-32 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-blue-950/20 to-transparent'
        : 'bg-gradient-to-b from-transparent via-blue-100/40 to-transparent'
    }`}>
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-8"
        ><span className={`bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-blue-400 via-cyan-400 to-green-400'
              : 'from-blue-600 via-cyan-600 to-green-600'
          } bg-clip-text text-transparent`}>{t.title}</span></motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg md:text-xl leading-relaxed text-center mb-12 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-700'
          }`}
        >
          {t.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`relative aspect-video rounded-2xl overflow-hidden group ${
            theme === 'dark'
              ? 'border border-blue-400/20'
              : 'border-2 border-blue-300/50 shadow-xl'
          }`}
        >
          <ImageWithFallback 
            src={aboutPageImages.hero}
            alt={t.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
              : 'bg-gradient-to-t from-black/30 via-black/10 to-transparent'
          }`} />
        </motion.div>
      </div>
    </section>
  );
}

function Screen2({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { theme } = useApp();
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Images for each timeline event
  const eventImages = aboutPageImages.timeline;

  // Auto-play functionality - cycle through events when not hovering
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setSelectedEvent((prev) => (prev + 1) % t.events.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isHovering, t.events.length]);

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 py-20 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-green-950/30 to-transparent'
        : 'bg-gradient-to-b from-transparent via-emerald-100/30 to-transparent'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className={`bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-green-400 to-cyan-400'
              : 'from-green-600 to-cyan-600'
          } bg-clip-text text-transparent`}>
            {t.title}
          </span>
        </motion.h2>

        <div 
          className="flex flex-col md:flex-row gap-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Timeline Navigation */}
          <div className="md:w-1/4 space-y-3">
            {t.events.map((event: any, index: number) => (
              <motion.button
                key={event.date}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedEvent(index)}
                className={`w-full text-left rounded-xl transition-all min-h-[60px] ${ selectedEvent === index ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg' : theme === 'dark' ? 'bg-white/5 backdrop-blur-xl border border-green-400/20 hover:border-green-400/40 hover:bg-white/10 text-white/60' : 'bg-white/80 backdrop-blur-xl border-2 border-emerald-200 hover:border-emerald-400 text-gray-600 shadow-md hover:shadow-lg' } px-4 py-3`}
              >
                <div className="w-1/2 font-bold mb-2 text-sm">{event.date}</div>
                
              </motion.button>
            ))}
          </div>

          {/* Event Detail */}
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              const url = t.events[selectedEvent].url;
              if (url) {
                window.open(url, '_blank');
              }
            }}
            className={`md:w-3/4 p-8 rounded-2xl backdrop-blur-xl ${
              t.events[selectedEvent].url ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''
            } ${ theme === 'dark' ? 'bg-white/5 border border-green-400/20' : 'bg-white/80 border-2 border-emerald-200 shadow-xl' }`}
          >
            <div className="aspect-video rounded-lg mb-6 overflow-hidden relative group">
              <ImageWithFallback 
                src={eventImages[selectedEvent]}
                alt={t.events[selectedEvent].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent' 
                  : 'bg-gradient-to-t from-black/30 via-black/10 to-transparent'
              }`} />
            </div>
            <div className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}>
              {t.events[selectedEvent].date}
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>{t.events[selectedEvent].title}</h3>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>{t.events[selectedEvent].desc}</p>
            {t.events[selectedEvent].url && (
              <div className={`mt-4 text-sm flex items-center gap-2 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                <span>点击查看详情</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Screen3({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();
  
  // Images for each achievement card - matching the order of achievements
  const achievementImages = [
    imgComputer,      // 1. "之江智加"星载智能计算机
    imgLaser,         // 2. "之江智光"星间激光通信机
    imgRouter,        // 3. "之江智桥"星载高速路由器
    imgDistributed,   // 4. 之江天基分布式操作系统
    imgModel,         // 5. 具身智能卫星模型
  ];

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 py-12 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-teal-950/30 to-transparent'
        : 'bg-gradient-to-b from-transparent via-teal-100/30 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 to-green-400'
                : 'from-blue-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </span>
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>{t.subtitle}</p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {t.achievements.slice(0, 3).map((achievement: any, index: number) => {
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`p-4 rounded-2xl backdrop-blur-xl transition-all group overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10'
                    : 'bg-white/80 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image at the top with animation */}
                <div className={`relative aspect-[16/9] rounded-xl mb-3 overflow-hidden ${
                  theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                    className="flex items-center justify-center h-full p-3"
                  >
                    <ImageWithFallback 
                      src={achievementImages[index]}
                      alt={achievement.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
                
                <h3 className={`text-base font-bold mb-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-800 group-hover:text-cyan-600'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-2 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>{achievement.desc}</p>
                {achievement.highlight && (
                  <div className={`inline-block px-3 py-1 rounded-lg text-sm font-bold ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-cyan-300 border-2 border-cyan-400/50'
                      : 'bg-gradient-to-r from-cyan-200 to-green-200 text-cyan-800 border-2 border-cyan-400'
                  }`}>
                    {achievement.highlight}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Second row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {t.achievements.slice(3, 5).map((achievement: any, index: number) => {
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
                className={`p-4 rounded-2xl backdrop-blur-xl transition-all group overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10'
                    : 'bg-white/80 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image at the top with animation */}
                <div className={`relative aspect-[16/9] rounded-xl mb-3 overflow-hidden ${
                  theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: (index + 3) * 0.15 + 0.3 }}
                    className="flex items-center justify-center h-full p-3"
                  >
                    <ImageWithFallback 
                      src={achievementImages[index + 3]}
                      alt={achievement.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
                
                <h3 className={`text-base font-bold mb-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-800 group-hover:text-cyan-600'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-2 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>{achievement.desc}</p>
                {achievement.highlight && (
                  <div className={`inline-block px-3 py-1 rounded-lg text-sm font-bold ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-cyan-300 border-2 border-cyan-400/50'
                      : 'bg-gradient-to-r from-cyan-200 to-green-200 text-cyan-800 border-2 border-cyan-400'
                  }`}>
                    {achievement.highlight}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Screen4({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme, language } = useApp();
  const [expandedButton, setExpandedButton] = useState<number | null>(null);

  const buttons = language === 'zh'
    ? [
        { id: 1, title: '获取产品介绍资料', icon: FileText },
        { id: 2, title: '成为星座建设合作伙伴', icon: Rocket },
        { id: 3, title: '成为太空智能应用合作伙伴', icon: Satellite },
      ]
    : [
        { id: 1, title: 'Get Product Information', icon: FileText },
        { id: 2, title: 'Become a Constellation Partner', icon: Rocket },
        { id: 3, title: 'Become a Space AI Partner', icon: Satellite },
      ];

  const toggleButton = (id: number) => {
    setExpandedButton(expandedButton === id ? null : id);
  };

  return (
    <section ref={ref} className={`relative min-h-[50vh] flex items-center justify-center px-6 py-20 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent'
        : 'bg-gradient-to-b from-transparent via-green-100/30 to-transparent'
    }`}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className={`bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-green-400 to-blue-400'
              : 'from-green-600 to-blue-600'
          } bg-clip-text text-transparent`}>
            {language === 'zh' ? '联系我们' : 'Contact Us'}
          </span>
        </motion.h2>

        <div className="space-y-4">
          {buttons.map((button, index) => {
            const Icon = button.icon;
            const isExpanded = expandedButton === button.id;

            return (
              <motion.div
                key={button.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Button */}
                <motion.button
                  onClick={() => toggleButton(button.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-6 rounded-2xl backdrop-blur-xl transition-all flex items-center justify-between group ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10'
                      : 'bg-white/80 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center ${
                      theme === 'light' ? 'shadow-lg' : ''
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-xl font-semibold transition-colors ${
                      theme === 'dark'
                        ? 'text-white group-hover:text-cyan-400'
                        : 'text-gray-800 group-hover:text-cyan-600'
                    }`}>
                      {button.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                {/* Expanded Contact Card */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 p-8 rounded-2xl backdrop-blur-xl ${
                        theme === 'dark'
                          ? 'bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-400/20'
                          : 'bg-gradient-to-br from-cyan-50 to-green-50 border-2 border-cyan-200 shadow-lg'
                      }`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Contact Information */}
                          <div className="space-y-5">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className={`flex items-start gap-3 ${
                                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                              }`}
                            >
                              <Phone className={`w-5 h-5 flex-shrink-0 mt-1 ${
                                theme === 'dark' ? 'text-green-400' : 'text-green-600'
                              }`} />
                              <div>
                                <div className={`text-sm mb-1 ${
                                  theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                                }`}>
                                  {language === 'zh' ? '电话' : 'Phone'}
                                </div>
                                <div className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                                }`}>13975139466</div>
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className={`flex items-start gap-3 ${
                                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                              }`}
                            >
                              <Mail className={`w-5 h-5 flex-shrink-0 mt-1 ${
                                theme === 'dark' ? 'text-green-400' : 'text-green-600'
                              }`} />
                              <div>
                                <div className={`text-sm mb-1 ${
                                  theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                                }`}>
                                  {language === 'zh' ? '邮箱' : 'Email'}
                                </div>
                                <div className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                                }`}>guogang@zhejianglab.org</div>
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                              className={`flex items-start gap-3 ${
                                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                              }`}
                            >
                              <MapPin className={`w-5 h-5 flex-shrink-0 mt-1 ${
                                theme === 'dark' ? 'text-green-400' : 'text-green-600'
                              }`} />
                              <div>
                                <div className={`text-sm mb-1 ${
                                  theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                                }`}>
                                  {language === 'zh' ? '地址' : 'Address'}
                                </div>
                                <div className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                                }`}>
                                  {language === 'zh' ? '杭州市余杭区文一西路2880号' : 'No. 2880 Wenyi West Road, Yuhang District, Hangzhou'}
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* QR Code Placeholder */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center"
                          >
                            <div className={`w-48 h-48 rounded-2xl flex items-center justify-center ${
                              theme === 'dark'
                                ? 'bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-400/30'
                                : 'bg-gradient-to-br from-cyan-100 to-green-100 border-2 border-cyan-200'
                            }`}>
                              <div className="text-center">
                                <ImageWithFallback 
                                  src={imgQRCode}
                                  alt="QR Code"
                                  className={`w-40 h-40 rounded-lg mx-auto object-cover ${
                                    theme === 'dark' ? 'bg-white/10' : 'bg-white/50'
                                  }`}
                                />                   
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}