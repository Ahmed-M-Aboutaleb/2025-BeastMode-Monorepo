import { IsMongoId, IsNotEmpty } from 'class-validator';

export class IDParamDto {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
