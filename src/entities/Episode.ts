import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;
}
