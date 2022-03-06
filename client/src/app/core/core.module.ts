import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  exports: [
    MaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    LayoutModule,
  ]
})
export class CoreModule { }
