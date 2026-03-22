import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Calendar, Video, Activity, Lock, FileText, ArrowRight } from 'lucide-react';
import { THEMES, ThemeId } from '../constants/themes';
import { CONTENT } from '../constants/content';
import { cn } from '../lib/utils';

interface FeaturesProps {
  currentTheme: ThemeId;
}

const ICON_MAP = {
  Calendar: Calendar,
  Video: Video,
  Activity: Activity,
  Lock: Lock,
  FileText: FileText,
};

export const Features: React.FC<FeaturesProps> = ({ currentTheme }) => {
  const { t } = useTranslation();
  const theme = THEMES[currentTheme];

  return (
    <section id="features" className={cn('py-24', theme.bg)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn('text-4xl md:text-5xl font-bold mb-6 tracking-tight', theme.text)}
          >
            {t('features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn('text-lg max-w-2xl mx-auto opacity-70 leading-relaxed', theme.text)}
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONTENT.features.items.map((item, index) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
            const isWide = index === 0;

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'group relative p-7 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col',
                  theme.card,
                  theme.border,
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                )}
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md',
                    item.color,
                    'text-white'
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className={cn('text-xl font-bold mb-2 tracking-tight', theme.text)}>
                  {t(`features.items.${item.slug}.title`)}
                </h3>
                <p className={cn('text-sm opacity-70 leading-relaxed mb-5 max-w-prose flex-grow', theme.text)}>
                  {t(`features.items.${item.slug}.description`)}
                </p>

                <Link
                  to={`/features/${item.slug}`}
                  className={cn(
                    'flex items-center space-x-1.5 text-xs font-bold transition-all group-hover:translate-x-1 mt-auto cursor-pointer w-fit',
                    theme.accentText
                  )}
                >
                  {/* <span>{t('features.learnMore')}</span> */}
                  {/* <ArrowRight className="w-3.5 h-3.5" /> */}
                </Link>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -z-10 transition-opacity opacity-0 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
