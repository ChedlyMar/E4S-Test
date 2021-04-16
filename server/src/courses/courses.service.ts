import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseDto } from './dto/course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectModel("Course") private readonly CourseModel: Model<Course>) { }

  create(courseDto: CourseDto) {
    const newCourse = new this.CourseModel(courseDto);
    return newCourse.save();
  }

  findAll() {
    return this.CourseModel.find();
  }

  async findOne(id) {
    const foundCource = await this.CourseModel.findById(id)
    if (!foundCource) {
      throw new NotFoundException();
    }
    return foundCource;
  }

  async update(id, courseDto: CourseDto) {
    const updatedCource = await this.CourseModel.findOneAndUpdate({ _id: id }, courseDto, { new: true })
    return updatedCource;
  }

  async remove(id) {
    const deletedCource = await this.CourseModel.deleteOne({ _id: id })
    if (deletedCource.deletedCount == 0) {
      throw new NotFoundException();
    }
    return deletedCource;

  }
}
