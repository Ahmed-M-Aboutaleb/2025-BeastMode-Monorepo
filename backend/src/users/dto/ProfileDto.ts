import {
  IsAlpha,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Sex } from '../interfaces/IProfile';
import type IBodyMeasurements from '../interfaces/IBodyMeasurements';
import { BodyMeasurementsDto } from './BodyMeasurementsDto';
import { Type } from 'class-transformer';
export class ProfileDto {
  @IsAlpha()
  firstName: string;
  @IsAlpha()
  lastName: string;
  @IsOptional()
  @IsString()
  picture?: string;
  @IsString()
  @IsOptional()
  bio?: string;
  @IsOptional()
  @IsString({ each: true })
  fitnessGoals?: string[];
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
  @IsEnum(Sex)
  sex: Sex;
  @IsDateString()
  birthDate: Date;

  @IsOptional()
  @ValidateNested()
  @Type(() => BodyMeasurementsDto)
  bodyMeasurements?: IBodyMeasurements;
}
