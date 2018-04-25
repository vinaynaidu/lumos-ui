import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColourPaletteComponent } from './components/colour-palette/colour-palette.component';
import { SharedModule } from '../shared/shared.module';
import { ThemePaletteComponent } from './components/theme-palette/theme-palette.component';
import { GradientComponent } from './components/gradient/gradient.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ColourPaletteComponent,
    ThemePaletteComponent,
    GradientComponent
  ]
})
export class LifxModule { }
