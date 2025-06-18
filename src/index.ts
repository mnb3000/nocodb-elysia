import { Context, Elysia } from "elysia";
import { apiRouter } from "./api";
import { Env } from "bun";

const app = new Elysia()
  .use(apiRouter)
  .get("/", ({ status }) => status("I'm a teapot"));

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetch(request: Request, _env: Env, _ctx: Context): Promise<Response> {
    return await app.fetch(request);
  },
};

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
