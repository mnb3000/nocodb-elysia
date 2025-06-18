import { Context } from "elysia";
import { Env } from "bun";
import { app } from "./app";

export default {
  async fetch(
    request: Request,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    env: Env,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ctx: Context,
  ): Promise<Response> {
    return await app.fetch(request);
  },
};

console.log(`🦊 Elysia is running`);
