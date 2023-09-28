/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      PORT: string;
      DB_USER: string;
      DB_HOST: string;
      DB_NAME: string;
      DB_PORT: string;
      DB_PASSWORD: string;
      SESSION_SECRET: string;
    }
  }
}

export {};