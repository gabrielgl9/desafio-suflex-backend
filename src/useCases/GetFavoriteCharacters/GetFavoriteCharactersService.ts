import { Character } from "./../../entities/Character";
import { IUserRepository } from "./../../repositories/IUserRepository";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";

export class GetFavoriteCharactersService {
  constructor(
    private characterRepository: ICharacterRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(userId: number): Promise<Character[]> {
    const user = await this.userRepository.findById(userId);
    return this.characterRepository.getFavoriteCharacters(user);
  }
}
