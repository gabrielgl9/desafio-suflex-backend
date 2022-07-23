import { User } from "../../entities/User";
import { IAuthUserRequestDTO } from "./AuthUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import bcryptjs from "bcryptjs";

export class AuthUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IAuthUserRequestDTO): Promise<string> {
    if (!data.name || !data.password) {
      throw new Error("Informações incorretas");
    }

    const userExists = await this.userRepository.findByName(data.name);

    if (
      !userExists ||
      !bcryptjs.compareSync(data.password, userExists.password)
    ) {
      throw new Error("Usuário não existe");
    }

    return this.userRepository.authUser(userExists);
  }
}
