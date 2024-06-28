// src/entity/User.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import bcrypt from 'bcryptjs';

@Entity()
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  name!: string;

  // @Field() // makes password field available in GraphQL schema
  @Column()
  password!: string; // Ensure 'password' type matches GraphQL schema

  // Compare hashed password with plain text password
  async comparePassword(plainPassword: string) {
    return await bcrypt.compare(plainPassword, this.password);
  }
}

