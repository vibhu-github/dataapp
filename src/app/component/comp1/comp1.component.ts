import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Employee } from 'src/app/Interface/emp.interface';
import { pluck } from 'rxjs/operators';
import { DataServiceService } from 'src/app/service/data-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';



@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements AfterViewInit {
  errorApi = false;
  d?: any;
  selectedRowIndex = -1;
  ELEMENT_DATA: Employee[][] = [];
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'createdAt', 'updatedAt', 'getdetails'];

  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _ds: DataServiceService, private router: Router) { }

  ngAfterViewInit() {
    this._ds.getSearches().pipe(
      pluck('allEmployees')
    ).subscribe((res: any) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res)
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  public doFilter = (value: string) => {
    console.log(this.dataSource.filter = value.trim());
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    console.log('Row clicked: ', row);
  }

  getRecord(id: any): void {

    this._ds.getData(id).pipe(
      pluck('data')
    ).subscribe(
      (response: any) => {
        ;
        this.router.navigate(['welcome', id])

        this._ds.getData(response)

      }), (error: any) => {
        this.errorApi = true;
        console.log('Error state from API:,', error)
      }


  }
}




