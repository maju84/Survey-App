import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  exports: [
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
  ]
})
export class CoreModule { }
