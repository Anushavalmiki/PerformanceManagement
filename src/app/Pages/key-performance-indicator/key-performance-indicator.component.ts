import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';

@Component({
  selector: 'app-key-performance-indicator',
  templateUrl: './key-performance-indicator.component.html',
  styleUrls: ['./key-performance-indicator.component.css']
})
export class KeyPerformanceIndicatorComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService) { }



  indicatorlist:any;
  count:any;
  ngOnInit(): void {
    this.GetKPI();

  }

  public GetKPI(){
    this.PerformanceManagementService.GetKPI().subscribe(
      data=>{
        this.indicatorlist=data;
        this.count=this.indicatorlist.length;
        console.log("kpilist",this.indicatorlist);
      }
    )
  }

  delete(id:any){
    debugger
    this.PerformanceManagementService.DeleteKPI(id).subscribe(
      data=>{
        alert("Deleted Sucessfully");
        this.GetKPI();
      }
    )
  }








}
