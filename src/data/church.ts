export const church = {
  churchName: 'Word of Life Church',
  tagline: 'Doha, Qatar',
  mission:
    'We gather weekly to worship Jesus, grow in faith, and care for our community with kindness and prayer.',
  serviceTime: 'Fridays at 8:30 AM',
  location: 'Building 37, Street 908, Zone 44, Nuaija, Doha, Qatar',
  mapUrl: 'https://maps.app.goo.gl/JedTEGwKrRaBXn2X6',
  parkingMapUrl: 'https://maps.app.goo.gl/hMiwdfP5DFyWV2dU6',
  contact: {
    phone: '+974 xxxx xxxxx',
    email: 'placeholder@placeholder.com'
  },
  leadership: [
    {
      name: 'Rev. Dr. Sajan Samuel Mandody',
      role: 'Pastor',
      bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Rev. Dr. Sheena Sajan',
      role: 'Pastor',
      bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Dr. Shiby Thomas',
      role: 'Pastor',
      bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ],
  cellGroups: [
    {
      name: 'Maple Street Circle',
      time: 'Tuesdays, 7:00 PM',
      location: 'Maple Street (east side)',
      leader: 'Ana Lopez'
    },
    {
      name: 'Sunrise Prayers',
      time: 'Wednesdays, 6:30 AM',
      location: 'Downtown cafe patio',
      leader: 'Derek Shaw'
    },
    {
      name: 'Lakeside Table',
      time: 'Wednesdays, 7:30 PM',
      location: 'Westbrook neighborhood',
      leader: 'Priya Singh'
    },
    {
      name: 'Thursday Walkers',
      time: 'Thursdays, 6:00 PM',
      location: 'Riverbend Park',
      leader: 'Caleb Norris'
    },
    {
      name: 'Front Porch Friends',
      time: 'Fridays, 6:30 PM',
      location: 'Old Town area',
      leader: 'Hannah Brooks'
    }
  ],
  afterServiceInfo: {
    sundaySchool: 'Children gather for a short, gentle Sunday School right after the service.',
    quietTime:
      'Adults are invited to small quiet-time circles for reflection, prayer, and shared encouragement.'
  },
  zoomJoinUrl: 'https://zoom.us/j/1234567890',
  youtubeChannelUrl: 'https://www.youtube.com/@WordOfLife-1/videos',
  youtubeFeaturedVideoId: 'bigIuX5KoXc'
};

export type ChurchData = typeof church;
