import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Interface/emp.interface';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  list1: Employee[];

  constructor(private _ds: DataServiceService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      if (data && data.id) {
        this._ds.getData(data.id)
          .subscribe(project => {
            console.log('data in 2', project);
            this.list1 = project;
          });
      }
    });

  }

}
