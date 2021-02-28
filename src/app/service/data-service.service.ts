import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../Interface/emp.interface';
import { EmpDetails } from '../Interface/empdetails.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url='http://www.appgrowthcompany.com:5069/api/v1/employee/getAll';
  url2='http://www.appgrowthcompany.com:5069/api/v1/employee/get/1?id=1';

  // private employeeSub = new BehaviorSubject<Employee[]>([]);
  constructor(private http:HttpClient) { }
 
  getSearches(){
    return this.http.get(this.url)
    
  }

  getIndividualSearches(id:string){
    let params1=new HttpParams().set('id',id);
    return this.http.get(this.url2,{params:params1})
  
  }
}
