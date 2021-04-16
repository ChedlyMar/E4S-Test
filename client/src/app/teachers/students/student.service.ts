import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
  studentUrl = "http://localhost:3000/students/"

  constructor(private http: HttpClient) { }

  getStudents(): Observable<[]> {
    return this.http.get<[]>(this.studentUrl);
  }

  getStudentById(id): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + id)
  }

  addStudent(inputs) {
    return this.http.post(this.studentUrl, inputs)
  }

  updateStudent(id, inputs) {
    return this.http.patch(this.studentUrl + id, inputs)
  }

  deleteStudent(id) {
    return this.http.delete(this.studentUrl + id)
  }
}
