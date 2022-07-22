import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
