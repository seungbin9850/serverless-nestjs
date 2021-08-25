import { config } from 'dotenv';

config();

export default {
  port: Number(process.env.SERVER_PORT),
  mysql: {
    host: process.env.DB_HOST || '127.0.0.1',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  jwt: process.env.JWT_SECRET,
};
