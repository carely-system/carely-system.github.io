import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight } from 'lucide-react';
import { THEMES, ThemeId } from '../constants/themes';
import { CONTENT } from '../constants/content';
import { cn } from '../lib/utils';

interface PricingProps {
  currentTheme: ThemeId;
}

export const Pricing: React.FC<PricingProps> = ({ currentTheme }) => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);
  const theme = THEMES[currentTheme];

  const plans = [
    { key: 'basic', ...CONTENT.pricing.plans[0] },
    { key: 'premium', ...CONTENT.pricing.plans[1] },
    { key: 'family', ...CONTENT.pricing.plans[2] },
  ];

  return (
    <section id="pricing" className={cn('py-24 relative overflow-hidden', theme.bg)}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn('text-4xl md:text-5xl font-bold mb-6 tracking-tight', theme.text)}
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn('text-lg max-w-2xl mx-auto opacity-70 leading-relaxed mb-10', theme.text)}
          >
            {t('pricing.subtitle')}
          </motion.p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={cn('text-sm font-medium', !isYearly ? theme.text : 'opacity-50', theme.text)}>{t('pricing.monthly')}</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                'relative w-14 h-7 rounded-full transition-colors duration-300 p-1',
                isYearly ? theme.accent : 'bg-slate-300 dark:bg-slate-700'
              )}
            >
              <motion.div
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-5 h-5 bg-white rounded-full shadow-md"
              />
            </button>
            <span className={cn('text-sm font-medium flex items-center space-x-2', isYearly ? theme.text : 'opacity-50', theme.text)}>
              <span>{t('pricing.yearly')}</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold text-white uppercase tracking-wider">
                {t('pricing.save')}
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'relative p-7 rounded-2xl border transition-all duration-500 flex flex-col',
                plan.popular ? cn(theme.bg, 'shadow-2xl scale-105 z-10', theme.border) : cn(theme.card, theme.border),
                plan.popular && 'ring-2 ring-indigo-500'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn('text-xl font-bold mb-1.5 tracking-tight', theme.text)}>{t(`pricing.plans.${plan.key}.name`)}</h3>
                <p className={cn('text-xs opacity-60 mb-5', theme.text)}>{t(`pricing.plans.${plan.key}.description`)}</p>
                <div className="flex items-baseline space-x-1">
                  <span className={cn('text-3xl font-extrabold tracking-tight', theme.text)}>
                    ${isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className={cn('text-xs opacity-60 font-medium', theme.text)}>
                    /{isYearly ? t('pricing.perYear') : t('pricing.perMonth')}
                  </span>
                </div>
              </div>

              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2.5">
                      <div className={cn('w-4 h-4 rounded-full flex items-center justify-center', theme.accent, 'text-white')}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={cn('text-xs font-medium opacity-80', theme.text)}>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={cn(
                  'w-full py-3.5 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center space-x-2',
                  plan.popular ? theme.accent : 'bg-white/5 backdrop-blur-sm border',
                  plan.popular ? 'text-white shadow-xl shadow-indigo-500/20' : cn(theme.text, theme.border)
                )}
              >
                <span>{t(`pricing.plans.${plan.key}.cta`)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
