import express from "express";
import { PORT } from "./config";

const startServer = async (): Promise<void> => {
  const app = express();

  // eslint-disable-next-line global-require
  const { server } = await require("./loaders").default({
    expressApp: app,
  });

  server
    .listen(PORT, async () => {
      // eslint-disable-next-line no-console
      console.info(`Server listening on port ${PORT}`);
    })
    .on("error", (err: Error) => {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    });
};
startServer();
