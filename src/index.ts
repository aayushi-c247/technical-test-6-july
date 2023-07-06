/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import { usersRouter } from "./users/users.router";
import { memoize } from "./utils";

const app = express();

const PORT = 7000;

/**
 *  App Configuration
 */

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

console.log(memoize((a: number, b:number) => a + b)(3, 4), 'memoizer')

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
