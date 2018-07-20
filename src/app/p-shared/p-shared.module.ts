import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PSharedComponent } from './p-shared/p-shared.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [PSharedComponent],
  exports: [ PSharedComponent ]

})
export class PSharedModule { }
