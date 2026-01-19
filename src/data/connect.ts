import type { Metadata } from 'next';

export const connectContent = {
  metadata: {
    title: 'Get Connected',
    description: 'Reach out, ask questions, or plan a visit to Willow Lane Chapel.'
  } satisfies Metadata,
  introSection: {
    eyebrow: 'Get Connected',
    title: 'We would love to meet you',
    description:
      'If you have a question, need prayer, or want to visit, send a message and we will respond soon.'
  },
  contactCard: {
    contactLabel: 'Contact',
    addressLabel: 'Address',
    officeHoursLabel: 'Office Hours',
    officeHours: 'Mon-Thu, 10:00 AM - 3:00 PM'
  },
  faqSection: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    description: 'If you are visiting for the first time, these answers may help.',
    items: [
      {
        title: 'What should I wear?',
        content: 'Come as you are. Most people dress casually and comfortably.'
      },
      {
        title: 'Do I have to talk or pray out loud?',
        content: 'Not at all. You can participate as much or as little as you like.'
      },
      {
        title: 'Is childcare available during the service?',
        content:
          'We keep everyone together during the service. Sunday School for kids happens afterward.'
      }
    ]
  }
};
