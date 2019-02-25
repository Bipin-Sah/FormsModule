import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseMethods = [
    {id:1, name: 'Angular'},
    {id:2, name: 'Java'}
  ]
  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(y) {
    console.log(y);
  }
}
