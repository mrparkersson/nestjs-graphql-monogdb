import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssingStudentToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentsIds: string[];
}
