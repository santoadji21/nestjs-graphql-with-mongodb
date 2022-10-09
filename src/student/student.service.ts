import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: MongoRepository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName, email, age } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
      email,
      age,
    });

    return this.studentRepository.save(student);
  }
  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    const student_data = await this.studentRepository.find({
      where: { id: { $in: studentIds } },
    });
    return student_data;
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }
  async deleteStudent(id: string): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    return this.studentRepository.remove(student);
  }

  async updateStudent(id: string, updateStudentInput: CreateStudentInput) {
    const student = await this.studentRepository.findOne({ where: { id } });
    const { firstName, lastName, email, age } = updateStudentInput;
    student.firstName = firstName;
    student.lastName = lastName;
    student.email = email;
    student.age = age;
    return this.studentRepository.save(student);
  }
}
