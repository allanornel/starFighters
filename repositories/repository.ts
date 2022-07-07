import db from "../db.js";

export async function insertOrUpdateFighter(name: string, result: string) {
  if (result === "win")
    await db.query(`INSERT INTO fighters(username, wins, losses, draws) VALUES ($1, 1, 0, 0)
    ON CONFLICT (username) DO UPDATE SET wins = fighters.wins + 1`),
      [name];
  if (result === "lose")
    await db.query(
      `INSERT INTO fighters(username, wins, losses, draws) VALUES ($1, 0, 1, 0)
ON CONFLICT (username) DO UPDATE SET losses = fighters.losses + 1`,
      [name]
    );
  if (result === "draw")
    await db.query(
      `INSERT INTO fighters(username, wins, losses, draws) VALUES ($1, 0, 0, 1)
ON CONFLICT (username) DO UPDATE SET losses = fighters.draws + 1`,
      [name]
    );
}

export async function getRanking() {
  const promise = await db.query(
    "SELECT username, wins, losses, draws from fighters ORDER BY wins DESC, draws DESC;"
  );
  return { fighters: promise.rows };
}
