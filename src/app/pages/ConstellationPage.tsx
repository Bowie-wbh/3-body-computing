import React, { useRef, useEffect } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { 
  Satellite as SatelliteIcon, 
  Zap, 
  Shield, 
  Network,
  GraduationCap,
  Atom,
  FlaskConical,
  Telescope,
  School,
  Rocket,
  Brain,
  Microscope,
  Globe,
  Users,
  Target,
  Calendar,
  TrendingUp,
  Award,
  BookOpen,
  Lightbulb,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { LightBackground } from '../components/LightBackground';
import { ConcentricCirclesOrbit } from '../components/ConcentricCirclesOrbit';

// Import design components
import Tianwen from '../../imports/Tianwen';
import Satellite from '../../imports/Satellite';

// Import satellite image from Figma
import satelliteImg from "figma:asset/097288b0b285da7b4809ec1b4fc5faf227b1d6a0.png";

// Import global cooperation images from Figma
import ituImage from "figma:asset/51899ed8789546fe024890165aced0669b901dd7.png";
import earthImage from "figma:asset/57f7b2eea2225d25ee8832c034a52e17ec8f8d5f.png";

// 导入星座简介页面所有图片配置 - 集中管理，防止图片丢失
import { 
  aiModelImages,
  globalCooperationImages, 
  achievementImages as achievementImagesConfig,
  partnerLogos,
  modalContentImages,
  constellationPageImages
} from '../data/constellationImages';

export default function ConstellationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, theme } = useApp();
  const t = translations[language].constellation;
  
  // Auto scroll to top when page loads OR scroll to specific section if state is provided
  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    
    if (state?.scrollTo) {
      // If we have a scrollTo target, wait a bit for the page to render then scroll
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Clear the state after scrolling
          window.history.replaceState({}, document.title);
        } else {
          console.log('Element not found:', state.scrollTo);
        }
      }, 800);
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
      {theme === 'dark' && <Starfield count={150} speed={0.3} mouseEffect={true} />}
      <Navbar />

      {/* Screen 1 - Hero */}
      <div data-screen="1">
        <Screen1 t={t.screen1} language={language} navigate={navigate} />
      </div>

      {/* Screen 2 - Computing Satellites + Three Capabilities (Merged) */}
      <div data-screen="2">
        <Screen2 screen2={t.screen2} screen3={t.screen3} />
      </div>

      {/* Screen 4 - Construction Goals + Development Plan (Merged) */}
      <div data-screen="3">
        <Screen4 screen4={t.screen4} screen5={t.screen5} />
      </div>

      {/* Screen 6 - AI + Science */}
      <div data-screen="4">
        <Screen6 t={t.screen6} />
      </div>

      {/* Screen 7 - Global Cooperation */}
      <div data-screen="5">
        <Screen7 t={t.screen7} />
      </div>

      {/* Screen 8 - Partners */}
      <div data-screen="6">
        <Screen8 t={t.screen8} partners={partnerLogos} />
      </div>

      <Footer />
    </div>
  );
}

function Screen1({ t, language, navigate }: any) {
  const { theme } = useApp();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-[24px] pt-[40px] pb-[0px]">
      {/* Centered concentric circles orbit animation - main visual */}
      <ConcentricCirclesOrbit position="center" size="lg" />
      
      <div className="container-responsive mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className={`bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-blue-400 via-cyan-400 to-green-400'
              : 'from-blue-600 via-cyan-600 to-green-600'
          } bg-clip-text text-transparent`}>
            {t.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-3xl md:text-4xl mb-12 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}
        >
          {t.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/auth')}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
        >
          {t.cta}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            theme === 'dark' ? 'border-white/30' : 'border-gray-400/50'
          }`}
        >
          <motion.div className={`w-1.5 h-1.5 rounded-full ${
            theme === 'dark' ? 'bg-white/60' : 'bg-gray-600'
          }`} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Screen2({ screen2, screen3 }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();

  const features = [
    { icon: Rocket, title: screen3.title1, desc: screen3.desc1 },
    { icon: Network, title: screen3.title2, desc: screen3.desc2 },
    { icon: Brain, title: screen3.title3, desc: screen3.desc3 },
  ];

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-blue-950/30 to-transparent'
        : 'bg-gradient-to-b from-transparent via-blue-100/40 to-transparent'
    }`}>
      {/* Decorative orbit lines */}
      <LightBackground variant="orbit" position="top-right" size="lg" />
      <LightBackground variant="circles" position="bottom-left" size="md" />
      
      <div className="container-responsive mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        ><span className={`bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-cyan-400 to-blue-400'
              : 'from-cyan-600 to-blue-600'
          } bg-clip-text text-transparent`}>{screen2.title}</span></motion.h2>

        {/* Satellite image above cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden mb-12"
        >
          <img 
            src={satelliteImg}
            alt="Computing Satellite"
            className="w-full h-full object-contain"
          />
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-t from-black/40 to-transparent' 
              : 'bg-gradient-to-t from-white/40 to-transparent'
          }`} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="relative group"
            >
              <div className={`relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 h-full ${
                theme === 'dark'
                  ? 'bg-white/5 border border-green-400/20 hover:border-green-400/40 hover:bg-white/10'
                  : 'bg-white/80 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl shadow-lg'
              }`}>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-green-400 to-cyan-400'
                    : 'from-green-600 to-cyan-600'
                } bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screen4({ screen4, screen5 }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();

  const phases = [screen5.phase1, screen5.phase2, screen5.phase3];

  // Helper function to highlight satellite numbers
  const highlightSatelliteCount = (title: string) => {
    const satelliteRegex = /(12颗计算卫星|100颗计算卫星|1000颗计算卫|12 Computing Satellites|100 Computing Satellites|1000 Computing Satellites)/;
    const parts = title.split(satelliteRegex);
    
    return parts.map((part, i) => {
      if (satelliteRegex.test(part)) {
        return (
          <span 
            key={i} 
            className={`${
              theme === 'dark'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-green-600'
            } font-extrabold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]`}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-teal-950/30 to-transparent'
        : 'bg-gradient-to-b from-transparent via-teal-100/30 to-transparent'
    }`}>
      {/* Decorative lines */}
      <LightBackground variant="circles" position="top-left" size="md" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          <span className={`inline-block bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-green-400 to-cyan-400'
              : 'from-green-600 to-cyan-600'
          } bg-clip-text text-transparent`}>
            {screen4.title}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-2xl font-bold bg-gradient-to-r text-center mb-20 bg-clip-text text-transparent ${
            theme === 'dark'
              ? 'from-blue-300 via-cyan-300 to-green-300'
              : 'from-blue-700 via-cyan-700 to-green-700'
          }`}
        >
          {screen4.subtitle}
        </motion.div>

        {/* Horizontal Timeline with connecting arrows */}
        <div className="relative px-4 md:px-8">
          {/* Connecting arrows between cards */}
          <div className="hidden md:block absolute left-0 right-0 top-[180px] px-8">
            <div className="relative max-w-6xl mx-auto">
              {/* First arrow */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute left-[28%] w-[16%] h-0.5 origin-left"
              >
                
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
                  theme === 'dark' ? 'border-l-[12px] border-l-blue-500' : 'border-l-[12px] border-l-blue-500/60'
                }`} />
              </motion.div>
              
              {/* Second arrow */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute left-[61%] w-[16%] h-0.5 origin-left"
              >
                
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
                  theme === 'dark' ? 'border-l-[12px] border-l-green-500' : 'border-l-[12px] border-l-green-500/60'
                }`} />
              </motion.div>
            </div>
          </div>

          {/* Timeline cards - horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2, type: "spring", stiffness: 100 }}
                className="relative flex flex-col items-center"
              >
                {/* Orbital ring decoration */}
                <div className="relative mb-8">
                  {/* Outer pulsing ring */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className={`absolute inset-0 -m-6 rounded-full border-2 ${
                      index === 0 ? 'border-cyan-500/30' :
                      index === 1 ? 'border-blue-500/30' :
                      'border-green-500/30'
                    }`}
                  />
                  
                  {/* Main orbital node */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-cyan-500 via-blue-500 to-cyan-600' :
                    index === 1 ? 'from-blue-500 via-cyan-500 to-blue-600' :
                    'from-green-500 via-cyan-500 to-green-600'
                  } flex items-center justify-center z-10 ${
                    theme === 'dark'
                      ? 'shadow-[0_0_40px_rgba(34,211,238,0.6),inset_0_2px_20px_rgba(255,255,255,0.3)]'
                      : 'shadow-[0_0_40px_rgba(6,182,212,0.5),inset_0_2px_20px_rgba(255,255,255,0.5)]'
                  } border-2 ${theme === 'dark' ? 'border-white/20' : 'border-white/40'}`}>
                    {/* Inner glow effect */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                    
                    {/* Satellite icon */}
                    <SatelliteIcon className="w-9 h-9 text-white relative z-10" strokeWidth={2.5} />
                  </div>

                  {/* Rotating orbit particles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8 + index * 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-3"
                  >
                    <div className={`absolute top-0 left-1/2 w-2 h-2 rounded-full -ml-1 ${
                      index === 0 ? 'bg-cyan-400' :
                      index === 1 ? 'bg-blue-400' :
                      'bg-green-400'
                    } shadow-[0_0_8px_currentColor]`} />
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`p-7 rounded-2xl backdrop-blur-xl transition-all w-full relative overflow-hidden group ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]'
                    : 'bg-gradient-to-br from-white/95 via-white/90 to-white/95 border-2 border-cyan-300/50 hover:border-cyan-400 hover:shadow-2xl shadow-lg'
                }`}>
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-green-500/5'
                      : 'bg-gradient-to-br from-cyan-100/50 via-blue-100/50 to-green-100/50'
                  }`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`text-4xl font-bold mb-4 text-center bg-gradient-to-r ${
                      index === 0 ? 'from-cyan-400 to-blue-400' :
                      index === 1 ? 'from-blue-400 to-cyan-400' :
                      'from-green-400 to-cyan-400'
                    } bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]`}>
                      {phase.year}
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-5 text-center leading-relaxed ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {highlightSatelliteCount(phase.title)}
                    </h3>
                    
                    <p className={`leading-relaxed text-sm text-center ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>{phase.desc}</p>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-cyan-400/10 to-transparent'
                      : 'bg-gradient-to-br from-cyan-300/20 to-transparent'
                  } rounded-bl-full`} />
                </div>
              </motion.div>
            ))} 
          </div>
        </div>
      </div>
    </section>
  );
}

function Screen6({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme, language } = useApp();
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(0);

  // Images for each card - 4 specific images
  const cardImages = [
    aiModelImages[0], // 天文
    aiModelImages[1], // 气象
    aiModelImages[2], // 遥感
    aiModelImages[3]  // 羲和
  ];

  // Handle card click - first, second, and third cards open modals
  const handleCardClick = (index: number) => {
    if (index === 0 || index === 1 || index === 2) {
      setSelectedCard(index);
      setShowModal(true);
    }
  };

  // Modal content data
  const modalContent = [
    {
      title: '天基天文时域模型',
      params: '80亿数',
      partners: '广西大学、国家天文台',
      description: '首发2颗计算卫星搭载了宇宙X射线偏振探测器，部署天基天文时域模型，实现对伽马射线暴等各类瞬变源的在轨快速探测、证认、分类，并触发双星协同观测和地面后随观察，系统具备秒级响应能力，识别准确率达99%。',
      image: aiModelImages[0]
    },
    {
      title: '天基气象模型',
      params: '1.5亿参数',
      partners: '复旦大学、巡天千河、航天八院',
      description: '伏羲是由复旦大学与上海科学智能研究院联合研发的全球气象大模型。为融合微红外等多源星数据以进行气象同化，团队基于伏羲大模型架构构建了专门的同化模型——伏羲-DA。气象预报流程首先由伏羲-DA模型对载荷数据进行预处理，再由伏羲-C70模型生成的天气预报。目前已上注至三体计算星座的是轻量化设计后的伏羲-DA模型。',
      image: aiModelImages[1]
    },
    {
      title: '天基遥感模型',
      params: '80亿参数',
      partners: '之江实验室、北京师范大学、香港大学、航天体系院',
      description: '天基遥感模型由之江实验室自研，参数量达8B，融合RGB、SAR、红外、多光谱等多源遥感数据，可统一完成图像级、区域级与像素级14类任务处理，具备300余种目标识别、300余种图像分类及60余种场景分割能力，是当前遥感领域综合性能领先的视觉语言模。',
      image: aiModelImages[2]
    }
  ];

  return (
    <section id="ai-science" ref={ref} className={`relative min-h-screen flex items-center justify-center px-6 py-8 overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent'
        : 'bg-gradient-to-b from-transparent via-cyan-100/30 to-transparent'
    }`}>
      {/* Decorative lines */}
      <LightBackground variant="orbit" position="bottom-right" size="lg" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3"><span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 to-green-400'
                : 'from-blue-600 to-green-600'
            } bg-clip-text text-transparent`}>{t.title}</span></h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cards.map((card: any, index: number) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => handleCardClick(index)}
              className={`p-5 rounded-xl backdrop-blur-xl transition-all group ${
                (index === 0 || index === 1 || index === 2) ? 'cursor-pointer' : ''
              } ${
                theme === 'dark'
                  ? 'bg-white/5 border border-blue-400/20 hover:border-blue-400/40 hover:bg-white/10'
                  : 'bg-white/90 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl shadow-lg'
              }`}
            >
              <div className="aspect-[32/15] rounded-lg mb-4 overflow-hidden relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <ImageWithFallback
                  src={cardImages[index]}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className={`text-lg font-bold mb-3 transition-colors ${
                theme === 'dark'
                  ? 'text-white group-hover:text-blue-400'
                  : 'text-gray-800 group-hover:text-blue-600'
              }`}>
                {card.title}
              </h3>
              <p className={`mb-3 leading-relaxed text-sm ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>{card.desc}</p>
              <p className={`text-xs ${
                theme === 'dark' ? 'text-white/40' : 'text-gray-500'
              }`}>{card.partners}</p>
            </motion.div>
          ))}
        </div>

        {/* View Orbital Models Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services', { state: { scrollTo: 'orbital-models' } })}
            className={`px-4 py-2 font-medium text-base transition-all inline-flex items-center gap-2 ${ 
              theme === 'dark'
                ? 'text-white/60 hover:text-cyan-400'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            {language === 'zh' ? '查看在轨模型' : 'View Orbital Models'}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for first and second cards */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden backdrop-blur-2xl ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-2 border-cyan-400/30'
                : 'bg-white/80 border-2 border-cyan-300'
            } shadow-2xl`}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  : 'bg-gray-100/80 hover:bg-gray-200/80 text-gray-800 border border-gray-300'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {/* Left side - Image */}
                <div className="flex items-center justify-center">
                  <div className={`w-full aspect-video rounded-xl overflow-hidden ${
                    theme === 'dark' ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-gradient-to-br from-gray-50/50 to-gray-100/50'
                  }`}>
                    {selectedCard === 0 ? (
                      <Tianwen />
                    ) : (
                      <ImageWithFallback 
                        src={modalContent[selectedCard].image}
                        alt={modalContent[selectedCard].title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Right side - Text content */}
                <div className="flex flex-col justify-center">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'from-cyan-400 via-blue-400 to-green-400'
                      : 'from-cyan-600 via-blue-600 to-green-600'
                  } bg-clip-text text-transparent`}>
                    {modalContent[selectedCard].title}
                  </h3>

                  <div className={`inline-block px-4 py-2 rounded-lg mb-6 w-fit ${
                    theme === 'dark'
                      ? 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-300'
                      : 'bg-cyan-100 border border-cyan-300 text-cyan-700'
                  }`}>
                    <span className="text-xl font-bold">{modalContent[selectedCard].params}</span>
                  </div>

                  <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    <span className="font-semibold">合作单位：</span>{modalContent[selectedCard].partners}
                  </p>

                  <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    {modalContent[selectedCard].description}
                  </p>

                  {/* Innovation Applications button - only for Remote Sensing model (index 2) */}
                  {selectedCard === 2 && (
                    null
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function Screen7({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();
  const navigate = useNavigate();

  return (
    <section ref={ref} id="global-cooperation" className={`relative min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent'
        : 'bg-gradient-to-b from-transparent via-green-100/30 to-transparent'
    }`}>
      {/* Orbital lines background decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Top right decoration - ITU satellite */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: theme === 'dark' ? 0.2 : 0.15, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="absolute top-10 right-10 w-[300px] h-[300px] z-0"
        >
          
        </motion.div>
        {/* Bottom left decoration - Earth cooperation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: theme === 'dark' ? 0.2 : 0.15, x: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute bottom-20 left-10 w-[300px] h-[300px] z-0"
        >
          
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-green-400 to-blue-400'
                : 'from-green-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </span>
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[t.card1, t.card2].map((card: any, index: number) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-2xl backdrop-blur-xl transition-all group ${
                theme === 'dark'
                  ? 'bg-white/5 border border-green-400/20 hover:border-green-400/40 hover:bg-white/10'
                  : 'bg-white/90 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl shadow-lg'
              }`}
            >
              <div className="aspect-video rounded-lg mb-6 overflow-hidden relative">
                <img 
                  src={index === 0 ? ituImage : earthImage}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>{card.title}</h3>
              <p className={`mb-4 leading-relaxed ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>{card.desc}</p>
              <p className={`text-sm mb-6 ${
                theme === 'dark' ? 'text-white/40' : 'text-gray-500'
              }`}>{card.organizer}</p>
              <button 
                onClick={() => {
                  if (index === 0) {
                    navigate('/itu-challenge');
                  } else if (index === 1) {
                    navigate('/olive-leaf-plan');
                  }
                }}
                className={`transition-colors flex items-center gap-2 group ${ 
                  theme === 'dark'
                    ? 'text-green-400 hover:text-green-300'
                    : 'text-green-600 hover:text-green-700'
                }`}
              >
                {card.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screen8({ t }: { t: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { theme, language } = useApp();
  const labels = t.statLabels;

  // 合作伙伴卫星数据 - 按状态分类
  const launched = [
    { name: '国星宇航', count: 12 },
  ];

  const inProduction = [
    { name: '中科西光', count: 2 },
    { name: '智星空间', count: 2 },
    { name: '十方星链', count: 3 },
    { name: '中国商星', count: 2 },
    { name: '地卫二', count: 4 },
    { name: '魔方卫星', count: 2 },
    { name: '微纳星空', count: 2 },
    { name: '星图测控', count: 1 },
    { name: '傲天科技', count: 2 },
    { name: '巡天千河', count: 1 },
    { name: '银河航天', count: 2 },
  ];

  const inCommunication = [
    { name: '微纳星空', count: 17 },
    { name: '鸿擎科技', count: 10 },
    { name: '星火', count: 4 },
  ];

  // 四大统计数字 - 使用翻译数据
  const statItems = [
    { label: labels.launched, value: 12, color: theme === 'dark' ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600', glow: 'rgba(34,211,238,0.5)' },
    { label: labels.deployed, value: 23, color: theme === 'dark' ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600', glow: 'rgba(52,211,153,0.5)' },
    { label: labels.inProgress, value: 31, color: theme === 'dark' ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600', glow: 'rgba(59,130,246,0.5)' },
    { label: labels.target2027, value: 100, color: theme === 'dark' ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600', glow: 'rgba(168,85,247,0.5)' },
  ];

  // 动画计数器
  const [counts, setCounts] = React.useState([0, 0, 0, 0]);
  React.useEffect(() => {
    if (!isInView) return;
    const targets = [12, 23, 31, 100];
    const durations = [1200, 1400, 1600, 2000];
    const timers: ReturnType<typeof setInterval>[] = [];
    targets.forEach((target, i) => {
      const steps = 30;
      const increment = target / steps;
      const intervalMs = durations[i] / steps;
      let current = 0;
      timers[i] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          setCounts(prev => { const n = [...prev]; n[i] = target; return n; });
          clearInterval(timers[i]);
        } else {
          setCounts(prev => { const n = [...prev]; n[i] = Math.floor(current); return n; });
        }
      }, intervalMs);
    });
    return () => timers.forEach(clearInterval);
  }, [isInView]);

  // 分类卡片渲染
  const renderCategory = (
    title: string,
    items: { name: string; count: number }[],
    colorClass: string,
    borderColor: string,
    delay: number
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((partner, index) => (
          <motion.div
            key={`${title}-${partner.name}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className={`p-4 rounded-xl backdrop-blur-xl transition-all cursor-default min-w-[120px] ${
              theme === 'dark'
                ? `bg-white/5 border ${borderColor}`
                : `bg-white/90 border-2 ${borderColor} shadow-md hover:shadow-lg`
            }`}
          >
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                {partner.count}
              </div>
              <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>
                颗卫星
              </div>
              <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                {partner.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className={`relative min-h-[50vh] flex items-center justify-center px-6 py-20 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-transparent via-sky-950/20 to-transparent'
        : 'bg-gradient-to-b from-transparent via-indigo-100/30 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-cyan-400 to-green-400'
                : 'from-cyan-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </span>
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>{t.subtitle}</p>
        </motion.div>

        {/* 四大统计数字 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {statItems.map((stat, i) => (
            null
          ))}
        </div>

        {/* 分类卡片 */}
        

        {/* 合作伙伴滚动Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          
          
          {/* Logo 滚动容器 */}
          <div className="relative overflow-hidden space-y-6">
            {/* 渐变遮罩 - 左侧 */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#000a30] to-transparent'
                  : 'bg-gradient-to-r from-cyan-50 to-transparent'
              }`}
            />
            
            {/* 渐变遮罩 - 右侧 */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
                theme === 'dark'
                  ? 'bg-gradient-to-l from-[#000a30] to-transparent'
                  : 'bg-gradient-to-l from-cyan-50 to-transparent'
              }`}
            />
            
            {/* 第一行滚动动画 - 从左向右 */}
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center py-4"
            >
              {/* 前12个logo，复制两遍实现无缝循环 */}
              {[...partnerLogos.slice(0, 12), ...partnerLogos.slice(0, 12)].map((logo: string, index: number) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-32 h-20 rounded-lg flex items-center justify-center p-4 transition-all bg-white hover:shadow-xl shadow-md border border-gray-200"
                >
                  <ImageWithFallback
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>

            {/* 第二行滚动动画 - 从右向左（反向） */}
            <motion.div
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center py-4"
            >
              {/* 后12个logo，复制两遍实现无缝循环 */}
              {[...partnerLogos.slice(12, 24), ...partnerLogos.slice(12, 24)].map((logo: string, index: number) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-32 h-20 rounded-lg flex items-center justify-center p-4 transition-all bg-white hover:shadow-xl shadow-md border border-gray-200"
                >
                  <ImageWithFallback
                    src={logo}
                    alt={`Partner ${index + 13}`}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Screen9({ t }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useApp();

  const achievementImages = [
    achievementImagesConfig.computer,      // 1. "之江智加"星载智能计算机
    achievementImagesConfig.laser,         // 2. "之江智光"星间激光通信机
    achievementImagesConfig.router,        // 3. "之江智桥"星载高速路由器
    achievementImagesConfig.distributed,   // 4. 之江天基分布式操作系统
    achievementImagesConfig.model,         // 5. 具身智卫星模型
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
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 to-green-400'
                : 'from-blue-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </span>
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>{t.subtitle}</p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {t.achievements.slice(0, 3).map((achievement: any, index: number) => {
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`p-3 rounded-xl backdrop-blur-xl transition-all group overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10'
                    : 'bg-white/80 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image at the top with animation */}
                <div className={`relative aspect-[4/3] rounded-lg mb-2 overflow-hidden ${
                  theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                    className="flex items-center justify-center h-full p-6"
                  >
                    <ImageWithFallback 
                      src={achievementImages[index]}
                      alt={achievement.title}
                      className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
                
                <h3 className={`text-sm font-bold mb-1.5 transition-colors ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-800 group-hover:text-cyan-600'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-1.5 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>{achievement.desc}</p>
                {achievement.highlight && (
                  <div className={`inline-block px-3 py-1.5 rounded-lg text-sm font-bold ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-cyan-300 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'bg-gradient-to-r from-cyan-200 to-green-200 text-cyan-800 border-2 border-cyan-400 shadow-lg'
                  }`}>
                    {achievement.highlight}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Second row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {t.achievements.slice(3, 5).map((achievement: any, index: number) => {
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
                className={`p-3 rounded-xl backdrop-blur-xl transition-all group overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10'
                    : 'bg-white/80 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image at the top with animation */}
                <div className={`relative aspect-[4/3] rounded-lg mb-2 overflow-hidden ${
                  theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: (index + 3) * 0.15 + 0.3 }}
                    className="flex items-center justify-center h-full p-6"
                  >
                    <ImageWithFallback 
                      src={achievementImages[index + 3]}
                      alt={achievement.title}
                      className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
                
                <h3 className={`text-sm font-bold mb-1.5 transition-colors ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-800 group-hover:text-cyan-600'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-1.5 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>{achievement.desc}</p>
                {achievement.highlight && (
                  <div className={`inline-block px-3 py-1.5 rounded-lg text-sm font-bold ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-cyan-300 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'bg-gradient-to-r from-cyan-200 to-green-200 text-cyan-800 border-2 border-cyan-400 shadow-lg'
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