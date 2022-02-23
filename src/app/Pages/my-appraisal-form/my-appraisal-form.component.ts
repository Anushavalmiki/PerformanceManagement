import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-appraisal-form',
  templateUrl: './my-appraisal-form.component.html',
  styleUrls: ['./my-appraisal-form.component.css']
})
export class MyAppraisalFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    debugger
    this.files.push(...event.addedFiles);
   
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }





}
