import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProfileDto } from './profile.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile: ProfileDto;
}
