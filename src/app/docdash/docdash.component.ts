import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
 constructor(private patientService:PatientService){}
patients:Patient[]=[];

ngOnInit(): void {
this.getPatients();
}

getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data;
  })
}
}
