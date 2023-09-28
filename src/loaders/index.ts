import type { Application } from "express";
import type { Server } from "http";

import expressLoader from "./express";
import sessionLoader from "./session";

const loaders = async ({
  expressApp,
}: {
  expressApp: Application;
}): Promise<{ server: Server }> => {
  sessionLoader(expressApp);

  const server: Server = expressLoader(expressApp);

  return { server };
};

export default loaders;
