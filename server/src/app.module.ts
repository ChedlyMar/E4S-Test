import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesModule } from './courses/courses.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://E4S:education@cluster0.ppgct.mongodb.net/school?retryWrites=true&w=majority"),
    CoursesModule
  ],
})
export class AppModule { }
