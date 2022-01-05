import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MinesweeperModule } from './minesweeper/minesweeper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MinesweeperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
