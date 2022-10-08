import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // @Column({ unique: true })
  @Column()
  email: string;

  @Column()
  age: number;
}
