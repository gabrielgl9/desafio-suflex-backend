import { User } from "./../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import bcryptjs from "bcryptjs";

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByName(data.name);

    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }

    const user = new User();
    user.name = data.name;
    user.password = bcryptjs.hashSync(data.password, 10);

    await this.userRepository.save(user);
  }
}
