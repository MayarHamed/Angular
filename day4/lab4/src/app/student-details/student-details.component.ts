import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  students = { name: "asmaa", email: "asmaa@gmail.com", age: "24",phone:"01012458693" }
}
