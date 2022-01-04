import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import * as dayjs from 'dayjs';
@Component({
  selector: 'lib-magic-btn',
  templateUrl: './magic-btn.component.html',
  styleUrls: ['./magic-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagicBtnComponent {
  constructor(private cdRef: ChangeDetectorRef) {}

  @Input() laughText = 'HaHa';
  @Input() probability = 100;

  isHover = false;
  isLeave = true;
  translate = '';
  btnTranslate = '';
  movePosX: 'left' | 'right' | null = null;
  movePosY: 'top' | 'bottom' | null = null;

  private day = dayjs().format('YYYY-MM-DD HH:mm');

  private check(): boolean {
    return Math.random() * 100 < this.probability;
  }

  setIsHover(isHover: boolean): void {
    this.isHover = isHover;
    if (isHover && this.check()) {
      this.movePosX = null;
      this.movePosY = null;
      this.isLeave = false;
      this.movePosX = ['left', 'right'][~~(Math.random() * 2)] as
        | 'left'
        | 'right';
      this.movePosY = ['top', 'bottom'][~~(Math.random() * 2)] as
        | 'top'
        | 'bottom';
      setTimeout(() => {
        const translateX = `${this.movePosX === 'left' ? '-' : ''}`;
        const translateY = `${this.movePosY === 'top' ? '-' : ''}`;
        this.btnTranslate = `translate(${translateX}${
          50 + Math.random() * 50
        }%, ${translateY}${50 + Math.random() * 50}%)`;
        this.cdRef.markForCheck();
        setTimeout(() => {
          this.translate =
            `translate(${translateX}50%, ${translateY}100%) ` +
            `rotate(${
              (this.movePosX === 'left' && this.movePosY === 'top') ||
              (this.movePosX === 'right' && this.movePosY === 'bottom')
                ? '-'
                : ''
            }30deg) ` +
            `scale(1)`;
          this.cdRef.markForCheck();
        }, 500);
      }, 10);
      console.log(`按鈕在 ${this.day} 閃過了你${this.laughText ? `，${this.laughText}`: ''}`);
    } else {
      this.isLeave = true;
      this.translate = '';
      this.btnTranslate = '';
      setTimeout(() => {
        if (this.isLeave) {
          this.movePosX = null;
          this.movePosY = null;
          this.cdRef.markForCheck();
        }
      }, 300);
    }
  }
}


