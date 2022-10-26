import { Module } from '@nestjs/common';
import { EmployeesModule } from './modules/employees.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jossbew.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    ),
    EmployeesModule,
  ],
})
export class AppModule {}
