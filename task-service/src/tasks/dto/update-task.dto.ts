
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

class UpdateTaskDataDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsIn(['pending', 'in-progress', 'completed'])
  status?: string;
}

export class UpdateTaskDto {
  @IsMongoId()
  id!: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => UpdateTaskDataDto)
  data!: UpdateTaskDataDto;
}
