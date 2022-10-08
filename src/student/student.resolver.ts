import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Mutation((returns) => StudentType)
  deleteStudent(@Args('id') id: string) {
    return this.studentService.deleteStudent(id);
  }

  @Mutation((returns) => StudentType)
  updateStudent(
    @Args('id') id: string,
    @Args('createStudentInput') updateStudentInput: CreateStudentInput,
  ) {
    return this.studentService.updateStudent(id, updateStudentInput);
  }
}
