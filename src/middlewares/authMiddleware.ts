import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new Error();
    }

    const token = authorization.replace("Bearer", "").trim();

    const data = jwt.verify(token, process.env.SECRET);

    const { id } = data as TokenPayload;

    request.user_id = id;

    return next();
  } catch {
    response.sendStatus(400);
  }
}
