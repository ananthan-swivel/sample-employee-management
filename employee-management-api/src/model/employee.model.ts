import * as mongoose from 'mongoose';

export interface Employee extends mongoose.Document {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  number: string;
  photo: string;
}
