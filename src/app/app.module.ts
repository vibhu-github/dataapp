import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Comp1Component } from './component/comp1/comp1.component';
import { Comp2Component } from './component/comp2/comp2.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
declarations: [
AppComponent,
HeaderComponent,
FooterComponent,
Comp1Component,
Comp2Component,
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
BrowserAnimationsModule,
MaterialModule,
FormsModule,
FlexLayoutModule,
MatFormFieldModule,
    MatInputModule,

MatTableModule
],



providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
