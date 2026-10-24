import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';
import { IsEnum } from 'class-validator';


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(120)
    title: string;
    @IsString()
    @IsOptional()
    @MaxLength(1000)
    description?: string;

    @IsEnum(['pending', 'in-progress', 'completed'])
    @IsOptional()
    @IsString()
    status?: string;
}
