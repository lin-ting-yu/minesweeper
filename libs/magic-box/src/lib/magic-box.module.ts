import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicBtnComponent } from './magic-btn/magic-btn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MagicBtnComponent
  ],
  exports: [
    MagicBtnComponent
  ],
})
export class MagicBoxModule {}
