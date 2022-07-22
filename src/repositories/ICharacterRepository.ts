import { Character } from "../entities/Character";
import { User } from "../entities/User";

export interface ICharacterRepository {
  getFavoriteCharacters(user: User): Promise<Character[]>;
  save(user: User, character: Character): Promise<void>;
}
