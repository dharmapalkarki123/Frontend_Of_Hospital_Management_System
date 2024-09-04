import { Component } from '@angular/core';
import { MedicineList } from '../medicine-list';
import { MedicineListService } from '../medicine-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
 medicine:MedicineList=new  MedicineList();

constructor(private medicineList:MedicineListService,private router:Router){}

ngOnInit(): void{}

saveMedicine(){
  this.medicineList.createMedicine(this.medicine).subscribe(data=>{
    console.log(data);
    this.goToMedicine();
    
  })
}

onSubmit(){
 this.saveMedicine();
}
goToMedicine(){
  this.router.navigate(['/medicine-list']);
}

}
