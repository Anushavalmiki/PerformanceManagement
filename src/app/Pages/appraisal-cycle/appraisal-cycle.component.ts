import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';

@Component({
  selector: 'app-appraisal-cycle',
  templateUrl: './appraisal-cycle.component.html',
  styleUrls: ['./appraisal-cycle.component.css']
})
export class AppraisalCycleComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService ) { }

  appraisallist:any;
  count:any;
  search:any;
 
  ngOnInit(): void {
    this.GetAppraisalCycle();
  }


  public GetAppraisalCycle() {
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(
      data => {
        debugger
      this.appraisallist=data;
      this.count=this.appraisallist.length;
      })
  }

  delete(id:any){
    this.PerformanceManagementService.DeleteAppraisalCycle(id).subscribe(
      data=>{
        alert("Deleted Sucessfully");
        this.GetAppraisalCycle();
      }
    )
  }





}
