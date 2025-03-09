import express from "express";
import { Bootstrap } from "bootstrap";
import { ExpressConfig } from "@Configs/ExpressConfig";

const { EXPRESS_PORT } = ExpressConfig;

const app = express();

const bootstrap = new Bootstrap(app);

bootstrap.addRouters();

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is listening at http://localhost:${EXPRESS_PORT}`);
});