import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
 constructor(private patientService:PatientService,private router:Router,private docauthservice:DocauthService){}
patients:Patient[]=[];

ngOnInit(): void {
this.getPatients();
}

getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data;
  })
}
delete(id:number){
this.patientService.deletePatient(id).subscribe(data=>{
  console.log(data);
  
  this.getPatients();
})
}
updatePatient(id:number){
 this.router.navigate(['update-patient',id])
}

viewPatient(id:number){
this.router.navigate(['view-patient',id])
}

logout1(){
  this.docauthservice.logout1();
  this.router.navigate(['home'])
}

}
