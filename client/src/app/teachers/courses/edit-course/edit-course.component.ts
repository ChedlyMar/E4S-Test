import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  course: Course = {
    title: "",
    coefficient: NaN
  };
  id: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.getCourse(this.id);
      }
    )
  }

  getCourse(id) {
    this.courseService.getCourseById(id).subscribe(
      course => {
        this.course = course;
      }
    );
  }

  saveCourse() {
    this.courseService.updateCourse(this.course._id, this.course).subscribe(
      () => {
        this.router.navigate(['/teachers/courses']);
      },
      error => {
        console.log('error', error)
      }
    )
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.course._id).subscribe(
      () => {
        this.router.navigate(['/teachers/courses']);
      },
      error => {
        console.log('error', error)
      }
    );
  }

}
