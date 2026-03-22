import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { THEMES, ThemeId } from '../constants/themes';
import { CONTENT } from '../constants/content';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

interface TestimonialsProps {
  currentTheme: ThemeId;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentTheme }) => {
  const theme = THEMES[currentTheme];
  const { t } = useTranslation();

  return (
    <section className={cn('py-24 relative overflow-hidden', theme.bg)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn('text-4xl md:text-5xl font-bold mb-6 tracking-tight', theme.text)}
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn('text-lg max-w-2xl mx-auto opacity-70 leading-relaxed', theme.text)}
          >
            {t("testimonials.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTENT.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'relative p-7 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
                theme.card,
                theme.border
              )}
            >
              <Quote className={cn('absolute top-5 right-5 w-8 h-8 opacity-10', theme.text)} />

              <div className="flex items-center space-x-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3.5 h-3.5',
                      i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-300 text-slate-300'
                    )}
                  />
                ))}
              </div>

              <p className={cn('text-base font-medium mb-6 italic leading-relaxed', theme.text)}>
                "{t(testimonial.content)}"
              </p>

              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-indigo-500/20 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className={cn('text-xs font-bold', theme.text)}>{testimonial.name}</div>
                  <div className={cn('text-[10px] opacity-60', theme.text)}>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
