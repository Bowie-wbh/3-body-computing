import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Starfield } from '../components/Starfield';
import { LightBackground } from '../components/LightBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronRight, Users, Globe, Trophy, Wheat, Droplet, Building2, ArrowLeft, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import React from 'react';

// Region Distribution Chart Component
function RegionDistributionChart({ theme, isInView }: { theme: string; isInView: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    { 
      name: '亚洲', 
      value: 140, 
      percentage: 54.3,
      color: theme === 'dark' ? '#22d3ee' : '#0891b2',
      gradientStart: theme === 'dark' ? '#22d3ee' : '#06b6d4',
      gradientEnd: theme === 'dark' ? '#06b6d4' : '#0891b2',
    },
    { 
      name: '非洲', 
      value: 54, 
      percentage: 20.9,
      color: theme === 'dark' ? '#a78bfa' : '#7c3aed',
      gradientStart: theme === 'dark' ? '#a78bfa' : '#a78bfa',
      gradientEnd: theme === 'dark' ? '#7c3aed' : '#7c3aed',
    },
    { 
      name: '南美洲', 
      value: 43, 
      percentage: 16.7,
      color: theme === 'dark' ? '#34d399' : '#059669',
      gradientStart: theme === 'dark' ? '#34d399' : '#10b981',
      gradientEnd: theme === 'dark' ? '#10b981' : '#059669',
    },
    { 
      name: '欧洲', 
      value: 10, 
      percentage: 3.9,
      color: theme === 'dark' ? '#fbbf24' : '#d97706',
      gradientStart: theme === 'dark' ? '#fbbf24' : '#fbbf24',
      gradientEnd: theme === 'dark' ? '#f59e0b' : '#d97706',
    },
    { 
      name: '北美洲', 
      value: 8, 
      percentage: 3.1,
      color: theme === 'dark' ? '#f472b6' : '#db2777',
      gradientStart: theme === 'dark' ? '#f472b6' : '#f472b6',
      gradientEnd: theme === 'dark' ? '#ec4899' : '#db2777',
    },
    { 
      name: '大洋洲', 
      value: 3, 
      percentage: 1.1,
      color: theme === 'dark' ? '#60a5fa' : '#2563eb',
      gradientStart: theme === 'dark' ? '#60a5fa' : '#60a5fa',
      gradientEnd: theme === 'dark' ? '#3b82f6' : '#2563eb',
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, name, percent } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 40;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={theme === 'dark' ? '#ffffff' : '#1e293b'}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-semibold"
        style={{ 
          fontSize: '13px',
          fontWeight: '600',
          textShadow: theme === 'dark' ? '0 2px 8px rgba(0,0,0,0.8)' : '0 1px 3px rgba(0,0,0,0.3)'
        }}
      >
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <defs>
            {data.map((entry, index) => (
              <g key={`defs-region-${index}`}>
                <linearGradient 
                  id={`gradient-region-${index}`}
                  x1="0%" 
                  y1="0%" 
                  x2="100%" 
                  y2="100%"
                >
                  <stop offset="0%" stopColor={entry.gradientStart} stopOpacity={1} />
                  <stop offset="100%" stopColor={entry.gradientEnd} stopOpacity={0.85} />
                </linearGradient>
                <filter id={`shadow-region-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="0" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </g>
            ))}
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={{
              stroke: theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
              strokeWidth: 1.5,
            }}
            label={renderCustomLabel}
            outerRadius={120}
            innerRadius={70}
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
            stroke={theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)'}
            strokeWidth={2}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-region-${index}`} 
                fill={`url(#gradient-region-${index})`}
                filter={`url(#shadow-region-${index})`}
                style={{
                  filter: theme === 'dark' 
                    ? `drop-shadow(0 0 ${activeIndex === index ? '14px' : '7px'} ${entry.color}60)` 
                    : `drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))`,
                  transform: activeIndex === index ? 'scale(1.06)' : 'scale(1)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease',
                  opacity: activeIndex !== null && activeIndex !== index ? 0.6 : 1,
                  cursor: 'pointer',
                }}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)',
              border: theme === 'dark' ? '1px solid rgba(34, 211, 238, 0.5)' : '1px solid rgba(203, 213, 225, 0.8)',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: theme === 'dark' 
                ? '0 8px 32px rgba(0, 0, 0, 0.6)' 
                : '0 4px 20px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(10px)',
            }}
            labelStyle={{
              color: theme === 'dark' ? '#ffffff' : '#1e293b',
              fontWeight: '700',
              fontSize: '15px',
              marginBottom: '4px',
            }}
            itemStyle={{
              color: theme === 'dark' ? '#e2e8f0' : '#334155',
              fontSize: '14px',
              fontWeight: '500',
            }}
            formatter={(value: number, name: string, props: any) => {
              return `${value} 支队伍 (${props.payload.percentage}%)`;
            }}
            labelFormatter={() => ''}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className={`text-5xl font-bold mb-2 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}
        >
          {total}
        </motion.div>
        <div className={`text-sm font-semibold ${
          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
        }`}>
          支队伍
        </div>
      </div>
    </div>
  );
}

// Track Distribution Chart Component
function TrackDistributionChart({ theme, isInView }: { theme: string; isInView: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    { 
      name: '粮食生产', 
      value: 96, 
      percentage: 37.2,
      color: theme === 'dark' ? '#34d399' : '#059669',
      gradientStart: theme === 'dark' ? '#34d399' : '#10b981',
      gradientEnd: theme === 'dark' ? '#10b981' : '#059669',
    },
    { 
      name: '韧性城市', 
      value: 93, 
      percentage: 36.1,
      color: theme === 'dark' ? '#22d3ee' : '#0891b2',
      gradientStart: theme === 'dark' ? '#22d3ee' : '#06b6d4',
      gradientEnd: theme === 'dark' ? '#06b6d4' : '#0891b2',
    },
    { 
      name: '清洁饮水', 
      value: 69, 
      percentage: 26.7,
      color: theme === 'dark' ? '#60a5fa' : '#2563eb',
      gradientStart: theme === 'dark' ? '#60a5fa' : '#60a5fa',
      gradientEnd: theme === 'dark' ? '#3b82f6' : '#2563eb',
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, name, percent } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 40;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={theme === 'dark' ? '#ffffff' : '#1e293b'}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-semibold"
        style={{ 
          fontSize: '13px',
          fontWeight: '600',
          textShadow: theme === 'dark' ? '0 2px 8px rgba(0,0,0,0.8)' : '0 1px 3px rgba(0,0,0,0.3)'
        }}
      >
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <defs>
            {data.map((entry, index) => (
              <g key={`defs-track-${index}`}>
                <linearGradient 
                  id={`gradient-track-${index}`}
                  x1="0%" 
                  y1="0%" 
                  x2="100%" 
                  y2="100%"
                >
                  <stop offset="0%" stopColor={entry.gradientStart} stopOpacity={1} />
                  <stop offset="100%" stopColor={entry.gradientEnd} stopOpacity={0.85} />
                </linearGradient>
                <filter id={`shadow-track-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="0" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </g>
            ))}
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={{
              stroke: theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
              strokeWidth: 1.5,
            }}
            label={renderCustomLabel}
            outerRadius={120}
            innerRadius={70}
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
            stroke={theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)'}
            strokeWidth={2}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-track-${index}`} 
                fill={`url(#gradient-track-${index})`}
                filter={`url(#shadow-track-${index})`}
                style={{
                  filter: theme === 'dark' 
                    ? `drop-shadow(0 0 ${activeIndex === index ? '14px' : '7px'} ${entry.color}60)` 
                    : `drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))`,
                  transform: activeIndex === index ? 'scale(1.06)' : 'scale(1)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease',
                  opacity: activeIndex !== null && activeIndex !== index ? 0.6 : 1,
                  cursor: 'pointer',
                }}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)',
              border: theme === 'dark' ? '1px solid rgba(52, 211, 153, 0.5)' : '1px solid rgba(203, 213, 225, 0.8)',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: theme === 'dark' 
                ? '0 8px 32px rgba(0, 0, 0, 0.6)' 
                : '0 4px 20px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(10px)',
            }}
            labelStyle={{
              color: theme === 'dark' ? '#ffffff' : '#1e293b',
              fontWeight: '700',
              fontSize: '15px',
              marginBottom: '4px',
            }}
            itemStyle={{
              color: theme === 'dark' ? '#e2e8f0' : '#334155',
              fontSize: '14px',
              fontWeight: '500',
            }}
            formatter={(value: number, name: string, props: any) => {
              return `${value} 支队伍 (${props.payload.percentage}%)`;
            }}
            labelFormatter={() => ''}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className={`text-5xl font-bold mb-2 ${
            theme === 'dark' ? 'text-green-400' : 'text-green-600'
          }`}
        >
          {total}
        </motion.div>
        <div className={`text-sm font-semibold ${
          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
        }`}>
          支队伍
        </div>
      </div>
    </div>
  );
}

export default function ITUChallengeDetailPage() {
  const { theme, language } = useApp();
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const tracksRef = useRef(null);
  const linksRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isTracksInView = useInView(tracksRef, { once: true, amount: 0.3 });
  const isLinksInView = useInView(linksRef, { once: true, amount: 0.3 });

  // Counter states for animated numbers
  const [count36, setCount36] = useState(0);
  const [count258, setCount258] = useState(0);

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Number counting animations
  useEffect(() => {
    if (isStatsInView) {
      // Counter for 36
      let start36 = 0;
      const timer36 = setInterval(() => {
        start36 += 1.8;
        if (start36 >= 36) {
          setCount36(36);
          clearInterval(timer36);
        } else {
          setCount36(Math.floor(start36));
        }
      }, 50);

      // Counter for 258
      let start258 = 0;
      const timer258 = setInterval(() => {
        start258 += 12.9;
        if (start258 >= 258) {
          setCount258(258);
          clearInterval(timer258);
        } else {
          setCount258(Math.floor(start258));
        }
      }, 50);

      return () => {
        clearInterval(timer36);
        clearInterval(timer258);
      };
    }
  }, [isStatsInView]);

  const content = {
    zh: {
      breadcrumb: ['星座简介', '全球合作', 'ITU·Space AI大赛'],
      backButton: '返回全球合作',
      title: 'ITU·兴智杯 人工智能与太空计算挑战赛',
      subtitle: '全球首个聚焦\"在轨智能计算\"的国际赛事，获奖团队将有机会获得之江实验室提供的算法上星、方案落地的全流程支持。',
      organizer: '主办单位：国际电信联盟、中国信息通信研究院、之江实验室',
      coOrganizer: '协办单位：可持续发展大数据国际研究中心、浙江省之江发展基金会',
      statsTitle: '报名情况',
      tracksTitle: '三大赛道',
      tracks: [
        {
          title: '太空智能赋能粮食生产',
          desc: '利用卫星遥感和AI技术,实现农业生产的智能化监测和精准管理，助力全球粮食安全。',
          icon: Wheat,
          image: 'https://images.unsplash.com/photo-1745733444573-98a313c79022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBhZ3JpY3VsdHVyZSUyMG1vbml0b3JpbmclMjBwcmVjaXNpb24lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI1MTk3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          title: '太空智能促进清洁饮水',
          desc: '通过卫星数据分析和在轨计算，监测水资源分布与质量，为清洁饮水提供科技支撑。',
          icon: Droplet,
          image: 'https://images.unsplash.com/photo-1633676843008-78bdc2d7616e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHF1YWxpdHklMjBtb25pdG9yaW5nJTIwc2F0ZWxsaXRlJTIwcmVzb3VyY2VzfGVufDF8fHx8MTc3MjUxOTcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          title: '太空智能赋能韧性城市和社区',
          desc: '运用太空智能技术构建智慧城市系统，提升城市应对灾害和挑战的韧性能力。',
          icon: Building2,
          image: 'https://images.unsplash.com/photo-1769298084996-8ed5d3a72870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMHVyYmFuJTIwYWVyaWFsfGVufDF8fHx8MTc3MjUxOTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
      ],
      linksTitle: '友情链接',
      links: [
        {
          title: 'AI for Good',
          desc: 'ITU国际电信联盟官方赛事平台，了解更多AI与太空计算挑战赛信息。',
          url: 'https://aiforgood.itu.int/ai-and-space-computing-challenge/',
        },
        {
          title: '兴智杯人工智能赛事平台',
          desc: '中国官方赛事平台，查看详细赛道信息和报名通道。',
          url: 'http://www.aiinnovation.com.cn/#/ctrackList?ckey=4',
        },
      ],
    },
    en: {
      breadcrumb: ['Constellation', 'Global Cooperation', 'ITUSpace.Ai Challenge'],
      backButton: 'Back to Global Cooperation',
      title: 'ITU AI & Space Computing Challenge',
    },
  };

  const t = content[language];

  return (
    <div className={`min-h-screen ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#000520] via-[#000a30] to-[#001040] text-white'
        : 'bg-gradient-to-b from-sky-50 via-cyan-50 to-emerald-50 text-gray-900'
    }`}>
      {theme === 'dark' && <Starfield count={150} speed={0.3} mouseEffect={true} />}
      <Navbar />

      {/* Decorative backgrounds */}
      <LightBackground variant="orbit" position="top-right" size="lg" />
      <LightBackground variant="circles" position="bottom-left" size="md" />

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6 text-sm"
        >
          {t.breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (index === 0) {
                    // 点击"星座简介"，跳转到星座简介页
                    navigate('/constellation');
                  } else if (index === 1) {
                    // 点击"全球合作"，跳转到星座简介页的全球合作部分
                    navigate('/constellation', { state: { scrollTo: 'global-cooperation' } });
                  }
                }}
                className={`transition-colors ${
                  index === t.breadcrumb.length - 1
                    ? theme === 'dark' 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-cyan-600 font-semibold'
                    : theme === 'dark'
                      ? 'text-white/60 hover:text-white/90'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
              {index < t.breadcrumb.length - 1 && (
                <ChevronRight className={`w-4 h-4 ${
                  theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                }`} />
              )}
            </div>
          ))}
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 via-cyan-400 to-green-400'
                : 'from-blue-600 via-cyan-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed max-w-5xl ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            {t.subtitle}
          </p>

          <div className="space-y-2">
            <p className={`text-lg ${
              theme === 'dark' ? 'text-cyan-400/80' : 'text-cyan-600'
            }`}>
              {t.organizer}
            </p>
            
            <p className={`text-lg ${
              theme === 'dark' ? 'text-green-400/80' : 'text-green-600'
            }`}>
              {t.coOrganizer}
            </p>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <section ref={statsRef} className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-cyan-400 to-green-400'
                : 'from-cyan-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.statsTitle}
            </span>
          </motion.h2>

          {/* Main Stats - Countries and Teams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative p-8 rounded-2xl backdrop-blur-xl mb-16 overflow-hidden ${
              theme === 'dark'
                ? 'bg-white/5 border border-cyan-400/20'
                : 'bg-white/90 border-2 border-cyan-200 shadow-lg'
            }`}
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-center">
              {/* Countries */}
              <div className="flex flex-col items-center">
                <Globe className={`w-8 h-8 mb-3 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`} />
                <motion.div 
                  className={`text-5xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`}
                >
                  {count36}
                </motion.div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  个国家和地区
                </div>
              </div>

              {/* Teams */}
              <div className="flex flex-col items-center">
                <Users className={`w-8 h-8 mb-3 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`} />
                <motion.div 
                  className={`text-5xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}
                >
                  {count258}
                </motion.div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  支队伍
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pie Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Region Distribution Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Decorative glow effect */}
              <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' 
                  : 'bg-gradient-to-br from-cyan-300/30 to-blue-300/30'
              }`} />
              
              <div className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-cyan-400/30 hover:border-cyan-400/50 shadow-[0_8px_32px_rgba(34,211,238,0.15)]'
                  : 'bg-gradient-to-br from-white/95 to-white/85 border-2 border-cyan-200 hover:border-cyan-300 shadow-[0_8px_32px_rgba(6,182,212,0.2)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.3)]'
              }`}>
                {/* Top decorative line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] rounded-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent'
                }`} />
                
                <h3 className={`text-xl md:text-2xl font-bold text-center mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  <span className={`relative inline-block ${
                    theme === 'dark' 
                      ? 'after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400/0 after:via-cyan-400/60 after:to-cyan-400/0' 
                      : ''
                  }`}>
                    地区分布
                  </span>
                </h3>
                <div className="px-2">
                  <RegionDistributionChart theme={theme} isInView={isStatsInView} />
                </div>
              </div>
            </motion.div>

            {/* Track Distribution Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group"
            >
              {/* Decorative glow effect */}
              <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' 
                  : 'bg-gradient-to-br from-green-300/30 to-emerald-300/30'
              }`} />
              
              <div className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-green-400/30 hover:border-green-400/50 shadow-[0_8px_32px_rgba(52,211,153,0.15)]'
                  : 'bg-gradient-to-br from-white/95 to-white/85 border-2 border-emerald-200 hover:border-emerald-300 shadow-[0_8px_32px_rgba(16,185,129,0.2)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.3)]'
              }`}>
                {/* Top decorative line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] rounded-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-transparent via-green-400/60 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent'
                }`} />
                
                <h3 className={`text-xl md:text-2xl font-bold text-center mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  <span className={`relative inline-block ${
                    theme === 'dark' 
                      ? 'after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-green-400/0 after:via-green-400/60 after:to-green-400/0' 
                      : ''
                  }`}>
                    赛道分布
                  </span>
                </h3>
                <div className="px-2">
                  <TrackDistributionChart theme={theme} isInView={isStatsInView} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tracks Section */}
        <section ref={tracksRef}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTracksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-green-400 to-blue-400'
                : 'from-green-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              {t.tracksTitle}
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isTracksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`rounded-2xl overflow-hidden backdrop-blur-xl transition-all group ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-green-400/20 hover:border-green-400/50 hover:bg-white/10'
                    : 'bg-white/90 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl shadow-lg'
                }`}
              >
                {/* Track Image */}
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-t from-black/60 to-transparent'
                      : 'bg-gradient-to-t from-white/40 to-transparent'
                  }`} />
                  
                  {/* Icon overlay */}
                  <div className={`absolute bottom-4 right-4 w-14 h-14 rounded-xl backdrop-blur-md flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-green-400/30'
                      : 'bg-white/60 border border-emerald-300'
                  }`}>
                    <track.icon className={`w-7 h-7 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`} />
                  </div>
                </div>

                {/* Track Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {track.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {track.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Links Section */}
        <section ref={linksRef} className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 to-cyan-400'
                : 'from-blue-600 to-cyan-600'
            } bg-clip-text text-transparent`}>
              {t.linksTitle}
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.links?.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`rounded-2xl p-8 backdrop-blur-xl transition-all group cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-white/10'
                    : 'bg-white/90 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {link.title}
                  </h3>
                  <ExternalLink className={`w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`} />
                </div>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {link.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Back Button - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/constellation', { state: { scrollTo: 'global-cooperation' } })}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
              theme === 'dark'
                ? 'bg-white/5 border border-green-400/20 hover:border-green-400/50 hover:bg-white/10 text-green-400'
                : 'bg-white/90 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg shadow text-green-600'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{t.backButton}</span>
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}