import { ICharacterRepository } from "./../../repositories/ICharacterRepository";
import { IRegisterFavoriteCharacterRequestDTO } from "./RegisterFavoriteCharacterDTO";

export class RegisterFavoriteCharacterService {
  constructor(private characterRepository: ICharacterRepository) {}

  async execute(data: IRegisterFavoriteCharacterRequestDTO): Promise<void> {}
}
