import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { EmployeeExistsValidation } from '../rules/validation.rule';
import { GenderEnum } from '../enums';

export class EmployeeUpdateDto {
  @ApiProperty({
    minimum: 6,
    maximum: 10,
    description:
      'Should not be null and should only allow alphabets, min 6 character and max 10 characters',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(6)
  first_name: string;

  @ApiProperty({
    minimum: 6,
    maximum: 10,
    description:
      'Should not be null and should only allow alphabets, min 6 character and max 10 characters',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(6)
  last_name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @EmployeeExistsValidation(true)
  email: string;

  @ApiProperty({
    description: 'Gender in M , F and NM',
  })
  @Matches(
    `^${Object.values(GenderEnum)
      .filter((v) => typeof v !== 'number')
      .join('|')}$`,
    'i',
  )
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    minimum: 9,
    maximum: 10,
    description: 'LK phone number.',
  })
  @EmployeeExistsValidation(true)
  @IsNotEmpty()
  @Matches(
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i,
    { message: 'Invalid number' },
  )
  number: string;
}
