
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, trim: true, maxlength: 120 })
  title: string;

  @Prop({ trim: true, maxlength: 1000 })
  description?: string;

  @Prop({
    required: true,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
