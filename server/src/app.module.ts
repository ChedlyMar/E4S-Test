import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://E4S:education@cluster0.ppgct.mongodb.net/school?retryWrites=true&w=majority"),
    CoursesModule,
    StudentsModule,
  ],
})
export class AppModule { }
