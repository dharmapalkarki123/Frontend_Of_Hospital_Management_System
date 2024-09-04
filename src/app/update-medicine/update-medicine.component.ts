import { Component } from '@angular/core';
import { MedicineList } from '../medicine-list';
import { MedicineListService } from '../medicine-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {
  id:number=0;
  medicine:MedicineList=new  MedicineList();
  constructor(private route:ActivatedRoute, private medicineService:MedicineListService,private router:Router) { }
 ngOnInit():void{
  this.id=this.route.snapshot.params['id'];
  this.medicineService.getMedicineById(this.id).subscribe(data=>{
    this.medicine=data;
  })
 

}
onSubmit(){
  this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
    console.log(data);
    this.goToMedicine();
  })
}

goToMedicine(){
  this.router.navigate(['medicine-list']);
}


}
