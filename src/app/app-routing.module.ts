import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component'
import { LoginComponent } from './Pages/login/login.component';
import { AppraisalCycleComponent } from './Pages/appraisal-cycle/appraisal-cycle.component';
import { KeyPerformanceIndicatorComponent } from './Pages/key-performance-indicator/key-performance-indicator.component';
import { KeyResultAreaComponent } from './Pages/key-result-area/key-result-area.component';
import { MyAppraisalComponent } from './Pages/my-appraisal/my-appraisal.component'
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppraisalCycleformComponent } from './Pages/appraisal-cycleform/appraisal-cycleform.component';
import { KeyResultAresFormComponent } from './Pages/key-result-ares-form/key-result-ares-form.component';
import { KeyPerformanceIndicatorformComponent } from './Pages/key-performance-indicatorform/key-performance-indicatorform.component';
import { EmployeeDashboardComponent } from './Pages/employee-dashboard/employee-dashboard.component';
import { EmployeeFormComponent } from './Pages/employee-form/employee-form.component'
import { MyAppraisalFormComponent } from './Pages/my-appraisal-form/my-appraisal-form.component';
import { EmployeeKraMappingComponent } from './Pages/employee-kra-mapping/employee-kra-mapping.component';
import { EmployeeKraMappingdashboardComponent } from './Pages/employee-kra-mappingdashboard/employee-kra-mappingdashboard.component';
import { SelfRatingPageComponent } from './Pages/self-rating-page/self-rating-page.component';
import { ManagerratingComponent } from './Pages/managerrating/managerrating.component';
import { ManagerratingdashComponent } from './Pages/managerratingdash/managerratingdash.component';
import { HrRatingComponent } from './Pages/hr-rating/hr-rating.component';
import { HrDashComponent } from './Pages/hr-dash/hr-dash.component';
import { StaffScoreReportComponent } from './Pages/staff-score-report/staff-score-report.component';
import { StaffScoreFullDetailsComponent } from './Pages/staff-score-full-details/staff-score-full-details.component';
import { SelfratingnewComponent } from './Pages/selfratingnew/selfratingnew.component';
import { ManagerAppraisalComponent } from './manager-appraisal/manager-appraisal.component';
import { HrratingnewComponent } from './Pages/hrratingnew/hrratingnew.component';
import { BellCurveFittingComponent } from './bell-curve-fitting/bell-curve-fitting.component';
import { AppraisalReportComponent } from './Pages/appraisal-report/appraisal-report.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HRDashboardComponent } from './hrdashboard/hrdashboard.component';
import { EmployeeTileDashboardComponent } from './employee-tile-dashboard/employee-tile-dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { PipComponent } from './pip/pip.component';
import { AddEmployeetoPipComponent } from './add-employeeto-pip/add-employeeto-pip.component';
import { HelpComponent } from './help/help.component';
import { SupportTicketDashboardComponent } from './support-ticket-dashboard/support-ticket-dashboard.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';


const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Sidebar', component: SidebarComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'AppraisalCycle', component: AppraisalCycleComponent },
  { path: 'KeyPerformanceIndicator', component: KeyPerformanceIndicatorComponent },
  { path: 'KeyResultArea', component: KeyResultAreaComponent },
  { path: 'MyAppraisal', component: MyAppraisalComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'AppraisalCycleform', component: AppraisalCycleformComponent },
  { path: 'AppraisalCycleform/:id', component: AppraisalCycleformComponent },
  { path: 'KeyResultAresForm', component: KeyResultAresFormComponent },
  { path: 'KeyResultAresForm/:id', component: KeyResultAresFormComponent },
  { path: 'KeyPerformanceIndicatorform', component: KeyPerformanceIndicatorformComponent },
  { path: 'KeyPerformanceIndicatorform/:id', component: KeyPerformanceIndicatorformComponent },
  { path: 'AppraisalCycleform', component: AppraisalCycleformComponent },
  { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
  { path: 'EmployeeForm', component: EmployeeFormComponent },
  { path: 'MyAppraisalForm', component: MyAppraisalFormComponent },
  { path: 'EmployeeKraMapping', component: EmployeeKraMappingComponent },
  { path: 'EmployeeKraMappingdashboard', component: EmployeeKraMappingdashboardComponent },
  { path: 'SelfRatingPage', component: SelfRatingPageComponent },
  { path: 'SelfRatingPage/:id/:StaffID', component: SelfRatingPageComponent },
  { path: 'Managerrating/:id/:StaffID', component: ManagerratingComponent },
  { path: 'Managerratingdash', component: ManagerratingdashComponent },
  { path: 'HrRating', component: HrRatingComponent },
  { path: 'HrRating/:id/:StaffID', component: HrRatingComponent },
  { path: 'HrDash', component: HrDashComponent },
  { path: 'StaffScoreReport', component: StaffScoreReportComponent },
  { path: 'StaffScoreFullDetails/:StaffTypeID/:StaffID', component: StaffScoreFullDetailsComponent },
  { path: 'SelfRatingPagenew/:id/:StaffID', component: SelfratingnewComponent },
  { path: 'ManagerAppraisal/:id/:StaffID', component: ManagerAppraisalComponent },
  { path: 'hrratingnew/:id/:StaffID', component: HrratingnewComponent },
  { path: 'BellCurveFitting', component: BellCurveFittingComponent },
  {path:'AppraisalReport',component:AppraisalReportComponent},
  {path:'ManagerDashboard',component:ManagerDashboardComponent},
  {path:'HRDashboard',component:HRDashboardComponent},
  {path:'EmployeeTileDashboard',component:EmployeeTileDashboardComponent},
  { path: 'Loader', component:LoaderComponent },
  { path: 'Pip', component:PipComponent },
  { path: 'AddEmployeetoPip', component:AddEmployeetoPipComponent },
  {path:'Help',component:HelpComponent},
  {path:'SupportTickets',component:SupportTicketsComponent},
  {path:'SupportTickets/:id',component:SupportTicketsComponent},
  {path:'SupportTicketDashboard',component:SupportTicketDashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
