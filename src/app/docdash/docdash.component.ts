import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
 constructor(private patientService:PatientService,private router:Router){}
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

}
