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
  const { authorization } = request.headers;

  if (!authorization) {
    response.sendStatus(400);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.SECRET);

    const { id } = data as TokenPayload;

    request.user_id = id;
  } catch {
    response.sendStatus(400);
  }
}
