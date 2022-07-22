import { Request, Response } from "express";
import { GetFavoriteCharactersService } from "./GetFavoriteCharactersService";

export class GetFavoriteCharactersController {
  constructor(
    private getFavoriteCharactersService: GetFavoriteCharactersService
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    try {
      const favoriteCharacters =
        await this.getFavoriteCharactersService.execute(user_id);

      return response.status(201).json({ favoriteCharacters });
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Erro inesperado",
      });
    }
  }
}
