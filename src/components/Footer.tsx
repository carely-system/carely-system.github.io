import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { THEMES, ThemeId } from '../constants/themes';
import { CONTENT } from '../constants/content';
import { cn } from '../lib/utils';

interface FooterProps {
  currentTheme: ThemeId;
}

export const Footer: React.FC<FooterProps> = ({ currentTheme }) => {
  const { t } = useTranslation();
  const theme = THEMES[currentTheme];

  return (
    <footer className={cn('py-16 border-t', theme.footerBg, theme.border)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className={cn('text-2xl font-bold tracking-tight', theme.text)}>{t('nav.logo')}</div>
            </div>
            <p className={cn('text-base opacity-70 mb-6 max-w-sm leading-relaxed', theme.text)}>{t('footer.tagline')}</p>

            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder={t('footer.placeholder')}
                className={cn(
                  'w-full py-3.5 pl-10 pr-28 rounded-xl border bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm',
                  theme.border,
                  theme.text
                )}
              />
              <Mail className={cn('absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40', theme.text)} />
              <button
                className={cn(
                  'absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg font-bold text-white transition-all active:scale-95 flex items-center space-x-1.5 text-xs',
                  theme.accent
                )}
              >
                <span>{t('footer.subscribe')}</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Links */}
          {CONTENT.footer.links.map((group) => (
            <div key={group.title} className="md:col-span-1">
              <h4 className={cn('text-[10px] font-bold uppercase tracking-widest mb-5 opacity-50', theme.text)}>{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={cn('text-sm opacity-70 hover:opacity-100 hover:translate-x-1 inline-block transition-all duration-300', theme.text)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={cn('pt-6 border-t flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0', theme.border)}>
          <div className={cn('text-xs opacity-50 font-medium flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0', theme.text)}>
            <span>© {new Date().getFullYear()} {t('nav.logo')}. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={cn(
                  'p-1.5 rounded-lg border hover:bg-white/10 hover:scale-110 transition-all duration-300',
                  theme.border,
                  theme.text
                )}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
