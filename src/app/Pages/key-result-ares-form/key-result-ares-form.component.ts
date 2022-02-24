import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-key-result-ares-form',
  templateUrl: './key-result-ares-form.component.html',
  styleUrls: ['./key-result-ares-form.component.css']
})
export class KeyResultAresFormComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService,
    private ActivatedRoute:ActivatedRoute) { }

  kraName:any;
  description:any;
  kratypelist:any;
  kratypeid:any;
  id:any;
  keyresultlist:any;
  role:any;
  roleTypeid:any;
  roleTypeList:any;
  

  ngOnInit(): void {

    this.GetKraMaster();
    this.GetRoleType();
  

    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetKeyResultArea();
        this.kratypeid=0;
      }
    })

  }

  
  
  GetKeyResultArea() {
    this.PerformanceManagementService.GetKeyResultArea().subscribe(
    data => {
    debugger
    this.keyresultlist = data;
		this.keyresultlist=this.keyresultlist.filter((x: { id: any; })=>x.id==Number(this.id));
		this.kraName=this.keyresultlist[0].kraName;
		this.kratypeid=this.keyresultlist[0].kratypeid;
    // this.role=this.keyresultlist[0].role;
    this.description=this.keyresultlist[0].description
      }
    ) 
  }

  
  public GetKraMaster(){
    this.PerformanceManagementService.GetKraMaster().subscribe(
      data=>{
        this.kratypelist=data;
        console.log("kratype",this.kratypelist);
        this.kratypeid=0;
      }
    )
   
  }
  getkratypeid(even:any){
    this.kratypeid=even.target.value;
  }

 
  getRoleID(even:any){
    this.roleTypeid=even.target.value;
  }

public GetRoleType(){
  this.PerformanceManagementService.GetRoleType().subscribe(
    data=>{
      this.roleTypeList=data;
      console.log("type",this.roleTypeList);
      this.roleTypeid=0;
    }
  )
}





  Save(){
    debugger
     var json = {  
      "KRAName":this.kraName,
      "KRAType":this.kratypeid,
      // "Role"
      "Description":this.description
      };
      this.PerformanceManagementService.InsertKeyResultArea(json).subscribe(
        data => {
          let kratypelist=data;
          alert("Successfully Submitted...!");
          location.href="#/KeyResultArea";
        })
    }

    Cancel(){
      location.href ="#/KeyResultArea";
    }

    Update(){
      debugger
       var json = {
        "ID": this.id,
        "KRAName":this.kraName,
        "KRAType":this.kratypeid,
        // "Role":this.Role,
        "Description ":this.description
          
        };
      
        this.PerformanceManagementService.UpdateKeyResultArea(json).subscribe(
          data => {
          debugger
          alert("Updated Sucessfully");
          location.href="#/AppraisalCycle";
        })
    }










}
