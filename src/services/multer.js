import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "./cloudinary.js";

export const HME = (err, req, res, next) => {
  if (err) {
    return res.status(400).json({ message: "multer error", err });
  } else {
    next();
  }
};
function uploadFile() {
  const storage = multer.diskStorage({});

  function fileFilter(req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif" ||
      file.mimetype == "image/png"
    ) {
      cb(null, true);
    } else {
      cb("invalied formate", false);
    }
  }

  const upload = multer({ fileFilter, storage });
  return upload;
}

export default uploadFile;
