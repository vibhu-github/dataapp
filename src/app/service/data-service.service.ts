import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Employee } from '../Interface/emp.interface';
import { EmpDetails } from '../Interface/empdetails.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url='http://www.appgrowthcompany.com:5069/api/v1/employee/getAll';

  constructor(private http:HttpClient) { }
 
  getSearches(){
    return this.http.get(this.url)
    
  }
}
