import { Component, OnInit } from '@angular/core';
import { concat, Observable } from 'rxjs';

@Component({
  selector: 'library-pack-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'library-pack-test';

  ngOnInit(): void {
    // concat(this.log1(), this.log2()).subscribe(() => {
    //   console.log('complete');
    // });
    return;
  }

  log1(): Observable<void> {
    return new Observable((obs) => {
      setTimeout(() => {
        console.log('log1');
        obs.next();
        obs.complete();
      }, 1000);
    });
  }
  log2(): Observable<void> {
    return new Observable((obs) => {
      console.log('log2');
      obs.next();
      obs.complete();
    });
  }
}
function concatAll(log1: () => Observable<void>, log2: () => Observable<void>) {
  throw new Error('Function not implemented.');
}
