import { Component } from '@angular/core';
import { MedicineList } from '../medicine-list';
import { MedicineListService } from '../medicine-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent {
  medicines: MedicineList[]=[];

  constructor(private medicineList:MedicineListService,private router:Router){}
  ngOnInit():void{
    this.getMedicine();
  }

  getMedicine(){
    this.medicineList.getMedicineList().subscribe(data=>{
      console.log(data);
      this.medicines=data;
    })
  }
  updateMedicine(id:number){
   this.router.navigate(['update-medicine',id])
  }

  deleteMedicine(id:number){
 this.medicineList.deleteMedicine(id).subscribe(data=>{
  console.log(data);
  this.getMedicine();
 })

  }
        

viewMedicine(id:number){
   this.router.navigate(['view-medicine',id])
}


}
