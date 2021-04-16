import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';

const routes: Routes = [
  {
    path: "teachers",
    children: [
      {
        path: "students",
        children: [
          {
            path: '',
            component: StudentListComponent
          },
          {
            path: 'add',
            component: AddStudentComponent,
          },
          {
            path: ':id',
            component: StudentDetailsComponent,
          },
          {
            path: ':id/edit',
            component: EditStudentComponent,
          }
        ]
      },
      {
        path: "courses",
        children: [
          {
            path: '',
            component: CourseListComponent
          },
          {
            path: 'add',
            component: AddCourseComponent,
          },
          {
            path: ':id/edit',
            component: EditCourseComponent,
          }
        ]
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
