import React, { createContext, useContext, useState, useEffect } from 'react';

// 定义内容数据结构
export interface CardContent {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export interface PageContent {
  constellation: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };
    features: CardContent[];
  };
  intro: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };
    features: CardContent[];
  };
  services: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };
    services: CardContent[];
  };
  about: {
    hero: {
      title: string;
      desc: string;
      image: string;
    };
    timeline: Array<{
      id: string;
      date: string;
      title: string;
      desc: string;
      image: string;
    }>;
    achievements: CardContent[];
  };
}

// 默认内容
const defaultContent: PageContent = {
  constellation: {
    hero: {
      title: '三体计算星座',
      subtitle: '全球首个面向人工智能的低轨卫星星座',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
    },
    features: [
      {
        id: '1',
        title: '全球覆盖',
        desc: '通过低轨卫星网络实现全球无缝覆盖',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        id: '2',
        title: 'AI算力',
        desc: '提供强大的边缘AI计算能力',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        id: '3',
        title: '实时数据',
        desc: '低延迟的数据传输和处理',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  intro: {
    hero: {
      title: '把人工智能送入太空',
      subtitle: '开启智能太空时代',
      image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
    },
    features: [
      {
        id: '1',
        title: '太空AI',
        desc: '在轨AI计算能力',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  services: {
    hero: {
      title: '开放服务',
      subtitle: '为全球提供智能太空服务',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
    },
    services: [
      {
        id: '1',
        title: '遥感服务',
        desc: '高分辨率地球观测',
        image: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  about: {
    hero: {
      title: '关于我们',
      desc: '致力于太空智能化',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
    },
    timeline: [
      {
        id: '1',
        date: '2024年',
        title: '星座启动',
        desc: '三体计算星座项目正式启动',
        image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ],
    achievements: [
      {
        id: '1',
        title: '技术创新',
        desc: '在轨AI处理技术突破',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  }
};

interface ContentContextType {
  content: PageContent;
  updateContent: (newContent: PageContent) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<PageContent>(() => {
    // 从 localStorage 加载保存的内容
    const saved = localStorage.getItem('websiteContent');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  // 保存到 localStorage
  useEffect(() => {
    localStorage.setItem('websiteContent', JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: PageContent) => {
    setContent(newContent);
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('websiteContent');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}
