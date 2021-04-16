import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filtredCourse: Course[] = [];

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(this.performFilter(value));

    this.filtredCourse = this.performFilter(value);
  }

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      data => {
        this.courses = data;
        this.filtredCourse = this.courses;

      }
    )
  }
  performFilter(filterBy: string): Course[] {
    filterBy = filterBy.toLocaleLowerCase();
    return [...this.courses.filter((course: Course) =>
      course.title.toLocaleLowerCase().includes(filterBy)),
    ]
  }
}

