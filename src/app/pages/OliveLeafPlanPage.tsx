import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Starfield } from '../components/Starfield';
import { LightBackground } from '../components/LightBackground';
import { ChevronRight, ArrowLeft, ExternalLink, Globe2, CheckCircle2, X } from 'lucide-react';
import imgRectangle75 from "figma:asset/ce979fbb8ee38a3b6f0f5fa960bf0a311bd6ebf6.png";
import imgRectangle76 from "figma:asset/ddbb3c1ac8989431dd02c82cdb07728c9c29bc20.png";

export default function OliveLeafPlanPage() {
  const { theme, language } = useApp();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const recruitmentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isRecruitmentInView = useInView(recruitmentRef, { once: true, amount: 0.3 });

  // 表单弹窗状态
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    organization: '',
    technology: '',
    cooperationMode: '',
    contact: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 阻止表单弹窗时背景滚动
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // 模拟发送邮件
    setTimeout(() => {
      console.log('发送到邮箱的合作申请：', formData);
      setSubmitStatus('success');
      
      // 3秒后关闭弹窗并重置表单
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus('idle');
        setFormData({
          organization: '',
          technology: '',
          cooperationMode: '',
          contact: ''
        });
      }, 2000);
    }, 1500);
  };

  const content = {
    zh: {
      breadcrumb: ['星座简介', '全球合作', '橄榄叶计划'],
      backButton: '返回全球合作',
      title: 'UNESCO·橄榄叶计划',
      subtitle: '计划每年发射1-2颗公益性科学试验卫星，面向全球公开征集太空科学载荷和太空智能应用，提供开放搭载和验证服务。',
      organizer: '主办单位：之江实验室、雄安科学园、鸿擎科技',
      recruitmentTitle: '征集内容',
      recruitmentItems: [
        {
          title: '科学载荷搭载试验',
          icon: Globe2,
          items: [
            {
              label: '服务内容',
              desc: '提供免费开放的科学载荷搭载与在轨验证服务'
            },
            {
              label: '提供支持',
              desc: '提供卫星平台、平台接入设计服务、在轨算力支持，协同完成载荷在轨试验。'
            },
            {
              label: '数据权限',
              desc: '在轨试验数据面向全球开放共享，支撑开放科学发展。'
            }
          ]
        },
        {
          title: '太空智能应用验证',
          icon: Globe2,
          items: [
            {
              label: '服务内容',
              desc: '提供免费开放的模型、应用的在轨验证服务'
            },
            {
              label: '提供支持',
              desc: '提供开放样本数据、应用开发环境、接口信息等资源，提供算法优化、模拟测试、模型与应用在轨验证等一站式服务。'
            },
            {
              label: '数据权限',
              desc: '模型、应用等技术及其验证数据，将面向全球开放共享，支撑开放科学发展。'
            }
          ]
        }
      ],
      partnerButton: '成为合作伙伴',
      formTitle: '合作伙伴申请',
      formFields: {
        organization: '机构/公司名称',
        technology: '核心技术与能力介绍',
        cooperationMode: '希望合作的模式',
        cooperationModePlaceholder: '如：联合研发、部件供应、数据应用开发等',
        contact: '联系方式',
        contactPlaceholder: '邮箱/微信/电话'
      },
      submitButton: '提交申请',
      submitting: '提交中...',
      successMessage: '申请已成功提交！',
      errorMessage: '提交失败，请重试',
      linksTitle: '友情链接',
      linkItem: {
        title: '橄榄叶计划官网',
        url: 'https://oliveleaf.zero2x.org/'
      }
    },
    en: {
      breadcrumb: ['Constellation', 'Global Cooperation', 'Olive Leaf Plan'],
      backButton: 'Back to Global Cooperation',
      title: 'UNESCO Olive Leaf Plan',
      subtitle: 'We plan to launch 1-2 public science experimental satellites annually, openly soliciting space science payloads and space intelligence applications worldwide, providing open ride-sharing and verification services.',
      organizer: 'Organizers: Zhejiang Lab, Xiong\'an Science Park, HongQing Technology',
      recruitmentTitle: 'Recruitment Content',
      recruitmentItems: [
        {
          title: 'Science Payload Testing',
          icon: Globe2,
          items: [
            {
              label: 'Service Content',
              desc: 'Provide free and open science payload ride-sharing and in-orbit verification services'
            },
            {
              label: 'Support Provided',
              desc: 'Provide satellite platform, platform interface design services, in-orbit computing support, and collaborative completion of payload in-orbit experiments.'
            },
            {
              label: 'Data Rights',
              desc: 'In-orbit experimental data is openly shared globally to support open science development.'
            }
          ]
        },
        {
          title: 'Space Intelligence Application Verification',
          icon: Globe2,
          items: [
            {
              label: 'Service Content',
              desc: 'Provide free and open in-orbit verification services for models and applications'
            },
            {
              label: 'Support Provided',
              desc: 'Provide open sample data, application development environment, interface information and other resources, and provide one-stop services such as algorithm optimization, simulation testing, and in-orbit verification of models and applications.'
            },
            {
              label: 'Data Rights',
              desc: 'Technologies such as models and applications, as well as their verification data, will be openly shared globally to support open science development.'
            }
          ]
        }
      ],
      partnerButton: 'Become a Partner',
      formTitle: 'Partner Application',
      formFields: {
        organization: 'Organization/Company Name',
        technology: 'Core Technology & Capabilities',
        cooperationMode: 'Preferred Cooperation Mode',
        cooperationModePlaceholder: 'e.g., Joint R&D, Component Supply, Data Application Development, etc.',
        contact: 'Contact Information',
        contactPlaceholder: 'Email/WeChat/Phone'
      },
      submitButton: 'Submit Application',
      submitting: 'Submitting...',
      successMessage: 'Application submitted successfully!',
      errorMessage: 'Submission failed, please try again',
      linksTitle: 'Links',
      linkItem: {
        title: 'Olive Leaf Plan Official Website',
        url: 'https://oliveleaf.zero2x.org/'
      }
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
                    navigate('/constellation');
                  } else if (index === 1) {
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
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-green-400 via-cyan-400 to-blue-400'
                : 'from-green-600 via-cyan-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed max-w-5xl ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            {t.subtitle}
          </p>

          <p className={`text-lg ${
            theme === 'dark' ? 'text-green-400/80' : 'text-green-600'
          }`}>
            {t.organizer}
          </p>
        </motion.div>

        {/* Recruitment Content Section */}
        <section ref={recruitmentRef} className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isRecruitmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-cyan-400 to-green-400'
                : 'from-cyan-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.recruitmentTitle}
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.recruitmentItems?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isRecruitmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-2xl p-8 backdrop-blur-xl transition-all group ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-green-400/20 hover:border-green-400/40 hover:bg-white/10'
                    : 'bg-white/90 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl shadow-lg'
                }`}
              >
                {/* Image and Title */}
                <div className="flex flex-col items-center mb-6">
                  {/* Large Image Icon */}
                  <div className={`w-40 h-32 mb-4 overflow-hidden transition-all ${ theme === 'dark' ? '' : 'bg-blue-100 p-2' } rounded-[24px] bg-[#074905]`}>
                    <img 
                      src={index === 0 ? imgRectangle75 : imgRectangle76}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all ${
                        theme === 'dark' 
                          ? '' 
                          : 'brightness-90 contrast-125 saturate-110 drop-shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-lg'
                      }`}
                    />
                  </div>
                  <h3 className={`text-2xl font-bold text-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {item.title}
                  </h3>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {item.items?.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex gap-3">
                      <div className={`flex-shrink-0 mt-1 rounded-full p-1 ${
                        theme === 'dark' ? '' : 'bg-cyan-100'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                        }`} />
                      </div>
                      <div>
                        <span className={`font-semibold ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                          {detail.label}：
                        </span>
                        <span className={`${
                          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                        }`}>
                          {detail.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRecruitmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            
          </motion.div>
        </section>

        {/* Links Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
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

          <motion.a
            href={t.linkItem.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`block max-w-2xl mx-auto rounded-2xl p-8 backdrop-blur-xl transition-all group cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-white/10'
                : 'bg-white/90 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                {t.linkItem.title}
              </h3>
              <ExternalLink className={`w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`} />
            </div>
          </motion.a>
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

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => submitStatus === 'idle' && setShowForm(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/30'
                : 'bg-white border-2 border-cyan-200 shadow-2xl'
            }`}
          >
            {/* Close Button */}
            {submitStatus === 'idle' && (
              <button
                onClick={() => setShowForm(false)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Success State */}
            {submitStatus === 'success' && (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-green-400/20 border border-green-400/50'
                      : 'bg-green-100 border-2 border-green-500'
                  }`}
                >
                  <CheckCircle2 className={`w-10 h-10 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`} />
                </motion.div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {t.successMessage}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  我们会尽快与您联系
                </p>
              </div>
            )}

            {/* Form */}
            {submitStatus !== 'success' && (
              <>
                <h2 className={`text-3xl font-bold mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {t.formTitle}
                </h2>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Organization Name */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                    }`}>
                      {t.formFields.organization} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-cyan-400/30 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                          : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                      }`}
                      disabled={submitStatus === 'submitting'}
                    />
                  </div>

                  {/* Technology */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                    }`}>
                      {t.formFields.technology} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.technology}
                      onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg transition-all resize-none ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-cyan-400/30 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                          : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                      }`}
                      disabled={submitStatus === 'submitting'}
                    />
                  </div>

                  {/* Cooperation Mode */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                    }`}>
                      {t.formFields.cooperationMode} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.formFields.cooperationModePlaceholder}
                      value={formData.cooperationMode}
                      onChange={(e) => setFormData({ ...formData, cooperationMode: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-cyan-400/30 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                          : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                      }`}
                      disabled={submitStatus === 'submitting'}
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                    }`}>
                      {t.formFields.contact} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.formFields.contactPlaceholder}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-cyan-400/30 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                          : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                      }`}
                      disabled={submitStatus === 'submitting'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className={`w-full py-4 rounded-xl text-lg font-semibold transition-all ${
                      submitStatus === 'submitting'
                        ? theme === 'dark'
                          ? 'bg-white/5 text-white/40 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : theme === 'dark'
                          ? 'bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50 hover:border-green-400 text-green-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]'
                          : 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:shadow-xl shadow-lg hover:scale-105'
                    }`}
                  >
                    {submitStatus === 'submitting' ? t.submitting : t.submitButton}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}