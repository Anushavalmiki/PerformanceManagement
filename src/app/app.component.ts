import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PerformanceManagement';


  temp:any;
  roleid:any;
  userName:any;
  time:any;
  hh:any;
  ampm:any;
  mm:any;
  page:any;

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp');
    this.roleid=sessionStorage.getItem('roleid');
    this.userName=sessionStorage.getItem('loginName');
    
    setInterval(() => {
      var time = new Date();
      this.time = time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });
      let temp: any = this.time.split(':');
      this.hh = temp[0];
      let temp1: any = this.time.split(':')[1].split(" ");
      this.mm = temp1[0];
      this.ampm = temp1[1];
    }, 1000);

    interval(1000).subscribe((x => {

      this.page = sessionStorage.getItem('clickname')
    }));
  }

  









  logout(){
    location.href="#/Login";
    location.reload();
    localStorage.clear();
    sessionStorage.clear()
  }



  public highlight(evt: any) {
    debugger
    var i, tablinks;
    //  localStorage.setItem("clickname",name)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }
  
  appraisal() {
    localStorage.setItem("clickname", "AppraisalCycle");
  }
 
  kRA(){
    localStorage.setItem("clickname", "KeyResultArea");
  }

  kPI(){
    localStorage.setItem("clickname", "KeyPerformanceIndicator");
  }
  keyResultArea(){
    localStorage.setItem("clickname", "KeyResultArea");
  }

  keyPerformanceIndicator(){
    localStorage.setItem("clickname", "keyPerformanceIndicator");
  }

  myAppraisal(){
    localStorage.setItem("clickname", "MyAppraisal");
  }


}

