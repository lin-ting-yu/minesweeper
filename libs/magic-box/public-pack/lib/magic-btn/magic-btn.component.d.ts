import { ChangeDetectorRef } from '@angular/core';
export declare class MagicBtnComponent {
    private cdRef;
    constructor(cdRef: ChangeDetectorRef);
    laughText: string;
    probability: number;
    isHover: boolean;
    isLeave: boolean;
    translate: string;
    btnTranslate: string;
    movePosX: 'left' | 'right' | null;
    movePosY: 'top' | 'bottom' | null;
    private day;
    private check;
    setIsHover(isHover: boolean): void;
}
