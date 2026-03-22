export const CONTENT = {
  nav: {
    logo: 'Carely',
    links: [
      { nameKey: 'nav.home', href: '#home' },
      { nameKey: 'nav.features', href: '#features' },
      { nameKey: 'nav.pricing', href: '#pricing' },
      { nameKey: 'nav.faq', href: '#faq' },
    ],
    ctaKey: 'nav.cta',
  },

  hero: {
    badgeKey: 'hero.badge',
    titleKey: 'hero.title',
    subtitleKey: 'hero.subtitle',
    ctaPrimaryKey: 'hero.ctaPrimary',
    ctaSecondaryKey: 'hero.ctaSecondary',
    stats: [
      { labelKey: 'hero.activeUsers', value: '50k+' },
      { labelKey: 'hero.doctors', value: '2k+' },
      { labelKey: 'hero.satisfaction', value: '99%' },
    ],
  },

  features: {
    titleKey: 'features.title',
    subtitleKey: 'features.subtitle',
    items: [
      {
        slug: 'appointment-booking',
        titleKey: 'features.items.appointment-booking.title',
        descriptionKey: 'features.items.appointment-booking.description',
        fullDescriptionKey: 'features.items.appointment-booking.fullDescription',
        icon: 'Calendar',
        color: 'bg-blue-500',
        details: {
          benefits: [],
          imageUrl: 'https://picsum.photos/seed/booking/1200/800',
        },
      },
      {
        slug: 'telehealth',
        titleKey: 'features.items.telehealth.title',
        descriptionKey: 'features.items.telehealth.description',
        fullDescriptionKey: 'features.items.telehealth.fullDescription',
        icon: 'Video',
        color: 'bg-purple-500',
        details: {
          benefits: [],
          imageUrl: 'https://picsum.photos/seed/telehealth/1200/800',
        },
      },
      {
        slug: 'health-tracker',
        titleKey: 'features.items.health-tracker.title',
        descriptionKey: 'features.items.health-tracker.description',
        fullDescriptionKey: 'features.items.health-tracker.fullDescription',
        icon: 'Activity',
        color: 'bg-emerald-500',
        details: {
          benefits: [],
          imageUrl: 'https://picsum.photos/seed/tracker/1200/800',
        },
      },
      {
        slug: 'security',
        titleKey: 'features.items.security.title',
        descriptionKey: 'features.items.security.description',
        fullDescriptionKey: 'features.items.security.fullDescription',
        icon: 'Lock',
        color: 'bg-rose-500',
        details: {
          benefits: [],
          imageUrl: 'https://picsum.photos/seed/security/1200/800',
        },
      },
      {
        slug: 'health-records',
        titleKey: 'features.items.health-records.title',
        descriptionKey: 'features.items.health-records.description',
        fullDescriptionKey: 'features.items.health-records.fullDescription',
        icon: 'FileText',
        color: 'bg-amber-500',
        details: {
          benefits: [],
          imageUrl: 'https://picsum.photos/seed/records/1200/800',
        },
      },
    ],
  },

  pricing: {
    titleKey: 'pricing.title',
    subtitleKey: 'pricing.subtitle',
    plans: [
      {
        nameKey: 'pricing.plans.basic.name',
        descriptionKey: 'pricing.plans.basic.description',
        ctaKey: 'pricing.plans.basic.cta',
        priceMonthly: 0,
        priceYearly: 0,
        features: [
          'pricing.plans.basic.features.0',
          'pricing.plans.basic.features.1',
          'pricing.plans.basic.features.2',
        ],
        popular: false,
      },
      {
        nameKey: 'pricing.plans.premium.name',
        descriptionKey: 'pricing.plans.premium.description',
        ctaKey: 'pricing.plans.premium.cta',
        priceMonthly: 9.99,
        priceYearly: 99,
        features: [
          'pricing.plans.premium.features.0',
          'pricing.plans.premium.features.1',
          'pricing.plans.premium.features.2',
          'pricing.plans.premium.features.3',
        ],
        popular: true,
      },
      {
        nameKey: 'pricing.plans.family.name',
        descriptionKey: 'pricing.plans.family.description',
        ctaKey: 'pricing.plans.family.cta',
        priceMonthly: 19.99,
        priceYearly: 199,
        features: [
          'pricing.plans.family.features.0',
          'pricing.plans.family.features.1',
          'pricing.plans.family.features.2',
          'pricing.plans.family.features.3',
        ],
        popular: false,
      },
    ],
  },

  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'Mother of two',
      content: 'testimonials.items.0.content',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Fitness Enthusiast',
      content: 'testimonials.items.1.content',
      avatar: 'https://picsum.photos/seed/james/100/100',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rivera',
      role: 'General Practitioner',
      content: 'testimonials.items.2.content',
      avatar: 'https://picsum.photos/seed/emily/100/100',
      rating: 4,
    },
  ],

  faqs: [
    {
      questionKey: 'faq.questions.0.q',
      answerKey: 'faq.questions.0.a',
    },
    {
      questionKey: 'faq.questions.1.q',
      answerKey: 'faq.questions.1.a',
    },
    {
      questionKey: 'faq.questions.2.q',
      answerKey: 'faq.questions.2.a',
    },
    {
      questionKey: 'faq.questions.3.q',
      answerKey: 'faq.questions.3.a',
    },
  ],

  footer: {
    taglineKey: 'footer.tagline',
    emailPlaceholderKey: 'footer.placeholder',
    subscribeCtaKey: 'footer.subscribe',
    links: [],
  },
};