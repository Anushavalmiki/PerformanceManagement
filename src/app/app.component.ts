import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PerformanceManagement';


  temp:any;
  roleid:any;

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp');
    this.roleid=sessionStorage.getItem('roleid');
  }
  
}

