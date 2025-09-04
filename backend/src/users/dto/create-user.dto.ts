import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import type IProfile from '../interfaces/IProfile';
import { Type } from 'class-transformer';
import { ProfileDto } from './ProfileDto';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile: IProfile;
}
