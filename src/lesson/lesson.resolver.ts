import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AssingStudentToLessonInput } from './assign-student-to-lesson-input';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  getAllLesson(): Promise<Lesson[]> {
    return this.lessonService.getAllLesson();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((returns) => LessonType)
  assignStudentToLesson(
    @Args('assignStudentToLessonInput')
    assignStudentToLessonInput: AssingStudentToLessonInput,
  ) {
    const { lessonId, studentsIds } = assignStudentToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentsIds);
  }
}
