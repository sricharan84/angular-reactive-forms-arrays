import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Student, RecordTypeEnum } from './student';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  college: FormGroup;

  constructor(private readonly fb: FormBuilder) {}
  ngOnInit() {
    this.college = this.fb.group({
      students: new FormArray([
        new Student({
          sName: new FormControl('zxzx'),
          sAge: new FormControl(434),
          sBranch: new FormControl('gdfgdfg'),
        }),
      ]),
    });
  }

  get students(): FormArray {
    return this.college.get('students') as FormArray;
  }

  add() {
    let newStudent = new Student(
      {
        sName: new FormControl('ross'),
        sAge: new FormControl(24),
        sBranch: new FormControl('pathleontlgy'),
      },
      RecordTypeEnum.NEW
    );
    // let studentFG = new Student('changler', 23, 'office');
    this.students.push(newStudent);
    console.log(this.students);
  }

  removeStudent(e: Student) {
    e.markRemoved();
    console.log(e);
  }
}
