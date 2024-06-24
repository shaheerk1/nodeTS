import { AppDataSource } from './../data-source';
import { User } from './../entity/User';

const resolvers = {
  Query: {
    users: async () => {
      return AppDataSource.getRepository(User).find();
    }
  }
};

export default resolvers;
