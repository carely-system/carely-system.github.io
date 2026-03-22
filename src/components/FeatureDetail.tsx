import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle2, Calendar, Video, Activity, Lock, FileText } from 'lucide-react';
import { THEMES, ThemeId } from '../constants/themes';
import { CONTENT } from '../constants/content';
import { cn } from '../lib/utils';

const ICON_MAP = {
  Calendar: Calendar,
  Video: Video,
  Activity: Activity,
  Lock: Lock,
  FileText: FileText,
};

interface FeatureDetailProps {
  currentTheme: ThemeId;
}

export const FeatureDetail: React.FC<FeatureDetailProps> = ({ currentTheme }) => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = THEMES[currentTheme];

  const feature = CONTENT.features.items.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!feature) {
      navigate('/');
    }
  }, [feature, navigate]);

  if (!feature) return null;

  const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP];

  return (
    <div className={cn('min-h-screen pt-24 pb-20', theme.bg)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/"
          className={cn(
            'inline-flex items-center space-x-2 mb-12 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity group',
            theme.text
          )}
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{t('features.backToHome')}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={cn(
                'w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl',
                feature.color,
                'text-white'
              )}
            >
              <Icon className="w-7 h-7" />
            </div>

            <h1 className={cn('text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight', theme.text)}>
              {t(`features.items.${feature.slug}.title`)}
            </h1>

            <p className={cn('text-lg opacity-70 leading-relaxed mb-10', theme.text)}>
              {t(`features.items.${feature.slug}.fullDescription`)}
            </p>

            <div className="space-y-4 mb-10">
              {feature.details.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className={cn('w-5 h-5 mt-0.5 shrink-0', theme.accentText)} />
                  <span className={cn('text-base opacity-80', theme.text)}>{benefit}</span>
                </div>
              ))}
            </div>

            <button
              className={cn(
                'px-8 py-4 rounded-2xl font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95',
                theme.accent
              )}
            >
              {t('features.getStartedWith')} {t(`features.items.${feature.slug}.title`).split(' ').pop()}
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className={cn('absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-20 -z-10', feature.color)} />
            <div className={cn('relative rounded-[2rem] overflow-hidden border shadow-2xl', theme.border)}>
              <img
                src={feature.details.imageUrl}
                alt={feature.title}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
