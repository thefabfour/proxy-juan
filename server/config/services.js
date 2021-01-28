module.exports = {
  service1: {
    api: '/rooms/:propertyId/booking',
    cal: '/rooms/:propertyId/booking/calendar',
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
  service2: {
    api: '/rooms/:propertyId/reviews',
    url: 'http://localhost:3002',
    bundle: 'bundle.js',
  },
  service3: {
    api: '/home/:id/photos',
    url: 'http://localhost:3003',
    bundle: 'bundle.js',
  },
};
