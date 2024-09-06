import { Request, Response } from "express";
import path from "path";
import { getImagesFromDirectory } from "../models/imageModel";

export const getImgs = async (req: Request, res: Response) => {
  const imagesDirectory = path.join(__dirname, "../images");
  try {
    const images = await getImagesFromDirectory(imagesDirectory);
    res.json({ images });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
