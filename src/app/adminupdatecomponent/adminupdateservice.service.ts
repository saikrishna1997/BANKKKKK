import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminupdateserviceService {

  constructor(private http:HttpClient,private _httpService:AdminupdateserviceService) { }

  adminUpdatedetails(empId,admin){
  	console.log(empId);
  	return this.http.put('http://localhost:8082/put/Admin/'+empId,admin);
  }
}
