import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
export class UserRepository implements IUserRepository {
  findByName(name: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  save(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
