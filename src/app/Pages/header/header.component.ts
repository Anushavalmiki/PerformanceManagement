import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  temp:any;
  userName:any;
  time:any;
  hh:any;
  mm:any;
  ampm:any;
  page:any;
  constructor() { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp');
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

  logout() {
    sessionStorage.clear();
    location.href = "#/Login";
    location.reload();

  }

     





  
}
