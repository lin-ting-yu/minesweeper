import { MagicBoxModule } from '@library-pack-test/magic-box';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MinesweeperModule } from '@library-pack-test/minesweeper';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MagicBoxModule,
    MinesweeperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
