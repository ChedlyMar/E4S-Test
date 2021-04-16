import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  student: Student;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getStudent(id);
    }
  }

  getStudent(id) {
    this.studentService.getStudentById(id).subscribe(
      student => {
        this.student = student;
      }
    );
  }

  saveStudent() {
    this.studentService.updateStudent(this.student._id, this.student).subscribe(
      () => this.router.navigate(['/teachers/students'])
    )
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.student._id).subscribe(
      () => this.router.navigate(['/teachers/students'])
    );

  }
}
