import { IRegisterFavoriteCharacterRequestDTO } from "./../RegisterFavoriteCharacter/RegisterFavoriteCharacterDTO";
import { Character } from "./../../entities/Character";
import { IUserRepository } from "./../../repositories/IUserRepository";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";
import { getFavoriteCharactersResource } from "../../Resources/FavoriteCharacters";

export class GetFavoriteCharactersService {
  constructor(
    private characterRepository: ICharacterRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(
    userId: number
  ): Promise<IRegisterFavoriteCharacterRequestDTO[]> {
    const user = await this.userRepository.findById(userId);
    const characters = await this.characterRepository.getFavoriteCharacters(
      user
    );
    return getFavoriteCharactersResource(characters);
  }
}
