import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import * as dayjs from 'dayjs';
import { CommonModule } from '@angular/common';

class MagicBtnComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.laughText = 'HaHa';
        this.probability = 100;
        this.isHover = false;
        this.isLeave = true;
        this.translate = '';
        this.btnTranslate = '';
        this.movePosX = null;
        this.movePosY = null;
        this.day = dayjs().format('YYYY-MM-DD HH:mm');
    }
    check() {
        return Math.random() * 100 < this.probability;
    }
    setIsHover(isHover) {
        this.isHover = isHover;
        if (isHover && this.check()) {
            this.movePosX = null;
            this.movePosY = null;
            this.isLeave = false;
            this.movePosX = ['left', 'right'][~~(Math.random() * 2)];
            this.movePosY = ['top', 'bottom'][~~(Math.random() * 2)];
            setTimeout(() => {
                const translateX = `${this.movePosX === 'left' ? '-' : ''}`;
                const translateY = `${this.movePosY === 'top' ? '-' : ''}`;
                this.btnTranslate = `translate(${translateX}${50 + Math.random() * 50}%, ${translateY}${50 + Math.random() * 50}%)`;
                this.cdRef.markForCheck();
                setTimeout(() => {
                    this.translate =
                        `translate(${translateX}50%, ${translateY}100%) ` +
                            `rotate(${(this.movePosX === 'left' && this.movePosY === 'top') ||
                                (this.movePosX === 'right' && this.movePosY === 'bottom')
                                ? '-'
                                : ''}30deg) ` +
                            `scale(1)`;
                    this.cdRef.markForCheck();
                }, 500);
            }, 10);
            console.log(`按鈕在 ${this.day} 閃過了你${this.laughText ? `，${this.laughText}` : ''}`);
        }
        else {
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
MagicBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-magic-btn',
                template: "<div\n  class=\"btn-container\"\n  (mouseenter)=\"setIsHover(true)\"\n  (mouseleave)=\"setIsHover(false)\"\n>\n  <div\n    class=\"btn\"\n    [ngStyle]=\"{ 'transform': btnTranslate }\"\n  >\n\n    <div\n      class=\"laugh-text {{movePosX}} {{movePosY}} {{isLeave ? 'leave' : ''}}\"\n      [ngStyle]=\"{ 'transform': translate }\"\n    >{{laughText}}</div>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".btn-container .btn{display:flex;align-items:center;justify-content:center;position:relative;transition:transform .2s}.btn-container .btn .laugh-text{color:#fff;font-size:12px;padding:8px 10px;border-radius:20px;background-color:#00000080;position:absolute;transition:transform .2s}.btn-container .btn .laugh-text.left{left:0px}.btn-container .btn .laugh-text.right{right:0px}.btn-container .btn .laugh-text.top{top:0px;transform-origin:bottom center}.btn-container .btn .laugh-text.top:before{border-width:8px 4px 0 4px;border-color:rgba(0,0,0,.5) transparent transparent transparent;bottom:-3px;transform:translate(-50%,5px)}.btn-container .btn .laugh-text.bottom{bottom:0px;transform-origin:top center}.btn-container .btn .laugh-text.bottom:before{border-width:0 4px 8px 4px;border-color:transparent transparent rgba(0,0,0,.5) transparent;top:-3px;transform:translate(-50%,-5px)}.btn-container .btn .laugh-text.left.top{transform:translate(-50%,-100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.left.bottom{transform:translate(-50%,100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.right.top{transform:translate(50%,-100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.right.bottom{transform:translate(50%,100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.leave{transform:translate(0) rotate(0) scale(0)!important}.btn-container .btn .laugh-text:before{content:\"\";display:block;width:0;height:0;color:transparent;border-style:solid;position:absolute;left:50%}\n"]
            },] }
];
MagicBtnComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MagicBtnComponent.propDecorators = {
    laughText: [{ type: Input }],
    probability: [{ type: Input }]
};

class MagicBoxModule {
}
MagicBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    MagicBtnComponent
                ],
                exports: [
                    MagicBtnComponent
                ],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { MagicBoxModule, MagicBtnComponent };
//# sourceMappingURL=loui1-magic-box.js.map
