import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  roleid:any;
  temp:any;

  constructor() { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp');
    this.roleid=sessionStorage.getItem('roleid');
  }



}
