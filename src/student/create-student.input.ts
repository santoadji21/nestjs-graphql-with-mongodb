import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsString()
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @IsEmail()
  @Field()
  email: string;

  @IsNumber()
  @Field()
  age: number;
}
