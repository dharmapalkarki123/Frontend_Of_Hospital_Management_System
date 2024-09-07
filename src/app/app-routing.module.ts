import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
{path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
{ path:'appointment',component:AppointmentComponent,canActivate:[AdminauthguardService]},
{ path:'create-appointment',component:CreateAppointmentComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'docdash',component:DocdashComponent,canActivate:[DocauthguardService]},
{path:'create-patient',component:CreatePatientComponent,canActivate:[DocauthguardService]},
{path:'medicine-list',component:MedicineListComponent,canActivate:[DocauthguardService]},
{path:'create-medicine',component:CreateMedicineComponent,canActivate:[DocauthguardService]},
{path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DocauthguardService]},
{path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DocauthguardService]},
{path:'view-patient/:id',component:ViewPatientComponent,canActivate:[DocauthguardService]},
{path:'view-medicine/:id',component:ViewMedicineComponent,canActivate:[DocauthguardService]},
{path:'doclogin',component:DocloginComponent},
{path:'adlogin',component:AdloginComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
