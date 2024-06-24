import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number ;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  password!: number;
}
