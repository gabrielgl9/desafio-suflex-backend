import { CharacterRepository } from "./../../repositories/implementations/CharacterRepository";
import { RegisterFavoriteCharacterController } from "./RegisterFavoriteCharacterController";
import { RegisterFavoriteCharacterService } from "./RegisterFavoriteCharacterService";

const characterRepository = new CharacterRepository();
const registerFavoriteCharacterService = new RegisterFavoriteCharacterService(
  characterRepository
);

const registerFavoriteCharacterController =
  new RegisterFavoriteCharacterController(registerFavoriteCharacterService);

export {
  registerFavoriteCharacterController,
  registerFavoriteCharacterService,
};
