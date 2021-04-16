import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student: Student = {
    firstName: "",
    lastName: "",
    email: "",
    level: NaN
  };
  id: string;

  constructor(private router: Router,
    private studentService: StudentService) {
  }

  ngOnInit(): void { }

  saveStudent() {
    this.studentService.addStudent(this.student).subscribe(
      () => {
        this.router.navigate(['/teachers/students']);
      }
    )
  }
}
