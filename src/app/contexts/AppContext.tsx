import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'en';
type Theme = 'dark' | 'light';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isCasting: boolean;
  setIsCasting: (casting: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isCasting, setIsCasting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', theme === 'light');
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        isCasting,
        setIsCasting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
