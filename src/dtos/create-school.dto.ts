import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  count: number;
}
