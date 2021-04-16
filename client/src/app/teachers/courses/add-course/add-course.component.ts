import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  course: Course = {
    title: "",
    coefficient: NaN
  };
  id: string;

  constructor(private router: Router,
    private courseService: CourseService) {
  }

  ngOnInit(): void { }

  saveCourse() {
    this.courseService.addCourse(this.course).subscribe(
      () => {
        this.router.navigate(['/teachers/courses']);
      },
      error => {
        console.log('error', error)
      }
    )
  }
}
