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
import {HttpClient} from '@angular/common/http';
import { map, flatMap, take} from 'rxjs/operators'
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  college: FormGroup;

  constructor(private readonly fb: FormBuilder, http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users').pipe(
      flatMap((i:any) => i),
      take(5),
      map((res:any) => ({
        name: res.name,
        age: res.id,
        branch: res.company.name
      })),
      toArray()
    ).subscribe(data => {
      console.log(data);
      this.init(data);

    })
  }
  ngOnInit() {
    this.college = this.fb.group({
      students: new FormArray([]),
    });
  }

  init(data: any[]){
    data.forEach(item => {
      this.students.push(new Student( {
        sName: new FormControl(item.name),
        sAge: new FormControl(item.age),
        sBranch: new FormControl(item.branch),
      }))
    })
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
  }
}
