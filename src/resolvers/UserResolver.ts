import { Resolver, Query } from "type-graphql";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users() {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
  }
}


// so currently this file has no use as the the resolver that we use is a functional resolver from another file
// so make it class based resolver and dump this