import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  const bigsecret="12345678"
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, bigsecret, (err, user) => {
    if (err) {
      console.log("there")
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
