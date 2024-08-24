import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }


  private baseUrl="http://localhost:8086/api/v1"

getAppointmentList():Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
}

 
createAppointment(appointment:Appointment):Observable<Appointment>{
  return this.httpClient.post<Appointment>(`${this.baseUrl}`,appointment);
}






}
