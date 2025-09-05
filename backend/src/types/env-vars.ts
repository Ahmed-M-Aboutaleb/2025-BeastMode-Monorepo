import { IsString, Matches, MinLength } from 'class-validator';

export class EnvVars {
  @IsString()
  @MinLength(15)
  JWT_SECRET!: string;

  @IsString()
  @Matches(/^mongodb(\+srv)?:\/\//)
  MONGODB_URI!: string;
}
