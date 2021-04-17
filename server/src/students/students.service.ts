import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDto } from './dto/student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(@InjectModel("Student") private readonly studentModel: Model<Student>) { }

  create(StudentDto: StudentDto) {
    const newStudent = new this.studentModel(StudentDto)
    return newStudent.save();
  }

  findAll() {
    return this.studentModel.find();
  }

  async findOne(id: string) {
    const student = await this.studentModel.findById(id);
    if (!student) {
      throw new NotFoundException();
    }
    return student;
  }

  async update(id: string, StudentDto: StudentDto) {
    await this.studentModel.findByIdAndUpdate(id, StudentDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const deletedStudent = await this.studentModel.deleteOne({ _id: id })
    if (deletedStudent.deletedCount == 0) {
      throw new NotFoundException();
    }
    return deletedStudent;
  }
}
