
import { CreateTaskDto } from './create-task.dto.js';
export class UpdateTaskDto {
  id: string;
  data: CreateTaskDto;
}
