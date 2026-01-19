import type { Metadata } from 'next';

export const aboutContent = {
  metadata: {
    title: 'Who We Are',
    description: 'Learn about our mission, values, and the people who serve our church.'
  } satisfies Metadata,
  missionVisionSection: {
    eyebrow: 'Mission & Vision',
    title: 'A small church with a wide welcome',
    missionTitle: 'Our Mission',
    missionBody:
      'We gather in worship, grow in scripture, and go out to love our neighborhood with care and prayer.',
    visionTitle: 'Our Vision',
    visionBody:
      'A church known for warmth, steady faith, and a practical love that makes room for everyone.'
  },
  valuesSection: {
    eyebrow: 'Values',
    title: 'What shapes our rhythm',
    description: 'These values guide our gatherings, our relationships, and the way we serve.',
    items: [
      {
        title: 'Simple Worship',
        description: 'We keep worship unhurried so hearts can rest and focus on Jesus.'
      },
      {
        title: 'Genuine Community',
        description: 'We listen well, share meals, and care for neighbors like family.'
      },
      {
        title: 'Everyday Faith',
        description: 'We want faith to feel helpful on Mondays, not just Sundays.'
      }
    ]
  },
  faithSection: {
    eyebrow: 'Statement of Faith',
    title: 'A simple, shared foundation',
    description: 'We hold these beliefs with humility and welcome conversations about them.',
    statements: [
      'We believe God is loving, present, and at work in the world.',
      'We follow Jesus Christ and trust in His grace and forgiveness.',
      'We rely on the Bible as a trustworthy guide for life and faith.',
      'We believe the Holy Spirit helps us grow and serve with compassion.'
    ]
  },
  leadershipSection: {
    eyebrow: 'Leadership',
    title: 'People who serve with care',
    description: 'Our leadership team is made up of volunteers and pastors who love to serve.'
  },
  storySection: {
    eyebrow: 'Our Story',
    title: 'A steady presence in Doha',
    description:
      'We started as a small living-room gathering and slowly grew into a chapel known for open doors.',
    body:
      'Over the years we have stayed small on purpose. We value the feeling of being known, of praying for one another by name, and of showing up in ordinary life together. We meet weekly, share meals often, and serve our neighbors in quiet ways.',
    serveTitle: 'How We Serve',
    serveBody:
      'We deliver meals, host listening circles, and support local schools with simple, consistent care.'
  }
};
