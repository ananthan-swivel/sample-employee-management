import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  first_name: string;

  @Column({ length: 10 })
  last_name: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ unique: true, length: 15 })
  number: string;

  @Column({ length: 10 })
  gender: string;

  @Column({
    length: 150,
    nullable: true,
    default: 'https://randomuser.me/api/portraits/men/92.jpg',
  })
  photo: string;
}
