import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import{ HeaderComponent} from './Pages/header/header.component';
import{FooterComponent} from './Pages/footer/footer.component'
import { LoginComponent } from './Pages/login/login.component';
import { AppraisalCycleComponent } from './Pages/appraisal-cycle/appraisal-cycle.component';
import{KeyPerformanceIndicatorComponent} from './Pages/key-performance-indicator/key-performance-indicator.component';
import{KeyResultAreaComponent} from './Pages/key-result-area/key-result-area.component';
import{MyAppraisalComponent} from './Pages/my-appraisal/my-appraisal.component'
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppraisalCycleformComponent } from './Pages/appraisal-cycleform/appraisal-cycleform.component';
import {KeyResultAresFormComponent} from './Pages/key-result-ares-form/key-result-ares-form.component'
import { KeyPerformanceIndicatorformComponent } from './Pages/key-performance-indicatorform/key-performance-indicatorform.component';
import { EmployeeDashboardComponent } from './Pages/employee-dashboard/employee-dashboard.component';
import{EmployeeFormComponent} from './Pages/employee-form/employee-form.component'
import { MyAppraisalFormComponent } from './Pages/my-appraisal-form/my-appraisal-form.component';


const routes: Routes = [

  { path: '', redirectTo:'/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Sidebar',component:SidebarComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Footer',component:FooterComponent},
  {path:'AppraisalCycle',component:AppraisalCycleComponent},
  {path:'KeyPerformanceIndicator',component:KeyPerformanceIndicatorComponent},
  {path:'KeyResultArea',component:KeyResultAreaComponent},
  {path:'MyAppraisal',component:MyAppraisalComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'AppraisalCycleform',component:AppraisalCycleformComponent},
  {path:'AppraisalCycleform/:id',component:AppraisalCycleformComponent},
  {path:'KeyResultAresForm',component:KeyResultAresFormComponent},
  {path:'KeyResultAresForm/:id',component:KeyResultAresFormComponent},
  {path:'KeyPerformanceIndicatorform',component:KeyPerformanceIndicatorformComponent},
  {path:'KeyPerformanceIndicatorform/:id',component:KeyPerformanceIndicatorformComponent},
  {path:'AppraisalCycleform',component:AppraisalCycleformComponent },
  {path:'EmployeeDashboard',component:EmployeeDashboardComponent},
  {path:'EmployeeForm',component:EmployeeFormComponent},
  {path:'MyAppraisalForm',component:MyAppraisalFormComponent}









];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
