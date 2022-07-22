import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Character {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  species: string;

  @Column()
  type: string;

  @Column()
  gender: string;

  @Column()
  image: string;

  @Column()
  url: string;

  @Column()
  origin: string;

  @Column()
  location: string;

  @Column()
  episode: Text;

  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;
}

// - id
// 		- name
// 		- status
// 		- species
// 		- type
// 		- gender
// 		- origin: { name, url }
// 		- location: { name, url }
// 		- image
// 		- episode": []
// 		- url
// 		- created
