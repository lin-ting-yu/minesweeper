import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Land, Minesweeper, OpenLandEnum } from '../data/minesweeper';

enum Level {
  Easy = 'easy',
  Normal = 'normal',
  Hard = 'hard',
}

const minesweeperLevelData = {
  [Level.Easy]: {
    width: '.'.repeat(9).split(''),
    height: '.'.repeat(9).split(''),
    landmine: 10,
  },
  [Level.Normal]: {
    width: '.'.repeat(16).split(''),
    height: '.'.repeat(16).split(''),
    landmine: 40,
  },
  [Level.Hard]: {
    width: '.'.repeat(30).split(''),
    height: '.'.repeat(16).split(''),
    landmine: 99,
  },
};

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinesweeperComponent implements OnInit {
  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  private minesweeper: Minesweeper;

  private level: Level = Level.Easy;
  time = 0;

  private isStart = false;
  isDone = false;
  isDead = false;

  isLeftDown = false;
  private isRightDown = false;
  private leftDownIndex = -1;
  private rightDownIndex = -1;

  minesweeperData: {
    width: string[];
    height: string[];
    landmine: number;
  } = minesweeperLevelData[this.level];

  private oldMouseupTimestamp = new Date().getTime();
  private mouseupIntervalTime = 10000;
  private landMatrix: Land[] = [];
  private downIndexList: boolean[][] = [];
  private interval: NodeJS.Timeout;

  get landmineNum(): number {
    const landmine = this.minesweeperData.landmine - this.minesweeper.flagLangth;
    return Math.min(Math.max(landmine, -99), 999);
  };

  ngOnInit(): void {
    this.setMinesweeper();

    return;
  }

  itemClick(x: number, y: number, event: MouseEvent | PointerEvent): void {
    event.stopPropagation();
    event.preventDefault();
    // console.log('itemClick', event.button);
    if (this.isDone || this.isDead) {
      return;
    }
    if (event.button === 0 && this.mouseupIntervalTime > 50 && !this.isRightDown) {
      if (!this.isStart && this.landMatrix[this.xyToI(x, y)].isLandmine) {
        this.setMinesweeper(x, y);
      }
      this.startInterval();
      this.isStart = true;
      this.minesweeper.openLand(x, y, (res) => {
        if (res.type === OpenLandEnum.IsLandmine) {
          this.isDead = true;
          this.minesweeper.openAll();
        }
        this.setIsDone(res.isDone);
      });
    }
  }

  mousedown(x: number, y: number, event: MouseEvent | PointerEvent): void {
    switch (event.button) {
      case 0:
        this.leftDownIndex = this.xyToI(x, y);
        this.isLeftDown = true;
        return;
      case 2:
        this.rightDownIndex = this.xyToI(x, y);
        this.isRightDown = true;
        return;
    }
  }

  mouseup(x: number, y: number, event: MouseEvent | PointerEvent): void {
    const index = this.xyToI(x, y);
    const now = new Date().getTime();
    const land = this.landMatrix[index];
    this.mouseupIntervalTime = now - this.oldMouseupTimestamp;
    this.oldMouseupTimestamp = now;
    if (this.isDone || this.isDead) {
      return;
    }

    if (event.button === 0 || event.button === 2) {
      if (event.button === 0) {
        this.leftDownIndex = -1;
        this.isLeftDown = false;
      } else {
        if (
          this.rightDownIndex === index &&
          !land.isOpen &&
          !this.isLeftDown &&
          this.mouseupIntervalTime > 20
        ) {
          this.startInterval();
          this.isStart = true;
          this.minesweeper.setFlag(x, y);
        }
        this.rightDownIndex = -1;
        this.isRightDown = false;
      }

      if (
        land.isOpen &&
        !land.isFlag &&
        (this.mouseupIntervalTime < 50 || this.isRightDown || this.isLeftDown)
      ) {
        this.minesweeper.openNearLand(x, y, (res) => {
          if (res.type === OpenLandEnum.IsLandmine) {
            this.isDead = true;
            this.minesweeper.openAll();
          }
          this.setIsDone(res.isDone);
        });
      }
    }
  }

  mouseenter(x: number, y: number): void {
    this.downIndexList = [];
    (this.downIndexList[y] || (this.downIndexList[y] = []))[x] = true;
    Minesweeper.nearVectorList.forEach((vector) => {
      const innerX = vector.x + x;
      const innerY = vector.y + y;
      (this.downIndexList[innerY] || (this.downIndexList[innerY] = []))[
        innerX
      ] = true;
    });
  }

  getLand(x: number, y: number): Land {
    return this.landMatrix[this.xyToI(x, y)] || {};
  }

  xyToI(x: number, y: number): number {
    return this.minesweeperData.width.length * y + x;
  }

  checkDown(x: number, y: number): boolean {
    if (this.isDone || this.isDead) {
      return false;
    }
    return (
      this.isLeftDown && this.isRightDown && (this.downIndexList[y] || [])[x]
    );
  }

  restart(): void {
    this.isStart = false;
    this.isDone = false;
    this.isDead = false;
    this.time = 0;
    this.setMinesweeper();
    clearInterval(this.interval);
  }

  private setMinesweeper(x?: number, y?: number): void {
    const ignoreIndex =
      typeof x === 'number' && typeof y === 'number' ? [this.xyToI(x, y)] : [];
    this.minesweeper = new Minesweeper(
      this.minesweeperData.width.length,
      this.minesweeperData.height.length,
      this.minesweeperData.landmine,
      ignoreIndex
    );
    this.landMatrix = this.minesweeper.getLandMatrix();
  }
  private setIsDone(isDone: boolean): void {
    this.isDone = isDone;
    if (isDone) {
      this.isLeftDown = false;
      this.isRightDown = false;
    }
  }
  private startInterval(): void {
    if (this.isStart) {
      return;
    }
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.isDead || this.isDone) {
        clearInterval(this.interval);
        return;
      }
      this.time = Math.min(this.time + 1 , 999);
      this.cdRef.markForCheck();
    }, 1000);
  }
}
