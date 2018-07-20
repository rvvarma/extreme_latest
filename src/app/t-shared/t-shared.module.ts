import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TSharedComponent } from './t-shared/t-shared.component';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [TSharedComponent],
  exports: [ TSharedComponent ]

})
export class TSharedModule { }
