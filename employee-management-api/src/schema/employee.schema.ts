// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

// @Entity()
// export class EmployeeEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 10 })
//   first_name: string;

//   @Column({ length: 10 })
//   last_name: string;

//   @Column({ unique: true, length: 150 })
//   email: string;

//   @Column({ unique: true, length: 15 })
//   number: string;

//   @Column({ length: 10 })
//   gender: string;

//   @Column({
//     length: 150,
//     nullable: true,
//     default: 'https://randomuser.me/api/portraits/men/92.jpg',
//   })
//   photo: string;
// }

export const EmployeeSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  gender: String,
  photo: String,
});
