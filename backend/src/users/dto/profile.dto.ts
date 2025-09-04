import {
  IsAlpha,
  IsBoolean,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Sex } from '../interfaces/IProfile';
import type IBodyMeasurements from '../interfaces/IBodyMeasurements';
import { BodyMeasurementsDto } from './body-measurements.dto';
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
  @IsDate()
  birthDate: Date;

  @IsOptional()
  @ValidateNested()
  @Type(() => BodyMeasurementsDto)
  bodyMeasurements?: IBodyMeasurements;
}
