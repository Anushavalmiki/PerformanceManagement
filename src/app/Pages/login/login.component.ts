import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roleId: any;
  userName: any;
  passWord: any;
  loginName: any;
  showpassword: any;
  result: any;
  constructor(private PerformanceManagementService: PerformanceManagementService) { }

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


  login() {
    debugger
    if (this.roleId == 1) {
      if (this.userName == 'Admin' && this.passWord == 'welcome') {
        sessionStorage.setItem("temp", '1');
        sessionStorage.setItem("roleid", this.roleId);
        
        sessionStorage.setItem("loginName", this.userName);
        location.href = "#/MyAppraisal";
        location.reload();
      }
      else {
        alert("Please Enter Valid Details");
      }
    }
    else if (this.roleId == 2) {
      this.PerformanceManagementService.GetMyDetails().subscribe(async data => {
        console.log("data", data);
        let temp: any = data.filter(x => (x.emailID == this.userName || x.phoneNo == this.userName) && x.password == this.passWord);
        this.result = temp[0];
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem("temp", '1');
          sessionStorage.setItem("roleid", this.roleId);
          sessionStorage.setItem("loginName", this.result.fullname);
          sessionStorage.setItem("EmaployedID", this.result.id);
          sessionStorage.setItem("Type", this.result.type);
          location.href = "#/MyAppraisal";
          location.reload();
        }
        else {
          alert('Username or Password is invalid');
          this.userName = "";
          this.passWord = "";
        }
      })
    }

    else if (this.roleId == '4') {
      this.PerformanceManagementService.GetMyDetails().subscribe(data => {
        console.log("data", data);
        let temp: any = data.filter(x => (x.emailID == this.userName || x.phoneNo == this.userName) && x.password == this.passWord);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem("temp", '1');
          sessionStorage.setItem("roleid", this.roleId);
          sessionStorage.setItem("loginName", this.result.fullname);
          sessionStorage.setItem("EmaployedID", this.result.id);
          sessionStorage.setItem("Type", this.result.type);
          location.href = "#/MyAppraisal";
          location.reload();
        }
        else {
          alert('Username or Password is invalid');
          this.userName = "";
          this.passWord = "";
        }

      })

    }



    else if (this.roleId == '3') {
      this.PerformanceManagementService.GetMyDetails().subscribe(data => {
        console.log("data", data);
        let temp: any = data.filter(x => (x.emailID == this.userName || x.phoneNo == this.userName) && x.password == this.passWord);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem("temp", '1');
          sessionStorage.setItem("roleid", this.roleId);
          sessionStorage.setItem("loginName", this.result.fullname);
          sessionStorage.setItem("EmaployedID", this.result.id);
          sessionStorage.setItem("Type", this.result.type);
          location.href = "#/MyAppraisal";
          location.reload();
        }
        else {
          alert('Username or Password is invalid');
          this.userName = "";
          this.passWord = "";
        }

      })

    }

 






  }


  }
 
















