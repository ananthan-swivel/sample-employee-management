import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import {
  ValidationException,
  ValidationFilter,
} from './shared/validation/validation.filter';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Form Validation
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const errMsg = {};
        errors.forEach((err) => {
          errMsg[err.property] = [...Object.values(err.constraints)];
        });
        return new ValidationException(errMsg);
      },
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Employee Management System ')
    .setDescription('Employee Management System API description')
    .setVersion('0.1')
    .build();

  // Swagger documentation only for dev environment
  const document = SwaggerModule.createDocument(app, config);
  if (process.env.ENVIRONMENT === 'dev') {
    SwaggerModule.setup('api', app, document);
  }

  // Cors Origin
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
