import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { THEMES, ThemeId } from '../constants/themes';
import { CONTENT } from '../constants/content';
import { cn } from '../lib/utils';

interface FAQProps {
  currentTheme: ThemeId;
}

export const FAQ: React.FC<FAQProps> = ({ currentTheme }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const theme = THEMES[currentTheme];

  return (
    <section id="faq" className={cn('py-24', theme.bg)}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn('text-4xl md:text-5xl font-bold mb-6 tracking-tight', theme.text)}
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn('text-lg opacity-70 leading-relaxed', theme.text)}
          >
            {t('faq.subtitle')}
          </motion.p>
        </div>

        <div className="space-y-4">
          {CONTENT.faqs.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'rounded-2xl border overflow-hidden transition-all duration-300',
                activeIndex === index ? cn(theme.card, 'shadow-xl', theme.border) : cn(theme.bg, theme.border)
              )}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={cn('text-base font-bold tracking-tight', theme.text)}>{t(`faq.questions.${index}.q`)}</span>
                <div
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300',
                    activeIndex === index ? theme.accent : 'bg-white/5',
                    activeIndex === index ? 'text-white' : theme.text,
                    'border',
                    theme.border
                  )}
                >
                  <ChevronDown className={cn('w-4 h-4 transition-transform', activeIndex === index && 'rotate-180')} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className={cn('px-5 pb-5 text-sm opacity-70 leading-relaxed', theme.text)}>
                      {t(`faq.questions.${index}.a`)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
