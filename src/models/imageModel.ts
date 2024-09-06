import fs from "fs";

export const getImagesFromDirectory = (
  directoryPath: string
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject("Ошибка при получении изображений");
      }

      const imagePaths = files.map((file) => `images/${file}`);
      resolve(imagePaths);
    });
  });
};
