import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { useContent, PageContent, CardContent } from '../contexts/ContentContext';
import { Starfield } from '../components/Starfield';
import { 
  Save, Eye, Plus, Trash2, Image as ImageIcon,
  Layout, LogOut, Home, Rocket, Settings, Info
} from 'lucide-react';

export default function AdminPage() {
  const navigate = useNavigate();
  const { language, theme } = useApp();
  const { content, updateContent } = useContent();
  const [editedContent, setEditedContent] = useState<PageContent>(content);
  const [selectedPage, setSelectedPage] = useState<keyof PageContent>('constellation');
  const [showPreview, setShowPreview] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // 检查管理员登录状态
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  const handleSave = () => {
    updateContent(editedContent);
    setSaveMessage(language === 'zh' ? '✓ 保存成功！网站内容已更新' : '✓ Saved successfully! Website content updated');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handlePreview = () => {
    setShowPreview(true);
    setTimeout(() => {
      window.open('/', '_blank');
    }, 300);
    setTimeout(() => setShowPreview(false), 1000);
  };

  const pages = [
    { id: 'constellation' as keyof PageContent, name: language === 'zh' ? '星座简介' : 'Constellation', icon: Rocket },
    { id: 'intro' as keyof PageContent, name: language === 'zh' ? '人工智能' : 'AI Intro', icon: Home },
    { id: 'services' as keyof PageContent, name: language === 'zh' ? '开放服务' : 'Services', icon: Settings },
    { id: 'about' as keyof PageContent, name: language === 'zh' ? '关于我们' : 'About', icon: Info },
  ];

  const updateHero = (page: keyof PageContent, field: string, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        hero: {
          ...prev[page].hero,
          [field]: value
        }
      }
    }));
  };

  const updateCard = (page: keyof PageContent, cardType: string, index: number, field: string, value: string) => {
    setEditedContent(prev => {
      const pageData = prev[page];
      const cards = pageData[cardType as keyof typeof pageData] as CardContent[];
      const updatedCards = [...cards];
      updatedCards[index] = { ...updatedCards[index], [field]: value };
      
      return {
        ...prev,
        [page]: {
          ...pageData,
          [cardType]: updatedCards
        }
      };
    });
  };

  const addCard = (page: keyof PageContent, cardType: string) => {
    setEditedContent(prev => {
      const pageData = prev[page];
      const cards = (pageData[cardType as keyof typeof pageData] as CardContent[]) || [];
      const newCard: CardContent = {
        id: Date.now().toString(),
        title: language === 'zh' ? '新卡片' : 'New Card',
        desc: language === 'zh' ? '请编辑描述' : 'Edit description',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      };
      
      return {
        ...prev,
        [page]: {
          ...pageData,
          [cardType]: [...cards, newCard]
        }
      };
    });
  };

  const deleteCard = (page: keyof PageContent, cardType: string, index: number) => {
    if (!confirm(language === 'zh' ? '确定要删除这个卡片吗?' : 'Are you sure to delete this card?')) return;
    
    setEditedContent(prev => {
      const pageData = prev[page];
      const cards = pageData[cardType as keyof typeof pageData] as CardContent[];
      const updatedCards = cards.filter((_, i) => i !== index);
      
      return {
        ...prev,
        [page]: {
          ...pageData,
          [cardType]: updatedCards
        }
      };
    });
  };

  const currentPageData = editedContent[selectedPage];
  const cardTypes = Object.keys(currentPageData).filter(key => 
    key !== 'hero' && Array.isArray(currentPageData[key as keyof typeof currentPageData])
  );

  return (
    <div className={`min-h-screen ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#000520] via-[#000a30] to-[#001040] text-white'
        : 'bg-gradient-to-b from-gray-50 via-blue-50 to-cyan-50 text-gray-900'
    }`}>
      {theme === 'dark' && <Starfield count={200} speed={0.3} />}

      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        theme === 'dark'
          ? 'bg-black/30 border-white/10'
          : 'bg-white/80 border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
              {language === 'zh' ? '🛠️ 官网配置管理' : '🛠️ Website Admin'}
            </h1>
            <div className="flex items-center gap-2">
              {pages.map(page => {
                const Icon = page.icon;
                return (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPage(page.id)}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                      selectedPage === page.id
                        ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                        : theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10 text-white/60'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{page.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePreview}
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>{language === 'zh' ? '预览' : 'Preview'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{language === 'zh' ? '保存' : 'Save'}</span>
            </motion.button>

            <button
              onClick={handleLogout}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                theme === 'dark'
                  ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400'
                  : 'bg-red-100 hover:bg-red-200 text-red-600'
              }`}
            >
              <LogOut className="w-4 h-4" />
              <span>{language === 'zh' ? '退出' : 'Logout'}</span>
            </button>
          </div>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-6 py-3 rounded-lg bg-green-500 text-white shadow-lg"
          >
            {saveMessage}
          </motion.div>
        )}
      </div>

      {/* Content Editor */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Hero Section Editor */}
        <div className={`mb-8 p-6 rounded-2xl backdrop-blur-xl border ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-white/80 border-gray-200 shadow-xl'
        }`}>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layout className="w-5 h-5 text-cyan-500" />
            {language === 'zh' ? '主标题区域' : 'Hero Section'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                {language === 'zh' ? '标题' : 'Title'}
              </label>
              <input
                type="text"
                value={currentPageData.hero.title}
                onChange={(e) => updateHero(selectedPage, 'title', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white focus:border-cyan-500'
                    : 'bg-white border-gray-200 text-gray-900 focus:border-cyan-500'
                } focus:outline-none`}
              />
            </div>

            {currentPageData.hero.subtitle && (
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {language === 'zh' ? '副标题' : 'Subtitle'}
                </label>
                <input
                  type="text"
                  value={currentPageData.hero.subtitle}
                  onChange={(e) => updateHero(selectedPage, 'subtitle', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white focus:border-cyan-500'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-cyan-500'
                  } focus:outline-none`}
                />
              </div>
            )}

            {currentPageData.hero.desc && (
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {language === 'zh' ? '描述' : 'Description'}
                </label>
                <textarea
                  value={currentPageData.hero.desc}
                  onChange={(e) => updateHero(selectedPage, 'desc', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white focus:border-cyan-500'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-cyan-500'
                  } focus:outline-none`}
                />
              </div>
            )}

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                <ImageIcon className="w-4 h-4 inline mr-2" />
                {language === 'zh' ? '图片链接' : 'Image URL'}
              </label>
              <input
                type="text"
                value={currentPageData.hero.image}
                onChange={(e) => updateHero(selectedPage, 'image', e.target.value)}
                placeholder="https://..."
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white focus:border-cyan-500'
                    : 'bg-white border-gray-200 text-gray-900 focus:border-cyan-500'
                } focus:outline-none`}
              />
              {currentPageData.hero.image && (
                <img 
                  src={currentPageData.hero.image} 
                  alt="Preview" 
                  className="mt-2 w-full h-32 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Cards Editor */}
        {cardTypes.map(cardType => {
          const cards = currentPageData[cardType as keyof typeof currentPageData] as CardContent[];
          
          return (
            <div key={cardType} className={`mb-8 p-6 rounded-2xl backdrop-blur-xl border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/80 border-gray-200 shadow-xl'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Layout className="w-5 h-5 text-green-500" />
                  {cardType.charAt(0).toUpperCase() + cardType.slice(1)}
                </h2>
                <button
                  onClick={() => addCard(selectedPage, cardType)}
                  className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  {language === 'zh' ? '添加卡片' : 'Add Card'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((card, index) => (
                  <div key={card.id} className={`p-4 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-cyan-500">Card #{index + 1}</span>
                      <button
                        onClick={() => deleteCard(selectedPage, cardType, index)}
                        className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => updateCard(selectedPage, cardType, index, 'title', e.target.value)}
                        placeholder={language === 'zh' ? '标题' : 'Title'}
                        className={`w-full px-3 py-2 rounded-lg border text-sm ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white'
                            : 'bg-white border-gray-200 text-gray-900'
                        } focus:outline-none focus:border-cyan-500`}
                      />

                      <textarea
                        value={card.desc}
                        onChange={(e) => updateCard(selectedPage, cardType, index, 'desc', e.target.value)}
                        placeholder={language === 'zh' ? '描述' : 'Description'}
                        rows={2}
                        className={`w-full px-3 py-2 rounded-lg border text-sm ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white'
                            : 'bg-white border-gray-200 text-gray-900'
                        } focus:outline-none focus:border-cyan-500`}
                      />

                      <input
                        type="text"
                        value={card.image}
                        onChange={(e) => updateCard(selectedPage, cardType, index, 'image', e.target.value)}
                        placeholder="Image URL"
                        className={`w-full px-3 py-2 rounded-lg border text-sm ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white'
                            : 'bg-white border-gray-200 text-gray-900'
                        } focus:outline-none focus:border-cyan-500`}
                      />

                      {card.image && (
                        <img 
                          src={card.image} 
                          alt="Preview" 
                          className="w-full h-24 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
