import type { Metadata } from 'next';

export const servicesContent = {
  metadata: {
    title: 'Services & Cell Groups',
    description: 'Service time, location details, and ways to connect during the week.'
  } satisfies Metadata,
  sundayServiceSection: {
    eyebrow: 'Sunday Service',
    title: 'One service, focused and welcoming',
    description: 'We gather once each Sunday and keep the atmosphere warm and relaxed.',
    serviceTimeLabel: 'Service Time',
    parkingText: 'Parking is available in the lot near the Masjid.',
    parkingMapUrl: 'https://maps.google.com/?q=Parking+Lot+Near+Masjid',
    entranceText: 'Use the side door with the green awning.',
    accessibilityText: 'A ramp entrance and accessible seating are available.',
    callout:
      'Our service includes worship, prayer, and Spirit inspiried message with time for reflection.',
    imageAlt: 'People arriving at the chapel',
    zoomCta: 'Join on Zoom'
  },
  afterServiceSection: {
    eyebrow: 'After Service',
    title: 'Spaces for kids and quiet reflection',
    description: 'We keep the main service for everyone, then open optional gatherings afterward.',
    sundaySchoolTitle: 'Sunday School (After Service)',
    quietTimeTitle: 'Quiet-Time Gatherings'
  },
  cellGroupsSection: {
    eyebrow: 'Cell Groups',
    title: 'Smaller circles through the week',
    description:
      'Cell groups are relaxed gatherings in homes or neighborhoods for prayer and conversation.',
    cta: 'Join a Cell Group'
  },
  mediaSection: {
    eyebrow: 'Sermons & Media',
    title: 'Listen during the week',
    description: 'We post recordings so you can revisit messages or share them with friends.',
    cardText:
      'Our recent sermons are available online so you can listen on your own schedule or share with someone who needs encouragement.',
    buttonLabel: 'Visit YouTube Channel',
    iframeTitle: 'Featured sermon'
  }
};
