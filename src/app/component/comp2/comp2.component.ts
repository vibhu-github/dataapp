import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, pluck, switchMap, takeLast, toArray} from 'rxjs/operators';
import { Employee } from 'src/app/Interface/emp.interface';
import { EmpDetails } from 'src/app/Interface/empdetails.interface';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  dataSource:Employee[];
  id:number

  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age','createdAt','updatedAt'];
  
  constructor(private _ds:DataServiceService) { 
    
    }
  ngOnInit(): void {
    {    }
}


passData(){
  this._ds.shareDataSubject.subscribe(res=>{
    this.id=res
    console.log('id is '+res)
  })
}


  }
  // getData(id:any):void{
  //   this._ds.getIndividualSearches(id).pipe(
  //     pluck('data')
      
  //   ).subscribe(res=>{
  //     console.log('data of second response'+res)
  //     this.dataSource=res as any
  //   })
  
  

 
  
  



