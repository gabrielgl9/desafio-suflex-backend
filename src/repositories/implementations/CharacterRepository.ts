import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { Character } from "./../../entities/Character";
import { ICharacterRepository } from "./../ICharacterRepository";

export class CharacterRepository implements ICharacterRepository {
  constructor(private appDataSource = AppDataSource.getRepository(Character)) {}
  getFavoriteCharacters(user: User): Promise<Character[]> {
    throw new Error("Method not implemented.");
  }
  save(user: User, character: Character): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
