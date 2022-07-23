import { IRegisterFavoriteCharacterRequestDTO } from "./../../useCases/RegisterFavoriteCharacter/RegisterFavoriteCharacterDTO";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { Character } from "./../../entities/Character";
import { ICharacterRepository } from "./../ICharacterRepository";
import { DeleteResult } from "typeorm";

export class CharacterRepository implements ICharacterRepository {
  constructor(private appDataSource = AppDataSource.getRepository(Character)) {}

  async getFavoriteCharacters(user: User): Promise<Character[]> {
    return this.appDataSource.findBy({
      user_id: user.id,
    });
  }

  async findCharacterById(id: number): Promise<Character> {
    return this.appDataSource.findOneBy({
      id,
    });
  }

  async save(character: Character): Promise<Character | DeleteResult> {
    if (await this.findCharacterById(character.id)) {
      return this.appDataSource.delete(character.id);
    }
    return this.appDataSource.save(character);
  }
}
