import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;

    try {
      await this.createUserService.execute({
        name,
        password,
      });

      return response.status(201).send();
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Erro inesperado",
      });
    }
  }
}
