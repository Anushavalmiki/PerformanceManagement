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

    kraName:any;
  performanceIndicator:any;
  description:any;
  kpilist:any;
  id:any;
  indicatorlist:any;
  kRAName:any


  ngOnInit(): void {
    this.GetKPI();

    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetKPI();
      }
    })
  }


  GetKPI(){
    this.PerformanceManagementService.GetKPI().subscribe(
      data=>{
        this.kpilist=data;
      	this.indicatorlist=this.indicatorlist.filter((x: { id: any; })=>x.id==Number(this.id));
        this.kraName=this.indicatorlist[0].kRAName;
        this.performanceIndicator=this.indicatorlist[0].performanceIndicator;
        this.description=this.indicatorlist[0].description;
      }
    )
  }






  save(){
    var json = {  
      "KRAName":this.kraName,
      "PerformanceIndicator":this.performanceIndicator,
      "Description":this.description,
      
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
      "KRAName":this.kraName,
      "PerformanceIndicator":this.performanceIndicator,
      "Description":this.description,       
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
