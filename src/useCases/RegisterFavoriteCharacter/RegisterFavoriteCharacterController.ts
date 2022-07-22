import { Request, Response } from "express";
import { RegisterFavoriteCharacterService } from "./RegisterFavoriteCharacterService";

export class RegisterFavoriteCharacterController {
  constructor(
    private registerFavoriteCharacterService: RegisterFavoriteCharacterService
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;

    try {
      const favoriteCharacter =
        await this.registerFavoriteCharacterService.execute({
          name,
          password,
        });

      return response.status(201).json({ character: favoriteCharacter });
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Erro inesperado",
      });
    }
  }
}
