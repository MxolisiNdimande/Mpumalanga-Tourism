// server/middleware/upload.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = (folder) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = `server/uploads/${folder}`;
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}${ext}`);
    }
  });

export const uploadDestinationImage = multer({
  storage: storage('destinations'),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Only images allowed'));
    }
    cb(null, true);
  }
});
