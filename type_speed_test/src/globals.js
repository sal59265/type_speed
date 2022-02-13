export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}`
    : 'localhost:3001';
