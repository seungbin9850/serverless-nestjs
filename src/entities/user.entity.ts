import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ name: 'user_id', length: 20, unique: true })
  userId: string;

  @Column({ length: 70 })
  password: string;
}
