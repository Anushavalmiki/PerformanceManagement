import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from '../performance-management.service';

@Component({
  selector: 'app-hrdashboard',
  templateUrl: './hrdashboard.component.html',
  styleUrls: ['./hrdashboard.component.css']
})
export class HRDashboardComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService) { }

  countList:any;
  StaffID:any;



  ngOnInit(): void {

    this.GetAllCounts();
    this.StaffID=sessionStorage.getItem('EmaployedID');

  }

 public GetAllCounts(){
   debugger
   if(this.StaffID==undefined)
   {
    this.PerformanceManagementService.GetAllCounts(1,1).subscribe(
      data=>{
        this.countList=data[0];
      }
    )
   }
   else{
    this.PerformanceManagementService.GetAllCounts(2,this.StaffID).subscribe(
      data=>{
        this.countList=data[0];
      }
    )
   }

   
 }






}
