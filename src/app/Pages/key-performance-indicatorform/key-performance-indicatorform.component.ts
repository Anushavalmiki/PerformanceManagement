import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-key-performance-indicatorform',
  templateUrl: './key-performance-indicatorform.component.html',
  styleUrls: ['./key-performance-indicatorform.component.css']
})
export class KeyPerformanceIndicatorformComponent implements OnInit {




  constructor(private PerformanceManagementService:PerformanceManagementService,
    private ActivatedRoute:ActivatedRoute  ) { }


  performanceIndicator:any;
  description:any;
  kpilist:any;
  id:any;
  indicatorlist:any;
  kraid:any;
  kratypelist:any;
  kpiName:any;
  indicatorid:any;
  performancelist:any;
  rating:any;
  performanceIndicatorId:any;


  ngOnInit(): void {
    this.GetKPI();
    this.GetKeyResultArea();
    this.GetPerformanceIndicatorMaster();
    

    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetKPI();
      }
    })
    this.kraid=0;
    this.performanceIndicatorId=0;
  }



  
  GetKPI(){
    this.PerformanceManagementService.GetKPI().subscribe(
      data=>{
        debugger
        this.kpilist=data;
      	this.kpilist=this.kpilist.filter((x: { id: any; })=>x.id==Number(this.id));
        this.kraid=this.kpilist[0].kraID;
        // this.performanceIndicator=this.kpilist[0].performanceIndicator;
        this.description=this.kpilist[0].description;
        this.kpiName=this.kpilist[0].kpiName;
        this.indicatorid=this.kpilist[0].performanceIndicatorId;
      }
    )
  }



  public GetKeyResultArea(){
    this.PerformanceManagementService.GetKeyResultArea().subscribe(
      data=>{
        this.kratypelist=data;
        console.log("kratype",this.kratypelist);
      }
    )
  }

  getkraid(even:any){
    debugger
    this.kraid=even.target.value;

  }


  
  getindicatorid(even:any){
    this.indicatorid=even.target.value;
  }

  
  public GetPerformanceIndicatorMaster(){
    this.PerformanceManagementService.GetPerformanceIndicatorMaster().subscribe(
      data=>{
        this.performancelist=data;
        console.log("performancetype",this.performancelist);
      }
    )
  }





  save(){
    var json = {  
      "KraID":this.kraid,
      // "PerformanceIndicator":this.performanceIndicator,
      "Description":this.description,
      "KpiName":this.kpiName,
     "PerformanceIndicatorId":this.indicatorid
      
      };
      this.PerformanceManagementService.InsertKPI(json).subscribe(
        data => {
          alert("Successfully Submitted...!");
          location.href="#/KeyPerformanceIndicator"
        })
  }

  Update(){
    debugger
     var json = {
      "ID": this.id,
      "KraID":this.kraid,
      // "PerformanceIndicator":this.performanceIndicator,
      "Description":this.description,     
      "KpiName":this.kpiName,
      "PerformanceIndicatorId":this.indicatorid

      };
    
      this.PerformanceManagementService.UpdateKPI(json).subscribe(
        data => {
        debugger
        let indicatorlist = data;
        alert("Updated Sucessfully");
        location.href="#/KeyPerformanceIndicator";
      })
  }

 cancel(){
   location.href="/KeyPerformanceIndicator";
 }




}
