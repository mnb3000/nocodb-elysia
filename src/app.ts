import Elysia from "elysia";
import { apiRouter } from "./routes/api";

export const app = new Elysia({ aot: false, normalize: "typebox" })
  .onError(({ code, error }) => {
    console.log(code);
    return new Response(JSON.stringify({ error: error.toString() ?? code }), {
      status: 500,
    });
  })
  .use(apiRouter)
  .get("/", ({ status }) => status("I'm a teapot"));
