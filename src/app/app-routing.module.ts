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

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Sidebar',component:SidebarComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Footer',component:FooterComponent},
  {path:'AppraisalCycle',component:AppraisalCycleComponent},
  {path:'KeyPerformanceIndicator',component:KeyPerformanceIndicatorComponent},
  {path:'KeyResultArea',component:KeyResultAreaComponent},
  {path:'MyAppraisal',component:MyAppraisalComponent},
  {path:'Dashboard',component:DashboardComponent}










];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
