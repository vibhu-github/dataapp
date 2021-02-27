import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Employee } from 'src/app/Interface/emp.interface';
import { pluck } from 'rxjs/operators';
import { DataServiceService } from 'src/app/service/data-service.service';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements AfterViewInit {

  ELEMENT_DATA: Employee[][] = [];
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'createdAt', 'updatedAt'];
  // dataSource = new MatTableDataSource([this.ELEMENT_DATA]);
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public paginatorLength!: number;
  public paginatorPageIndex!: number;
  public currentPage!: Employee[][];

  constructor(private _ds: DataServiceService) { }

  
  ngAfterViewInit() {

    this._ds.getSearches().pipe(
      pluck('allEmployees')
    ).subscribe((res:any) => {

      console.log(res);
      this.dataSource = new MatTableDataSource(res)
      console.log(this.dataSource)
      this.setPaginatorData();
      

    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    

  }
  setPaginatorData(): void {
    this.dataSource.paginator = this.paginator;
    this.paginatorLength = this.ELEMENT_DATA.length;
    this.currentPage = this.ELEMENT_DATA.slice(0, 1);
}
  OnPageChange(event: PageEvent): void {
    let paginatorStartIndex = event.pageIndex;
    let paginatorEndIndex = paginatorStartIndex + event.pageSize;
    if (paginatorEndIndex > this.paginatorLength) {
      paginatorEndIndex = this.paginatorLength;
    }
    this.paginatorPageIndex = event.pageIndex;
    this.currentPage = this.ELEMENT_DATA.slice(paginatorStartIndex, paginatorEndIndex);
  }
  public doFilter = (value: string) => {
   console.log( this.dataSource.filter = value.trim());
   
  }
}
