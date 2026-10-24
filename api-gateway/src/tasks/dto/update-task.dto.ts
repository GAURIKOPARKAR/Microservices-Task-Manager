
import {
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
  } from 'class-validator';
  
  export class UpdateTaskDto {
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
  