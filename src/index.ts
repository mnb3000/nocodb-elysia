import { Elysia } from "elysia";
import { apiRouter } from "./api";

const app = new Elysia()
  .use(apiRouter)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
