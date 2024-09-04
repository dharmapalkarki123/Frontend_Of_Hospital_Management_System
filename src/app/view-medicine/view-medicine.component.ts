import { Component } from '@angular/core';
import { MedicineList } from '../medicine-list';
import { ActivatedRoute } from '@angular/router';
import { MedicineListService } from '../medicine-list.service';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent {
  medicine:MedicineList=new MedicineList();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineListService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data})
    }

}
