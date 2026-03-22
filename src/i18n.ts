import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        logo: 'Carely',
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        faq: 'FAQ',
        cta: 'Download App',
      },

      highlight: {
        title: 'Smart Care System',
        subtitle: 'Designed for families and seniors',
      },

      statsCard: {
        title: 'Real-time monitoring',
        subtitle: 'Smart alerts for families',
      },

      hero: {
        badge: 'Caring for those you love',
        title: 'Never lose track of your loved one’s health again.',
        subtitle: 'Track medications, appointments, and daily activities — and get alerted when something goes wrong.',
        ctaPrimary: 'Download App',
        ctaSecondary: 'See How It Works',
        activeUsers: 'Families Protected',
        doctors: 'Tasks Managed',
        satisfaction: 'Peace of Mind',
      },

      testimonials: {
        title: 'Real People. Real Results.',
        subtitle: 'Thousands trust Carely for their healthcare needs.',
        items: [
          {
            content: 'Carely has been a lifesaver for my family. Booking pediatricians is now a breeze, and I love having all our records in one place.',
          },
          {
            content: 'The health tracker is incredibly intuitive. It integrates perfectly with my other devices and gives me actionable insights.',
          },
          {
            content: 'As a doctor, I appreciate how Carely streamlines communication with patients. The telehealth feature is top-notch.',
          },
        ],
      },

      features: {
        title: 'Everything you need to care from a distance',
        subtitle: 'Designed for families who want to stay close, even when they are far.',
        learnMore: 'Learn More',
        backToHome: 'Back to Home',
        getStartedWith: 'Get Started with',
        items: {
          'appointment-booking': {
            title: 'Real-time Risk Detection',
            description: 'If activities are missed, the system detects risk and alerts the family instantly.',
            fullDescription: 'Our intelligent system analyzes missed medications and appointments to calculate a real-time risk level.',
          },
          'telehealth': {
            title: 'Shared Family Responsibilities',
            description: 'Divide care tasks among family members.',
            fullDescription: 'Assign responsibilities like buying medicine or taking to appointments and keep everyone aligned.',
          },
          'health-tracker': {
            title: 'Simple Interface for Seniors',
            description: 'Designed for elderly users with cognitive difficulties.',
            fullDescription: 'Large buttons, guided flows, and repeated reminders ensure ease of use.',
          },
          'security': {
            title: 'Silent Failure Detection',
            description: 'If the user stops interacting, the family is notified.',
            fullDescription: 'Detect inactivity patterns and alert caregivers before it becomes a real problem.',
          },
          'health-records': {
            title: 'All Health in One Place',
            description: 'Medications, appointments and history centralized.',
            fullDescription: 'Everything organized in a single platform for easy access and control.',
          },
        },
      },

      pricing: {
        title: 'Plans for every family',
        subtitle: 'Start free and upgrade as your needs grow.',
        monthly: 'Monthly',
        yearly: 'Yearly',
        save: 'Save 20%',
        plans: {
          basic: {
            name: 'Basic',
            description: 'Essential tracking for one user.',
            cta: 'Start Free',
            features: [
              'Basic activity tracking',
              'Medication reminders',
              'Daily check-ins',
            ],
          },
          premium: {
            name: 'Premium',
            description: 'Advanced alerts and monitoring.',
            cta: 'Upgrade',
            features: [
              'Everything in Basic',
              'Real-time risk alerts',
              'Family notifications',
              'Priority monitoring',
            ],
          },
          family: {
            name: 'Family',
            description: 'Full control for multiple family members.',
            cta: 'Get Started',
            features: [
              'Everything in Premium',
              'Multiple family members',
              'Shared responsibilities',
              'Central dashboard',
            ],
          },
        },
      },

      footer: {
        tagline: 'Because caring should never depend on distance.',
        subscribe: 'Subscribe',
        placeholder: 'Enter your email',
      },

      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know.',
        questions: [
          {
            q: 'How does the risk system work?',
            a: 'The app monitors missed medications and activities. If patterns of risk are detected, family members are automatically alerted.',
          },
          {
            q: 'Can multiple family members use the app?',
            a: 'Yes, responsibilities can be shared between family members to ensure proper care.',
          },
          {
            q: 'Is the app easy for elderly people to use?',
            a: 'Yes, the interface is simplified with large buttons, guided flows, and reminders.',
          },
          {
            q: 'What happens if the elderly user stops using the app?',
            a: 'The system detects inactivity and alerts family members automatically.',
          },
        ],
      },
    },
  },

  pt: {
    translation: {
      nav: {
        logo: 'Carely',
        home: 'Início',
        features: 'Funcionalidades',
        pricing: 'Planos',
        faq: 'FAQ',
        cta: 'Baixar App',
      },

      highlight: {
        title: 'Sistema de Cuidado Inteligente',
        subtitle: 'Feito para famílias e idosos',
      },

      statsCard: {
        title: 'Monitoramento em tempo real',
        subtitle: 'Alertas inteligentes para a família',
      },

      hero: {
        badge: 'Cuidando de quem você ama',
        title: 'Nunca mais perca o controle da saúde de quem você ama.',
        subtitle: 'Acompanhe remédios, consultas e atividades — e receba alertas quando algo estiver errado.',
        ctaPrimary: 'Baixar App',
        ctaSecondary: 'Como Funciona',
        activeUsers: 'Famílias Protegidas',
        doctors: 'Tarefas Gerenciadas',
        satisfaction: 'Tranquilidade',
      },

      testimonials: {
        title: 'Pessoas reais. Resultados reais.',
        subtitle: 'Milhares confiam no Carely para cuidar da saúde.',
        items: [
          {
            content: 'O Carely foi essencial para minha família. Agendar consultas ficou muito mais fácil e agora temos tudo em um só lugar.',
          },
          {
            content: 'O monitoramento é extremamente intuitivo. Funciona perfeitamente e traz informações úteis.',
          },
          {
            content: 'Como médica, vejo muito valor na comunicação facilitada. O recurso de teleatendimento é excelente.',
          },
        ],
      },

      features: {
        title: 'Tudo que você precisa para cuidar à distância',
        subtitle: 'Feito para famílias que querem estar presentes, mesmo de longe.',
        learnMore: 'Saiba Mais',
        backToHome: 'Voltar ao Início',
        getStartedWith: 'Comece com',
        items: {
          'appointment-booking': {
            title: 'Detecção de Risco em Tempo Real',
            description: 'Se atividades não são cumpridas, o sistema alerta a família automaticamente.',
            fullDescription: 'O sistema analisa falhas em remédios e consultas e calcula o nível de risco em tempo real.',
          },
          'telehealth': {
            title: 'Divisão de Responsabilidades',
            description: 'Cada familiar assume tarefas específicas.',
            fullDescription: 'Organize quem leva ao médico, compra remédios e acompanha o dia a dia.',
          },
          'health-tracker': {
            title: 'Interface Simples para Idosos',
            description: 'Projetado para facilitar o uso por idosos.',
            fullDescription: 'Botões grandes, fluxos guiados e lembretes repetidos.',
          },
          'security': {
            title: 'Detecção de Falha Silenciosa',
            description: 'Se o idoso parar de usar o app, a família é avisada.',
            fullDescription: 'Identifique ausência de interação antes que vire um problema sério.',
          },
          'health-records': {
            title: 'Saúde Centralizada',
            description: 'Remédios, consultas e histórico em um só lugar.',
            fullDescription: 'Tudo organizado para fácil acesso e controle.',
          },
        },
      },

      pricing: {
        title: 'Planos para toda a família',
        subtitle: 'Comece grátis e evolua conforme necessário.',
        monthly: 'Mensal',
        yearly: 'Anual',
        save: 'Economize 20%',
        plans: {
          basic: {
            name: 'Básico',
            description: 'Controle essencial para um usuário.',
            cta: 'Começar',
            features: [
              'Controle básico de atividades',
              'Lembretes de medicamentos',
              'Check-ins diários',
            ],
          },
          premium: {
            name: 'Premium',
            description: 'Alertas e monitoramento avançado.',
            cta: 'Assinar',
            features: [
              'Tudo do básico',
              'Alertas de risco em tempo real',
              'Notificações para a família',
              'Monitoramento prioritário',
            ],
          },
          family: {
            name: 'Família',
            description: 'Controle completo para vários familiares.',
            cta: 'Começar',
            features: [
              'Tudo do premium',
              'Múltiplos familiares',
              'Divisão de responsabilidades',
              'Painel centralizado',
            ],
          },
        },
      },

      footer: {
        tagline: 'Porque cuidar não deveria depender da distância.',
        subscribe: 'Inscrever-se',
        placeholder: 'Digite seu email',
      },

      faq: {
        title: 'Perguntas Frequentes',
        subtitle: 'Tudo o que você precisa saber.',
        questions: [
          {
            q: 'Como funciona o sistema de risco?',
            a: 'O app monitora falhas em remédios e atividades. Se detectar risco, a família é alertada automaticamente.',
          },
          {
            q: 'Vários familiares podem usar?',
            a: 'Sim, as responsabilidades podem ser divididas entre os familiares.',
          },
          {
            q: 'É fácil para idosos usarem?',
            a: 'Sim, a interface é simplificada com botões grandes e fluxos guiados.',
          },
          {
            q: 'E se o idoso parar de usar o app?',
            a: 'O sistema detecta a inatividade e avisa a família automaticamente.',
          },
        ],
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;