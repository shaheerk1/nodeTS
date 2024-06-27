import { Resolver, Query } from "type-graphql";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
  }
}