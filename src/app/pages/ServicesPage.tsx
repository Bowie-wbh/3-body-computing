import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LightBackground } from '../components/LightBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Database, Code, Shield, Rocket, X, Maximize2, Minimize2, FlaskConical, CheckCircle2, Satellite, RefreshCw } from 'lucide-react';
import { servicesPageImages } from '../data/imageConfig';

// Import Figma model images
import imgRectangle5 from "figma:asset/68dfcaef95ef3c352dac83208c9a3535d6792a09.png";
import imgRectangle6 from "figma:asset/6a59a2b6b156d41414f144d78e042ed4dd242f97.png";
import imgRectangle7 from "figma:asset/770d7ed91e0f54a79c1861850f00f63a612c80db.png";
import imgRectangle8 from "figma:asset/8fd9f5f5d52d62c47a572e6ddb0ce22e5c85407d.png";
import imgRectangle9 from "figma:asset/741f33193819fe01d3ea7966fc2d1dde20545e41.png";
import imgRectangle10 from "figma:asset/0a7c87fe71d8735cba7329303476d44e46ca8ba5.png";
import imgRectangle11 from "figma:asset/afea7231e6593730e462c4cfffe5d3cd1022c74b.png";
import imgRectangle12 from "figma:asset/a77b28b326fab5ae02b27af1bd35b7fa82349388.png";
import imgRectangle13 from "figma:asset/1afbdb0303547e145b6fd250e8588c65b1ff6665.png";
import imgRectangle14 from "figma:asset/28e79ec329956cc54d0bab6f0d20b4fff09eab07.png";

// Import Figma carousel/application images
import imgCarousel1 from "figma:asset/ea035d335997adce2e5f882a778a0e9ab74e1c00.png";
import imgCarousel2 from "figma:asset/a238a95eb8a196699fca64e315a1601230144e95.png";
import imgCarousel3 from "figma:asset/464f3c1e3921a6b6b3e80850ebee278edbf57a80.png";
import imgCarousel4 from "figma:asset/2626c982276bf0931950df8a6bedf36ec6978df7.png";

// Import design full image (仿真画面)
import imgDesignFull from "figma:asset/1c34a9b8cfafd74e72123efc64dafe34f98356b1.png";

export default function ServicesPage() {
  const navigate = useNavigate();
  const { language, theme } = useApp();
  const t = translations[language].services;
  const location = useLocation();

  // Auto scroll to top when page loads OR scroll to specific section if state is provided
  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    
    if (state?.scrollTo) {
      // If we have a scrollTo target, wait a bit for the page to render then scroll
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className={`min-h-screen ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#000520] via-[#000a30] to-[#001040] text-white'
        : 'bg-gradient-to-b from-sky-50 via-cyan-50 to-emerald-50 text-gray-900'
    }`}>
      {theme === 'dark' && <Starfield count={250} speed={0.3} />}
      <Navbar />

      {/* Screen 1 - Hero with title, subtitle, button and image */}
      <Screen1 t={t.screen1} navigate={navigate} />

      {/* Screen 1b - Networking Capability */}
      <Screen1b t={t.screen1.stats} />

      {/* Screen 1c - Computing Capability */}
      <Screen1c t={t.screen1.stats} />

      {/* Screen 2 - In-Orbit Models */}
      <Screen2 t={t.screen2} />

      {/* Screen 2b - Scientific Payload Verification */}
      <Screen2b t={t.screen2b} />

      {/* Screen 3 - Service Process */}
      <Screen3 t={t.screen3} />

      <Footer />
    </div>
  );
}

function Screen1({ t, navigate }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center ${ theme === 'dark' ? 'bg-gradient-to-b from-transparent via-blue-950/20 to-transparent' : 'bg-gradient-to-b from-transparent via-blue-100/40 to-transparent' } px-[24px] pt-[120px] pb-[40px]`}>
      <div className="container-responsive-wide mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title, Subtitle, Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-blue-400 via-cyan-400 to-green-400'
                  : 'from-blue-600 via-cyan-600 to-green-600'
              } bg-clip-text text-transparent`}>
                {t.title}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-4 ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              {t.subtitle}
            </p>
            <p className={`text-xl md:text-2xl mb-8 font-semibold bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-cyan-400 via-green-400 to-blue-400'
                : 'from-cyan-600 via-green-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              {t.highlight}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/auth')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right: 1:1 Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative rounded-2xl overflow-hidden backdrop-blur-xl group ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 shadow-2xl'
                : 'bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300/50 shadow-xl'
            }`}
          >
            {/* Image content area - 1:1 aspect ratio */}
            <div className="relative aspect-square overflow-hidden">
              <ImageWithFallback 
                src={imgDesignFull}
                alt={t.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open('https://os-paint-28010428.figma.site', '_blank')}
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                    theme === 'dark'
                      ? 'bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/40'
                      : 'bg-white/70 hover:bg-white/90 backdrop-blur-md border-2 border-white shadow-xl'
                  }`}
                >
                  <div className={`w-0 h-0 border-l-[20px] border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent ml-1 ${
                    theme === 'dark' ? 'border-l-white' : 'border-l-blue-600'
                  }`} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Screen 1b - Networking Capability (组网能力)
function Screen1b({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();
  const [count3, setCount3] = useState(0);
  const [count6, setCount6] = useState(0);

  // Number counting animations
  useEffect(() => {
    if (isInView) {
      // Counter for 3 stars
      let start3 = 0;
      const timer3 = setInterval(() => {
        start3 += 0.15;
        if (start3 >= 3) {
          setCount3(3);
          clearInterval(timer3);
        } else {
          setCount3(Math.floor(start3));
        }
      }, 50);

      // Counter for 6 stars
      let start6 = 0;
      const timer6 = setInterval(() => {
        start6 += 0.3;
        if (start6 >= 6) {
          setCount6(6);
          clearInterval(timer6);
        } else {
          setCount6(Math.floor(start6));
        }
      }, 50);

      return () => {
        clearInterval(timer3);
        clearInterval(timer6);
      };
    }
  }, [isInView]);

  return (
    null
  );
}

// Screen 1c - Computing Capability (计算能力)
function Screen1c({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();
  const [count744, setCount744] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count1400, setCount1400] = useState(0);

  // Number counting animations
  useEffect(() => {
    if (isInView) {
      // Counter for 744
      let start744 = 0;
      const timer744 = setInterval(() => {
        start744 += 37.2;
        if (start744 >= 744) {
          setCount744(744);
          clearInterval(timer744);
        } else {
          setCount744(Math.floor(start744));
        }
      }, 50);

      // Counter for 5
      let start5 = 0;
      const timer5 = setInterval(() => {
        start5 += 0.25;
        if (start5 >= 5) {
          setCount5(5);
          clearInterval(timer5);
        } else {
          setCount5(Math.floor(start5));
        }
      }, 50);

      // Counter for 1400
      let start1400 = 0;
      const timer1400 = setInterval(() => {
        start1400 += 70;
        if (start1400 >= 1400) {
          setCount1400(1400);
          clearInterval(timer1400);
        } else {
          setCount1400(Math.floor(start1400));
        }
      }, 50);

      return () => {
        clearInterval(timer744);
        clearInterval(timer5);
        clearInterval(timer1400);
      };
    }
  }, [isInView]);

  return (
    null
  );
}

function Screen2({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { theme } = useApp();
  const navigate = useNavigate();
  const [count2, setCount2] = useState(0);

  // Model card images (1:1 aspect ratio) - Using Figma design images
  const modelImages = [
    imgRectangle5,
    imgRectangle6,
    imgRectangle7,
    imgRectangle8,
    imgRectangle9,
    imgRectangle10,
    imgRectangle11,
    imgRectangle12,
    imgRectangle13,
    imgRectangle14,
  ];

  // Number counting animation
  useEffect(() => {
    if (isInView) {
      // Counter for 2 (days)
      let start2 = 0;
      const timer2 = setInterval(() => {
        start2 += 0.1;
        if (start2 >= 2) {
          setCount2(2);
          clearInterval(timer2);
        } else {
          setCount2(Math.floor(start2));
        }
      }, 50);

      return () => {
        clearInterval(timer2);
      };
    }
  }, [isInView]);

  return (
    <section id="orbital-models" ref={ref} className={`relative min-h-[50vh] flex items-center justify-center ${ theme === 'dark' ? 'bg-gradient-to-b from-transparent via-green-950/30 to-transparent' : 'bg-gradient-to-b from-transparent via-emerald-100/30 to-transparent' } px-[24px] pt-[40px] pb-[40px]`}>
      <div className="container-responsive-wide mx-auto w-full">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-green-400 to-cyan-400'
                : 'from-green-600 to-cyan-600'
            } bg-clip-text text-transparent`}>{t.title}</span>
          </motion.h2>
          
          {/* Stats Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center mb-14"
          >
            <p className={`text-xl md:text-2xl ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              <span className={`font-black text-3xl md:text-4xl mx-2 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>2</span>
              <span>{t.deploymentText}</span>
            </p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Cards - 10 models */}
        <div className="relative overflow-hidden py-2">
          {/* Create seamless infinite scroll by duplicating the 10 cards multiple times */}
          <motion.div
            animate={{ x: [0, -1680] }}
            transition={{ 
              duration: 40,
              repeat: Infinity, 
              ease: 'linear',
              repeatType: 'loop'
            }}
            className="flex gap-6"
            style={{ width: 'max-content' }}
          >
            {/* Repeat the 10 models 4 times for smooth infinite scroll */}
            {[...Array(4)].map((_, repeatIndex) => (
              t.models.map((model: any, modelIndex: number) => (
                <div
                  key={`model-${repeatIndex}-${modelIndex}`}
                  className={`flex-shrink-0 w-56 p-4 rounded-xl backdrop-blur-xl transition-all group ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-green-400/20 hover:border-green-400/40 hover:bg-white/10'
                      : 'bg-white/80 border-2 border-emerald-200 hover:border-emerald-400 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* 1:1 aspect ratio image */}
                  <div className="relative w-full aspect-square rounded-lg mb-2 overflow-hidden">
                    <ImageWithFallback 
                      src={modelImages[modelIndex]}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className={`text-sm font-bold mb-1 line-clamp-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>{model.name}</h3>
                  {model.params && (
                    <p className={`text-xs mb-1 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>{model.params}</p>
                  )}
                  <p className={`text-xs line-clamp-2 ${
                    theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                  }`}>{model.partners}</p>
                </div>
              ))
            ))}
          </motion.div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/constellation', { state: { scrollTo: 'ai-science' } })}
            className={`px-4 py-2 font-medium text-base transition-all inline-flex items-center gap-2 ${
              theme === 'dark'
                ? 'text-white/60 hover:text-cyan-400'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            {t.ctaButton}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// Screen 2b - Scientific Payload Verification
function Screen2b({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();
  const [count72, setCount72] = useState(0);
  const [count2GB, setCount2GB] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<'left' | 'right' | null>(null);

  // Number counting animations
  useEffect(() => {
    if (isInView) {
      // Counter for 72 hours
      let start72 = 0;
      const timer72 = setInterval(() => {
        start72 += 3.6;
        if (start72 >= 72) {
          setCount72(72);
          clearInterval(timer72);
        } else {
          setCount72(Math.floor(start72));
        }
      }, 50);

      // Counter for 2 GB
      let start2 = 0;
      const timer2 = setInterval(() => {
        start2 += 0.1;
        if (start2 >= 2) {
          setCount2GB(2);
          clearInterval(timer2);
        } else {
          setCount2GB(Math.floor(start2 * 10) / 10);
        }
      }, 50);

      return () => {
        clearInterval(timer72);
        clearInterval(timer2);
      };
    }
  }, [isInView]);

  // Calculate flex values based on hover state
  const getFlexValue = (position: 'left' | 'right') => {
    if (hoveredImage === null) return 1; // Equal size when nothing hovered
    if (hoveredImage === position) return 2; // Hovered image gets 2/3 width
    return 0.5; // Non-hovered image gets 1/4 width
  };

  return (
    null
  );
}

function Screen3({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();

  const icons = [Database, Code, Shield, Rocket];

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 py-10 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-teal-950/30 to-transparent'
        : 'bg-gradient-to-b from-transparent via-teal-100/30 to-transparent'
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
              ? 'from-blue-400 to-green-400'
              : 'from-blue-600 to-green-600'
          } bg-clip-text text-transparent`}>
            {t.title}
          </span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Process line */}
          <div className={`absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 ${ theme === 'light' ? 'opacity-60' : '' }`} />

          <div className="flex flex-col gap-8">
            {t.steps.map((step: any, index: number) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Number badge */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-2xl font-bold text-white ${ theme === 'light' ? 'shadow-lg' : '' }`}>
                    {index + 1}
                  </div>

                  <div className={`flex-1 p-6 rounded-2xl backdrop-blur-xl transition-all ${ theme === 'dark' ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10' : 'bg-white/80 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl' }`}>
                    <div className="mb-4">
                      <Icon className={`w-10 h-10 ${ theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600' }`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 ${ theme === 'dark' ? 'text-white' : 'text-gray-800' }`}>{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${ theme === 'dark' ? 'text-white/60' : 'text-gray-600' }`}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}