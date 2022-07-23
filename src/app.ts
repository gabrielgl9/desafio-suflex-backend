import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import "./data-source";
import routes from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

export { app };
