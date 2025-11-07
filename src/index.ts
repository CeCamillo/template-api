import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

const app = new Elysia()
.use(
    cors({
      origin: "http://localhost:3000", // Only allow your frontend
      credentials: true, // We'll need this for cookies later
    })
  ) // Use it here
  .get("/", () => "Hello Elysia")
  .get('/health', () => {
    return {
      status: 'ok',
      message: "API is running!"
    }
  })
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
