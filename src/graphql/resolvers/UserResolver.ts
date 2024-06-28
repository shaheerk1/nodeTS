import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";
import bcrypt from 'bcryptjs';
import { RegisterUserInput } from "../../entity/RegisterUserInput";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';


@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
  }

  @Mutation(() => User)
  async registerUser(
    @Arg('input', () => RegisterUserInput) input: RegisterUserInput
  ): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(input.password, 10);

    const user = userRepository.create({
      ...input,
      password: hashedPassword,
    });

    return await userRepository.save(user);
  }

  @Mutation(() => String)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<string> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatches = await user.comparePassword(password);

    if (!passwordMatches) {
      throw new Error("Incorrect password");
    }

    // Generate JWT token (replace with your own secret and options)
    const token = jwt.sign({ userId: user.id }, jwtSecret, {
      expiresIn: "1h",
    });

    return token;
  }
}