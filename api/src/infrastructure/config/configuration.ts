import { getEnv, getEnvNumber } from './env.util.js';

export default () => ({
  port: getEnvNumber('PORT', 8080),
  database: {
    url: getEnv('DATABASE_URL'),
  },
  jwt: {
    secret: getEnv('JWT_SECRET'),
    expiresIn: getEnv('JWT_EXPIRES_IN', '7d'),
  },
  redis: {
    host: getEnv('REDIS_HOST', 'localhost'),
    port: getEnvNumber('REDIS_PORT', 6379),
  },
  ai: {
    baseUrl: getEnv('AI_SERVICE_URL', 'http://localhost:8000'),
    apiKey: getEnv('AI_SERVICE_KEY', ''),
  },
});
