import type { Application } from "express";
import session from "express-session";
import ConnectPgStore from "connect-pg-simple";
import { SESSION } from "../config";
import pg from "../db";

const loader = (app: Application): void => {
  const PgStore = ConnectPgStore(session);
  const store = new PgStore({ pool: pg, tableName: "sessions" });

  app.use(
    session({
      secret: SESSION.secret,
      store,
      cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
      resave: false,
      saveUninitialized: false,
    })
  );
};

export default loader;
