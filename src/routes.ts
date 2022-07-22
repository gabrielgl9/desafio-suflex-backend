import { authUserController } from "./useCases/AuthUser";
import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import authMiddleware from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/user", (request, response) => {
  createUserController.handle(request, response);
});

routes.post("/login", (request, response) => {
  authUserController.handle(request, response);
});

routes.post("/favorite-character", authMiddleware, (request, response) => {
  authUserController.handle(request, response);
});

export default routes;
