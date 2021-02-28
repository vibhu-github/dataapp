import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponents = [
BrowserAnimationsModule,
MatCardModule,
MatGridListModule,
MatPaginatorModule,
MatTableModule,
MatDividerModule,
MatProgressSpinnerModule,
CdkTableModule,
MatTableModule,
MatSortModule
];
@NgModule({
imports: [MaterialComponents],
exports: [MaterialComponents]
})
export class MaterialModule { }