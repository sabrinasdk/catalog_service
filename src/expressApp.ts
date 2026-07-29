import express from "express";
import catalogRouter from "./api/catalog.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "message" });
});

app.use("/catalog", catalogRouter);

export default app;
