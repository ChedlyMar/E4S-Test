import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {
  courseUrl = "http://localhost:3000/courses/"

  constructor(private http: HttpClient) { }

  getCourses(): Observable<[]> {
    return this.http.get<[]>(this.courseUrl);
  }

  getCourseById(id): Observable<Course> {
    return this.http.get<Course>(this.courseUrl + id)
  }

  addCourse(inputs) {
    return this.http.post(this.courseUrl, inputs)
  }

  updateCourse(id, inputs) {
    return this.http.patch(this.courseUrl + id, inputs)
  }

  deleteCourse(id) {
    return this.http.delete(this.courseUrl + id)
  }
}
