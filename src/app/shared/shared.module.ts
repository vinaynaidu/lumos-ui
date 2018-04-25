import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingIndicatorComponent
  ],
  exports: [
    LoadingIndicatorComponent
  ]
})
export class SharedModule { }
