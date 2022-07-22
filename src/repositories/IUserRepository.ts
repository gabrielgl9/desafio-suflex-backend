import { User } from "../entities/User";

export interface IUserRepository {
  findByName(name: string): Promise<User>;
  save(user: User): Promise<void>;
}
