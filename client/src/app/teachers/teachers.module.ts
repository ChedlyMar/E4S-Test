import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './students/student-list/student-list.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { TeachersRoutingModule } from './teachers-routing.module';




@NgModule({
  declarations: [
    StudentListComponent,
    EditStudentComponent,
    StudentDetailsComponent,
    CourseListComponent,
    EditCourseComponent,
    AddCourseComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
