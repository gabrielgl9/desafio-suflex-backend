import { DeleteResult } from "typeorm";
import { Character } from "../entities/Character";
import { User } from "../entities/User";

export interface ICharacterRepository {
  getFavoriteCharacters(user: User): Promise<Character[]>;
  save(character: Character): Promise<Character | DeleteResult>;
}
