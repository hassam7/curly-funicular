import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DATE_FORMAT, DATE_FORMAT_TOKEN } from '../services/date-format.token';

const MODULES = [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers: [{ provide: DATE_FORMAT_TOKEN, useValue: DATE_FORMAT }]
})
export class CoreModule { }
