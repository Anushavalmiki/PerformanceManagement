import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';

@Component({
  selector: 'app-key-result-area',
  templateUrl: './key-result-area.component.html',
  styleUrls: ['./key-result-area.component.css']
})
export class KeyResultAreaComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService ) { }

  keyresultlist:any;
  count:any;
  search:any;
  ngOnInit(): void {
    this.GetKeyResultArea();

  }
 
  public GetKeyResultArea() {
    debugger
    this.PerformanceManagementService.GetKeyResultArea().subscribe(
      data => {
      this.keyresultlist=data;
      this.count=this.keyresultlist.length;
      console.log("result",this.keyresultlist);
      })
  } 


  delete(id:any){
    debugger
    this.PerformanceManagementService.DeleteKeyResultArea(id).subscribe(
      data=>{
        alert("Deleted Sucessfully");
        this.GetKeyResultArea();
      }
    )
  }
   









}
