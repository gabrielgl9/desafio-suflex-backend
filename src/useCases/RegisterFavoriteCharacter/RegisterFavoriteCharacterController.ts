import { Request, Response } from "express";
import { RegisterFavoriteCharacterService } from "./RegisterFavoriteCharacterService";

export class RegisterFavoriteCharacterController {
  constructor(
    private registerFavoriteCharacterService: RegisterFavoriteCharacterService
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
    } = request.body;

    try {
      const favoriteCharacter =
        await this.registerFavoriteCharacterService.execute({
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          location,
          image,
          episode,
          url,
          user_id: request.user_id,
        });

      return response.status(201).json({ character: favoriteCharacter });
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Erro inesperado",
      });
    }
  }
}
