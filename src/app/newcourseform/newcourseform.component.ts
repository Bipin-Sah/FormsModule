import { Component } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})

export class NewcourseformComponent {
 form = new FormGroup({
  topics: new FormArray([])
});

//ngOnInit() {}

addTopic (topic : HTMLInputElement) {
  this.topics.push(new FormControl(topic.value));
  topic.value = '';
}

get topics() {
  return this.form.get('topics') as FormArray;
}

removeTopic(topic: FormControl){
  let index =  this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}

}

/* Example using FormBuilder */
/*
export class NewcourseformComponent {
  form ;
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact : new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  constructor(fb: FormBuilder) {
    this.form.fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([]);
    });
  }
} */
