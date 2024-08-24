import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

const routes: Routes = [
{path:'admin',component:AdmindashComponent},
{ path:'appointment',component:AppointmentComponent},
{ path:'create-appointment',component:CreateAppointmentComponent},
{ path: '', redirectTo: '/appointment', pathMatch: 'full' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
