import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Origin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
}
