import axios from "axios";
import {
  insertOrUpdateFighter,
  getRanking,
} from "../repositories/repository.js";

export async function battleService(firstUser: string, secondUser: string) {
  const findFirstUser = await axios.get(
    `https://api.github.com/users/${firstUser}/repos`
  );
  const findSecondUser = await axios.get(
    `https://api.github.com/users/${secondUser}/repos`
  );
  if (findFirstUser.message || findSecondUser.message) {
    throw { type: "Not Found", message: "Usuários não foram encontrados" };
  }

  if (findFirstUser[0].stargazers_count > findSecondUser[0].stargazers_count) {
    // FIRST WINNER
    await insertOrUpdateFighter(firstUser, "win");
    await insertOrUpdateFighter(secondUser, "lose");
    return { winner: firstUser, loser: secondUser, draw: false };
  }
  if (findFirstUser[0].stargazers_count < findSecondUser[0].stargazers_count) {
    // SECOND WINNER
    await insertOrUpdateFighter(firstUser, "lose");
    await insertOrUpdateFighter(secondUser, "win");
    return { winner: secondUser, loser: firstUser, draw: false };
  } else {
    // DRAW
    await insertOrUpdateFighter(firstUser, "draw");
    await insertOrUpdateFighter(secondUser, "draw");
    return { winner: null, loser: null, draw: true };
  }
}

export async function rankingService() {
  return await getRanking();
}
