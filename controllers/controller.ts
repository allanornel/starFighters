import { Request, Response } from "express";

export function postBattle(req: Request, res: Response){
    const secondUser: string = req.body.secondUser;
    const firstUser: string = req.body.firstUser;
    if(!firstUser || !secondUser) return res.sendStatus(422);

    
    
}

export function getRanking(req: Request, res: Response){

}