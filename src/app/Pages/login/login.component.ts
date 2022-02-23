import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roleId:any;
  userName:any;
  passWord:any;
  loginName:any;
  showpassword:any;
  constructor() { }

  ngOnInit(): void {
  }

  public getroleid(event: any) {
    this.roleId = event.target.value;

  }

  Showhidepassword() {
    debugger
    if (this.showpassword == 0) {
      this.showpassword = 1;
    }
    else {
      this.showpassword = 0;
    }
  }


  login(){
    if(this.roleId==1){
      if(this.userName=='Admin'&& this.passWord=='welcome'){
        sessionStorage.setItem("temp",'1');
        sessionStorage.setItem("roleid",this.roleId);
        sessionStorage.setItem("loginName",this.userName);
        location.href="#/MyAppraisal";
        location.reload();
      }
      else{
        alert("Please Enter Valid Details");
      }
    }

    else if(this.roleId==2){
    if(this.userName=='Kaushiki'&& this.passWord=='welcome'){
      sessionStorage.setItem("temp",'1');
      sessionStorage.setItem("roleid",this.roleId);
      sessionStorage.setItem("loginName",this.userName);
      location.href="#/MyAppraisal";
      location.reload();
    }
    else{
      alert("Please Enter Valid Details")
    }
    }

    else if(this.roleId=='3'){
      if(this.roleId==3){
        if(this.userName=='Anup'&& this.passWord=='welcome'){
          sessionStorage.setItem("temp",'1');
          sessionStorage.setItem("roleid",this.roleId);
          sessionStorage.setItem("loginName",this.userName);
          location.href="#/MyAppraisal";
          location.reload();
        }
        else{
          alert("Please Enter Valid Details");
        }
      }
    }
  }


 
}

