import { Request, Response } from "express";
import { battleService } from "../services/services";

export async function postBattle(req: Request, res: Response) {
  const firstUser: string = req.body.firstUser;
  const secondUser: string = req.body.secondUser;
  if (!firstUser || !secondUser) return res.sendStatus(422);
  const success = await battleService(firstUser, secondUser);

  res.status(200).send(success);
}

export function getRanking(req: Request, res: Response) {}
