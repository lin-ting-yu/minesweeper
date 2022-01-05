import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MinesweeperComponent
  ],
  exports: [
    MinesweeperComponent
  ]
})
export class MinesweeperModule {}
