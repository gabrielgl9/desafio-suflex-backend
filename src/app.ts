import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import "dotenv/config";
import "./data-source";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export { app };
