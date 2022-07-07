import { NextFunction, Request, Response } from "express";

export function errorHandlingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "Not Found") return res.status(400).send(error.message);

  return res.sendStatus(500);
}
