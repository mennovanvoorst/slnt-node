import express, { type Application } from "express";
import { createServer, type Server } from "http";
import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import routes from "@/routes";

const expressLoader = (app: Application): Server => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use("/api", routes());

  app.use(express.static("public"));

  app.get("*", (req, res) => {
    res.status(404);
  });

  return createServer(app);
};

export default expressLoader;
