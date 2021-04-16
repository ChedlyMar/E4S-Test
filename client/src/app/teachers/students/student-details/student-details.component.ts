import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student: Student;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: StudentService) { }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getStudent(id);
    }
  }

  getStudent(id) {
    this.productService.getStudentById(id).subscribe({
      next: student => this.student = student,
    });
  }

  onBack() {
    this.router.navigate(['/teachers/students']);
  }
}
