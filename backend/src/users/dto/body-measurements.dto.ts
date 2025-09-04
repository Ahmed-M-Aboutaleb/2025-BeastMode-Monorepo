import { IsNumber, IsOptional } from 'class-validator';

export class BodyMeasurementsDto {
  @IsOptional()
  @IsNumber()
  weight?: number;
  @IsOptional()
  @IsNumber()
  height?: number;
  @IsOptional()
  @IsNumber()
  waist?: number;
  @IsOptional()
  @IsNumber()
  bodyFat?: number;
  @IsOptional()
  @IsNumber()
  neck?: number;
  @IsOptional()
  @IsNumber()
  shoulders?: number;
  @IsOptional()
  @IsNumber()
  chest?: number;
  @IsOptional()
  @IsNumber()
  leftBicep?: number;
  @IsOptional()
  @IsNumber()
  rightBicep?: number;
  @IsOptional()
  @IsNumber()
  leftForearm?: number;
  @IsOptional()
  @IsNumber()
  rightForearm?: number;
  @IsOptional()
  @IsNumber()
  hips?: number;
  @IsOptional()
  @IsNumber()
  leftThigh?: number;
  @IsOptional()
  @IsNumber()
  rightThigh?: number;
  @IsOptional()
  @IsNumber()
  leftCalf?: number;
  @IsOptional()
  @IsNumber()
  rightCalf?: number;
}
