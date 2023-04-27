import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students = [
    { name: "asmaa", email: "asmaa@gmail.com", age: "24" },
    { name: "mayar", email: "mayar@gmail.com", age: "25" },
    { name: "lala", email: "lala@gmail.com", age: "23" },
    { name: "7amo", email: "7amo@gmail.com", age: "22" },
]
}
