import type { Metadata } from 'next';

export const homeContent = {
  metadata: {
    title: 'Home',
    description: 'A small, welcoming church rooted in faith and community.'
  } satisfies Metadata,
  hero: {
    headline: 'A friendly neighborhood church where you can breathe, belong, and grow.',
    primaryCta: 'Plan a Visit',
    secondaryCta: 'Get Connected',
    imageAlt: 'Church community sharing conversation over coffee'
  },
  serviceTimeSection: {
    eyebrow: 'Service Time',
    title: 'Join us this Friday',
    description:
      'We keep gatherings simple, warm, and centered on worship, prayer, and a thoughtful message.',
    cardLabel: 'Single Service',
    callout:
      'We gather for one service, then linger for connection and quiet-time groups.',
    whatToExpectTitle: 'What to Expect',
    whatToExpectItems: [
      {
        title: 'Worship',
        description: 'with gentle, acoustic-led songs.'
      },
      {
        title: 'Message',
        description: 'that is biblical, practical, and hopeful.'
      },
      {
        title: 'Community',
        description: 'with space to share prayer needs.'
      }
    ]
  },
  afterServiceSection: {
    eyebrow: 'After Service',
    title: 'Unhurried moments to learn and connect',
    description:
      'We keep the service focused, then open up space afterward for kids and adults to gather.',
    items: [
      {
        title: 'Sunday School for Kids',
        description: 'Children are invited to a short Sunday School right after the service.'
      },
      {
        title: 'Quiet-Time Circles',
        description: 'Adults can join small quiet-time gatherings for prayer and reflection.'
      }
    ]
  },
  communitySection: {
    eyebrow: 'Our Community',
    title: 'Small church, shared life',
    description:
      'We love Sunday gatherings, shared meals, and simple moments of care throughout the week.',
    items: [
      {
        src: '/images/community-1.svg',
        alt: 'Coffee and conversation before the service.',
        caption: 'Coffee and conversation before the service.'
      },
      {
        src: '/images/community-2.svg',
        alt: 'Neighbors praying together in living rooms.',
        caption: 'Neighbors praying together in living rooms.'
      },
      {
        src: '/images/community-3.svg',
        alt: 'Serving meals and checking in on each other.',
        caption: 'Serving meals and checking in on each other.'
      }
    ]
  },
  whoWeAreSection: {
    eyebrow: 'Who We Are',
    title: "A family of neighbors learning Jesus' way",
    description:
      'We are a multi-generational church that values kindness, prayer, and steady growth in faith.',
    body:
      'We welcome questions, celebrate small steps of faith, and keep space for honest conversations. Whether you have been in church for years or are visiting for the first time, you are welcome here.',
    cta: 'Meet Our Church'
  },
  sermonSection: {
    eyebrow: 'Latest Sermon',
    title: 'Catch up anytime',
    description:
      'If you missed a week or want to re-listen, our recent message is available here.',
    iframeTitle: 'Latest sermon'
  }
};
