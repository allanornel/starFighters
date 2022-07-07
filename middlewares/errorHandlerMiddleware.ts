import { NextFunction, Request, Response } from "express";

export function errorHandlingMiddleware(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "Not Found") return res.status(400).send(error.message);

  if (error.response?.data.message === "Not Found") return res.sendStatus(404);

  console.log(error);
  return res.sendStatus(500);
}
