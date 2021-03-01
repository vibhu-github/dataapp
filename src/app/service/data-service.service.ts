import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map, pluck, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  url = 'http://www.appgrowthcompany.com:5069/api/v1/employee/getAll';



  constructor(private http: HttpClient) { }

  getSearches() {
    return this.http.get(this.url)

  }


  getData(id: number): Observable<any> {

    return this.http.get(`${'http://www.appgrowthcompany.com:5069/api/v1/employee'}/get/${id}`)
      .pipe(pluck('data'), toArray(), map(data => {
        return data;
      }));


  }


}
