import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  async getAllStudent(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => StudentType)
  getStudent(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
}
