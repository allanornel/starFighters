import { Request, Response } from "express";
import { battleService, rankingService } from "../services/services.js";

export async function postBattle(req: Request, res: Response) {
  const { firstUser, secondUser }: { firstUser: string; secondUser: string } =
    req.body;
  if (!firstUser || !secondUser) return res.sendStatus(422);
  const success = await battleService(firstUser, secondUser);

  res.status(200).send(success);
}

export async function getRanking(req: Request, res: Response) {
  const success = await rankingService();
  res.send(success);
}
