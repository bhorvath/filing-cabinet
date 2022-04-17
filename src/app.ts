import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { RegisterRoutes } from "./generated/routes";

export const app = express();

app.use(cors({ origin: "*" }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);
