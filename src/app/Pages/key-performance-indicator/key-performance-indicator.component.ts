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
  search:any;
  kratypelist:any;
  kraid:any;
  dummindicatorlist:any;
  kraName:any;


  ngOnInit(): void {
    this.GetKPI();
    this.GetKeyResultArea();
    this.kraid=0;

  }

  public GetKPI(){
    debugger
    this.PerformanceManagementService.GetKPI().subscribe(
      data=>{
        this.indicatorlist=data;
        this.dummindicatorlist=data;
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
    debugger
    if(even.target.value !=0){
      this.indicatorlist=this.dummindicatorlist.filter((x:{ kraName:any ;}) => x.kraName ==this.kraid);
      this.count=this.indicatorlist.length;
    }
    else{
      this.GetKPI();
    }
  }






}
