import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const routes = Router();

routes.post("/user", (request, response) => {
  createUserController.handle(request, response);
});

export default routes;
