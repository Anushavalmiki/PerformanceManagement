import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  temp:any;
  userName:any;
  constructor() { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp');
    this.userName=sessionStorage.getItem('loginName')
  }

  logout() {
    sessionStorage.clear();
    location.href = "#/Login";
    location.reload();

  }
}
