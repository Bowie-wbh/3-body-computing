import React from 'react';
import { Link } from 'react-router';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';

export function Footer() {
  const { language, theme } = useApp();
  const t = translations[language].footer;

  return (
    <footer className={`relative ${
      theme === 'dark' ? 'bg-gradient-to-t from-white/5 to-transparent border-t border-white/10' : 'bg-gradient-to-t from-gray-100/50 to-transparent border-t border-gray-200'
    } mt-20`}>
      <div className="container-responsive-wide mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className={`text-2xl font-bold bg-gradient-to-r mb-2 ${
              theme === 'dark'
                ? 'from-blue-400 via-cyan-400 to-green-400'
                : 'from-blue-600 via-cyan-600 to-green-600'
            } bg-clip-text text-transparent`}>
              {t.title}
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            } text-sm mb-4`}>
              {t.subtitle}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } font-semibold mb-4`}>{t.viewMore}</h4>
            <div className="space-y-2">
              <Link
                to="/constellation"
                className={`block ${
                  theme === 'dark' ? 'text-white/60 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
                } transition-colors text-sm`}
              >
                {t.links.constellation}
              </Link>
              <Link
                to="/services"
                className={`block ${
                  theme === 'dark' ? 'text-white/60 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
                } transition-colors text-sm`}
              >
                {t.links.services}
              </Link>
              <Link
                to="/about"
                className={`block ${
                  theme === 'dark' ? 'text-white/60 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
                } transition-colors text-sm`}
              >
                {t.links.about}
              </Link>
            </div>
          </div>

          {/* Partners Section */}
          <div>
            <h4 className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } font-semibold mb-4`}>{t.partners.title}</h4>
            <div className="space-y-2">
              <a
                href="https://www.zhejianglab.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${
                  theme === 'dark' ? 'text-white/60 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
                } transition-colors text-sm`}
              >
                {t.partners.zjlab}
              </a>
              <a
                href="https://cn.zero2x.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${
                  theme === 'dark' ? 'text-white/60 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
                } transition-colors text-sm`}
              >
                {t.partners.zero2x}
              </a>
              <a
                href="https://aiforgood.itu.int/ai-and-space-computing-challenge/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${
                  theme === 'dark' ? 'text-white/60 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
                } transition-colors text-sm`}
              >
                {t.partners.itu}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-8 border-t ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-300'
        }`}>
          <p className={`${
            theme === 'dark' ? 'text-white/40' : 'text-gray-500'
          } text-sm text-center`}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}