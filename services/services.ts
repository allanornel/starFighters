import axios from "axios";
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
    return { winner: firstUser, loser: secondUser, draw: false };
  }
  if (findFirstUser[0].stargazers_count < findSecondUser[0].stargazers_count) {
    // SECOND WINNER
    return { winner: secondUser, loser: firstUser, draw: false };
  } else {
    // DRAW
    return { winner: null, loser: null, draw: true };
  }
}
