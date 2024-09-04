import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineList } from './medicine-list';

@Injectable({
  providedIn: 'root'
})
export class MedicineListService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl= "http://localhost:8086/api/v2/medicines"

  getMedicineList():Observable<MedicineList[]>{
    return this.httpClient.get<MedicineList[]>(`${this.baseUrl}`);
  }

createMedicine(medicine:MedicineList):Observable<Object>{
return this.httpClient.post<MedicineList>(`${this.baseUrl}`,medicine)
}

getMedicineById(id:number):Observable<MedicineList>{

  return this.httpClient.get<MedicineList>(`${this.baseUrl}/${id}`);  
}

updateMedicine(id:number,medicine:MedicineList):Observable<Object>{
  return this.httpClient.put<MedicineList>(`${this.baseUrl}/${id}`,medicine);
}

deleteMedicine(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}


}
