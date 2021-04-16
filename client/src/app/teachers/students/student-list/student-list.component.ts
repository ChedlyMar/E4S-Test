import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  students: Student[] = [];
  filtredStudent: Student[] = []
  pageTitle = "students list"

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtredStudent = this.performFilter(value);
  }

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
        this.filtredStudent = this.students;
      }
    )
  }

  performFilter(filterBy: string): Student[] {
    filterBy = filterBy.toLocaleLowerCase();
    return [...this.students.filter((student: Student) =>
      student.firstName.toLocaleLowerCase().includes(filterBy)),
    ]
  }
}

