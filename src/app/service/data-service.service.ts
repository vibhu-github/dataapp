import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Employee } from '../Interface/emp.interface';
import { EmpDetails } from '../Interface/empdetails.interface';
import { debounceTime, distinctUntilChanged, map, pluck, switchMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  shareDataSubject = new BehaviorSubject<Employee[]>([]);
 
  


  
  url='http://www.appgrowthcompany.com:5069/api/v1/employee/getAll';
  url2='http://www.appgrowthcompany.com:5069/api/v1/employee/get/1';

  // private employeeSub = new BehaviorSubject<Employee[]>([]);
  constructor(private http:HttpClient) { }
 
  getSearches(){
    return this.http.get(this.url)
    
  }

  getIndividualSearches(id:string){
    let params1=new HttpParams().set('id',id);
    return this.http.get(this.url2,{params:params1})
  
  }
  // public nameSearch(terms)
  //   return terms.pipe(
  //       debounceTime(300),
  //       distinctUntilChanged(),
  //       switchMap(term => {
  //         const url = `http://www.appgrowthcompany.com:5069/api/v1/employee/get/?id=${term}`;
  //         return this.http.get(url);
  //     }),
     
  //   );
  // }


  

  getProject(id: number = 0): Observable<any> {
    if (id) {
       return this.http.get(`${'http://www.appgrowthcompany.com:5069/api/v1/employee'}/get/${id}`)
          .pipe(pluck('data'),toArray(),map(project => {
               return project;
               // this.currentProjectObs$.next(project);
          }));
    }
    
};
   

}
