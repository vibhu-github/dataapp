import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/Interface/emp.interface';
import { pluck } from 'rxjs/operators';
import { DataServiceService } from 'src/app/service/data-service.service';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements AfterViewInit {
  id:number;
  selectedRowIndex = -1;
  ELEMENT_DATA: Employee[][] = [];
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'createdAt', 'updatedAt'];
  // dataSource = new MatTableDataSource([this.ELEMENT_DATA]);
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public paginatorLength!: number;
  public paginatorPageIndex!: number;
  public currentPage!: Employee[][];

  constructor(private _ds: DataServiceService,private route:Router) { 
    
    
  
  }
  

  
  ngAfterViewInit() {
   
    this._ds.getSearches().pipe(
      pluck('allEmployees')
    ).subscribe((res:any) => {

      console.log(res);
      this.dataSource = new MatTableDataSource(res)
      console.log(this.dataSource)
     
      this.setPaginatorData();
      this.dataSource.sort = this.sort;

    })
    this.dataSource.paginator = this.paginator;
    
    
    

  }
  setPaginatorData(): void {
    this.dataSource.paginator = this.paginator;
    this.paginatorLength = this.ELEMENT_DATA.length;
    this.currentPage = this.ELEMENT_DATA.slice(0, 1);
}
  
  public doFilter = (value: string) => {
   console.log( this.dataSource.filter = value.trim());
 value=value.trim();
 value = value.toLowerCase();
 this.dataSource.filter = value;
   
  }
  onClick(){
    // this.route.navigate(['comp2',{id:this.id}]);
    
      this._ds.sendDataToOtherComponent('id')
  
    
    }
  highlight(row){
    this.selectedRowIndex = row.id;
    console.log('Row clicked: ', row);
}


}
 

  
