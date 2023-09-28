export const { APP_URL } = process.env;
export const PORT = parseInt(process.env.PORT as string, 10);
export const SESSION = {
  secret: process.env.SESSION_SECRET as string,
};

export const DATABASE = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT as string, 10),
  password: process.env.DB_PASSWORD,
};

export const REDIS = {
  user: process.env.REDIS_USER,
  host: process.env.REDIS_HOST,
  name: process.env.REDIS_NAME,
  port: parseInt(process.env.REDIS_PORT as string, 10),
  password: process.env.REDIS_PASSWORD,
};