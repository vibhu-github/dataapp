import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, pluck, switchMap, takeLast, toArray} from 'rxjs/operators';
import { Employee } from 'src/app/Interface/emp.interface';
import { EmpDetails } from 'src/app/Interface/empdetails.interface';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  list1:Employee[];
  
  constructor(private _ds:DataServiceService,private route:ActivatedRoute) { 
    // this._ds.shareDataSubject.subscribe(res=>{
    //   // this.id=res
    //   console.log('id is '+JSON.stringify(res))
      
      
    // })
    
    }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params)  => {
      if (data && data.id) {
        this._ds.getProject(data.id)
          .subscribe(project => {
              console.log('data in 2',project);

              this.list1=project;
              
              
              // let keys = Object.keys(this.list1);
              // let values=Object.values(this.list1);
              // console.log('list data'+keys)
              // console.log('list values'+values)
              
        });
      }
    });
    
      }
  




  
 }
