import express from "express";
import path from "path";
import cors from "cors";
import imageRoutes from "./routes/imageRoutes";

const app = express();

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api", imageRoutes);

export default app;
