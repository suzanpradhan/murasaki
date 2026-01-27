export const constants = {
  googleDocViewerUrl: 'https://docs.google.com/viewer?url=',
};

export const months: Record<number, string> = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const allBookingTypes = [
  { label: 'Event', value: 'event' },
  { label: 'Music production', value: 'music_production' },
  { label: 'Video Production', value: 'video_production' },
  { label: 'Recording', value: 'recording' },
  { label: 'Production Course', value: 'production_course' },
  { label: 'Others', value: 'others' },
];

export const services = [
  {
    id: 1,
    imageSrc: '/image/dubbing.png',
    altText: 'recording',
    title: 'RECORDING',
    value: allBookingTypes[3].value,
    desciption: 'Studio bookings available.Sunday – Friday (11:30am -5:30pm) ',
  },
  {
    id: 2,
    imageSrc: '/image/videography.png',
    altText: 'music-production',
    title: 'MUSIC PRODUCTION',
    value: allBookingTypes[1].value,
    desciption:
      'Get up to 20% discount on the production charge through the spotlight campaign.',
  },
  {
    id: 3,
    imageSrc: '/image/camera.png',
    altText: 'video-production',
    title: 'VIDEO PRODUCTION',
    value: allBookingTypes[2].value,
    desciption:
      'Craft your stories and ideas with a fully customizable video production module.',
  },
  {
    id: 4,
    imageSrc: '/image/video-production.png',
    altText: 'production-course',
    title: 'PRODUCTION COURSE',
    value: allBookingTypes[4].value,
    desciption:
      'Learn the fundamentals of music and video production with hands-on training from industry experts.',
  },
];
