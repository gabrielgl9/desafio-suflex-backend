import { IRegisterFavoriteCharacterRequestDTO } from "./../../useCases/RegisterFavoriteCharacter/RegisterFavoriteCharacterDTO";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { Character } from "./../../entities/Character";
import { ICharacterRepository } from "./../ICharacterRepository";

export class CharacterRepository implements ICharacterRepository {
  constructor(private appDataSource = AppDataSource.getRepository(Character)) {}

  async getFavoriteCharacters(user: User): Promise<Character[]> {
    return await this.appDataSource.findBy({
      user_id: user.id,
    });
  }

  async save(character: Character): Promise<Character> {
    return this.appDataSource.save(character);
  }
}
