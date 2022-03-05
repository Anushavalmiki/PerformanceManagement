import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
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
  kraType:any;
  short:any;
  tablecount:any;
  entity:any;
  kratype:any;
  ngOnInit(): void {

    this.GetKraMaster();
    this.GetRoleType();
    this.roleTypeid=0;

  

    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetKeyResultArea();
        this.kratypeid=0;
      }
      else{
       
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
		this.kratypeid=this.keyresultlist[0].kraTypeID;
    this.roleTypeid=this.keyresultlist[0].roleTypeid;
    this.description=this.keyresultlist[0].description
    // this.kratype=this.kratypelist[0].kraType

    this.GetKraMaster();
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


getkratypeid(event:any){
  debugger
  this.kratypeid=event.target.value

}





keyresultArray: any = [];
Add(){
  debugger
  this.tablecount = 1;
  var json = {
    "KRAName":this.kraName,
    "KraTypeID":this.kratypeid,
    "Role":this.roleTypeid,
    "Description":this.description
 
  };
  debugger
  this.keyresultArray.push(json)
  this.kraName="";
  this.kratypeid=0;
  this.roleTypeid=0;
  this.description="";
 }
 

  save(){   
    for (let i=0; i<=this.keyresultArray.length;i++){
      var entity = {  
        "KRAName":this.keyresultArray[i].kraName,
        "KraTypeID":this.keyresultArray[i].kratypeid,
        "Role":this.keyresultArray[i].roleTypeid,
        "Description":this.keyresultArray[i].description
        };
        this.PerformanceManagementService.InsertKeyResultArea(entity).subscribe(
          data => {
            let kratypelist=data;
            Swal.fire("Successfully Submitted...!");
            this.tablecount=0;
            location.href="#/KeyResultArea";
            console.log("kralist",this.kratypelist);
          })
      }
    }
  

    cancel(){
      location.href ="#/KeyResultArea";
    }

   

    Update(){
      debugger
       var json = {
        "ID": this.id,
        "KRAName":this.kraName,
        "KraTypeID":this.kratypeid,
         "Role":this.roleTypeid,
        "Description ":this.description          
        };     
        this.PerformanceManagementService.UpdateKeyResultArea(json).subscribe(
          data => {
          debugger
         Swal.fire("Updated Sucessfully");
          location.href="#/KeyResultArea";
        })
    }


  







}
