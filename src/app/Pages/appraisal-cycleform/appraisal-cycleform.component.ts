import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appraisal-cycleform',
  templateUrl: './appraisal-cycleform.component.html',
  styleUrls: ['./appraisal-cycleform.component.css']
})
export class AppraisalCycleformComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService,private ActivatedRoute:ActivatedRoute) { }

  appraisal:any;
  startdate:any;
  enddate:any;
  frequencyid:any;
  id:any;
  appraisallist:any;



  ngOnInit(): void {
    this.GetFrequency();
    

    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetAppraisalCycle();
      }
    })
  }




  GetAppraisalCycle() {
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(
    data => {
    this.appraisallist = data;
		this.appraisallist=this.appraisallist.filter((x: { id: any; })=>x.id==Number(this.id));
		this.appraisal=this.appraisallist[0].appraisalCycleName;
		this.frequencyid=this.appraisallist[0].frequencyType;
    this.startdate=this.appraisallist[0].cycleStartDate;
    this.enddate=this.appraisallist[0].cycleEndDate
      }
    ) 
  }

  
  Save(){
   var json = {  
    "AppraisalCycleName":this.appraisal,
    "FrequencyType":this.frequencyid,
    "CycleStartDate":this.startdate,
    "CycleEndDate":this.enddate
    };
    this.PerformanceManagementService.InsertAppraisalCycle(json).subscribe(
      data => {
        alert("Successfully Submitted...!");
        location.href="#/AppraisalCycle"
      })
  }


  Update(){
    debugger
     var json = {
      "ID": this.id,
      "AppraisalCycleName":this.appraisal,
      "FrequencyType":this.frequencyid,
      "CycleStartDate":this.startdate,
      "CycleEndDate":this.enddate
        
      };
    
      this.PerformanceManagementService.UpdateAppraisalCycle(json).subscribe(
        data => {
        debugger
        let appraisallist = data;
        alert("Updated Sucessfully");
        location.href="#/AppraisalCycle";
      })
  }

  Cancel(){
    location.href ="#/AppraisalCycle";
  }




  frequency:any;


   public GetFrequency(){
    this.PerformanceManagementService.GetFrequency().subscribe(
      data => {
        debugger
        this.frequency = data;
      })
   }

  getfrequency(even:any){
    this.frequencyid=even.target.value;
  
  }

   








}
