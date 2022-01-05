import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MinesweeperComponent
  ],
  exports: [
    MinesweeperComponent
  ]
})
export class MinesweeperModule {}
