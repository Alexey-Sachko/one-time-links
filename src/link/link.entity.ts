import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Link {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;
}
