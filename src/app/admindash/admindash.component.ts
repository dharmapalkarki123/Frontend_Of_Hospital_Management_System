import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
  patients:Patient[]=[]
  constructor(private patientService:PatientService){}
  ngOnInit():void{
    this.getPatients();
  }
  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      console.log(data); 
     this.patients=data;
    })
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })

    }
  }
  

