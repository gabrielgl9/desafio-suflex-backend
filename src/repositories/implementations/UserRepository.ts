import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
export class UserRepository implements IUserRepository {
  constructor(private appDataSource = AppDataSource.getRepository(User)) {}

  findByName(name: string): Promise<User> {
    return this.appDataSource.findOneBy({
      name,
    });
  }

  async save(user: User): Promise<void> {
    await this.appDataSource.save(user);
  }
}
