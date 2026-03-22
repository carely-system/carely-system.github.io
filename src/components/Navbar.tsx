import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { THEMES, ThemeId } from '../constants/themes';
import { cn } from '../lib/utils';

interface NavbarProps {
  currentTheme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

const LANGUAGES = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, setTheme }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const theme = THEMES[currentTheme];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? cn(theme.bg, 'shadow-lg py-3 border-b', theme.border) : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className={cn('text-2xl font-bold tracking-tight', theme.text)}>
            {t('nav.logo')}
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn('text-sm font-medium transition-colors hover:opacity-70', theme.text)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className={cn(
                'flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-all',
                theme.border,
                theme.text,
                'hover:bg-white/5'
              )}
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown className={cn('w-4 h-4 transition-transform', isLangDropdownOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={cn(
                    'absolute right-0 mt-2 w-40 rounded-2xl border shadow-xl p-2 z-50',
                    theme.bg,
                    theme.border
                  )}
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors',
                        i18n.language === lang.code ? theme.accent : 'hover:bg-white/5',
                        i18n.language === lang.code ? 'text-white' : theme.text
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {i18n.language === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Switcher */}
          {/* <div className="relative">
            <button
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              className={cn(
                'flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-all',
                theme.border,
                theme.text,
                'hover:bg-white/5'
              )}
            >
              <div
                className="w-3 h-3 rounded-full border border-white/20"
                style={{ backgroundColor: theme.color }}
              />
              <span>Theme</span>
              <ChevronDown className={cn('w-4 h-4 transition-transform', isThemeDropdownOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {isThemeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={cn(
                    'absolute right-0 mt-2 w-48 rounded-2xl border shadow-xl p-2 z-50',
                    theme.bg,
                    theme.border
                  )}
                >
                  {(Object.keys(THEMES) as ThemeId[]).map((tId) => (
                    <button
                      key={tId}
                      onClick={() => {
                        setTheme(tId);
                        setIsThemeDropdownOpen(false);
                      }}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors',
                        currentTheme === tId ? theme.accent : 'hover:bg-white/5',
                        currentTheme === tId ? 'text-white' : theme.text
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full border border-white/20"
                          style={{ backgroundColor: THEMES[tId].color }}
                        />
                        <span>{THEMES[tId].name}</span>
                      </div>
                      {currentTheme === tId && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className={cn(
              'px-5 py-2 rounded-full text-sm font-semibold transition-transform active:scale-95',
              theme.accent,
              'text-white shadow-lg shadow-indigo-500/20'
            )}
          >
            {t('nav.cta')}
          </button> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn('md:hidden p-2 rounded-xl', theme.text)}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn('md:hidden overflow-hidden mt-4 rounded-2xl border p-4', theme.bg, theme.border)}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn('text-lg font-medium', theme.text)}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10" />
              
              {/* Mobile Language Switcher */}
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-medium border',
                      i18n.language === lang.code ? theme.accent : 'bg-transparent',
                      i18n.language === lang.code ? 'text-white' : theme.text,
                      theme.border
                    )}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>

              <div className="h-px bg-white/10" />
              <div className="flex flex-wrap gap-3">
                {(Object.keys(THEMES) as ThemeId[]).map((tId) => (
                  <button
                    key={tId}
                    onClick={() => setTheme(tId)}
                    className={cn(
                      'flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border',
                      currentTheme === tId ? theme.accent : 'bg-transparent',
                      currentTheme === tId ? 'text-white' : theme.text,
                      theme.border
                    )}
                  >
                    <div
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: THEMES[tId].color }}
                    />
                    <span>{THEMES[tId].name}</span>
                  </button>
                ))}
              </div>
              <button className={cn('w-full py-3 rounded-xl font-bold text-white', theme.accent)}>
                {t('nav.cta')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
