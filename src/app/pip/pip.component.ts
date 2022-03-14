import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from 'src/app/performance-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {

  constructor(public PerformanceManagementService: PerformanceManagementService) { }

  stafflist: any;
  term: any;
  login:any;
  staffID:any;
  ngOnInit(): void {
    debugger
    this.login = sessionStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
  }
}
