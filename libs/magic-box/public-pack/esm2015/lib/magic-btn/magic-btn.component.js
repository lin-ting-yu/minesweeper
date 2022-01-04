import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import * as dayjs from 'dayjs';
export class MagicBtnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFnaWMtYnRuL21hZ2ljLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQU8vQixNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW9CLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBRW5DLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFFM0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBNEIsSUFBSSxDQUFDO1FBQ3pDLGFBQVEsR0FBNEIsSUFBSSxDQUFDO1FBRWpDLFFBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQVpGLENBQUM7SUFjeEMsS0FBSztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUU1QyxDQUFDO1lBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBRTNDLENBQUM7WUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVELE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxVQUFVLEdBQ3pDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLENBQUMsU0FBUzt3QkFDWixhQUFhLFVBQVUsUUFBUSxVQUFVLFFBQVE7NEJBQ2pELFVBQ0UsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztnQ0FDckQsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQztnQ0FDdkQsQ0FBQyxDQUFDLEdBQUc7Z0NBQ0wsQ0FBQyxDQUFDLEVBQ04sU0FBUzs0QkFDVCxVQUFVLENBQUM7b0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQzNCO1lBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixvYUFBeUM7Z0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O1lBVkMsaUJBQWlCOzs7d0JBY2hCLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbWFnaWMtYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hZ2ljLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hZ2ljLWJ0bi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWFnaWNCdG5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBASW5wdXQoKSBsYXVnaFRleHQgPSAnSGFIYSc7XG4gIEBJbnB1dCgpIHByb2JhYmlsaXR5ID0gMTAwO1xuXG4gIGlzSG92ZXIgPSBmYWxzZTtcbiAgaXNMZWF2ZSA9IHRydWU7XG4gIHRyYW5zbGF0ZSA9ICcnO1xuICBidG5UcmFuc2xhdGUgPSAnJztcbiAgbW92ZVBvc1g6ICdsZWZ0JyB8ICdyaWdodCcgfCBudWxsID0gbnVsbDtcbiAgbW92ZVBvc1k6ICd0b3AnIHwgJ2JvdHRvbScgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGRheSA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJyk7XG5cbiAgcHJpdmF0ZSBjaGVjaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDEwMCA8IHRoaXMucHJvYmFiaWxpdHk7XG4gIH1cblxuICBzZXRJc0hvdmVyKGlzSG92ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzSG92ZXIgPSBpc0hvdmVyO1xuICAgIGlmIChpc0hvdmVyICYmIHRoaXMuY2hlY2soKSkge1xuICAgICAgdGhpcy5tb3ZlUG9zWCA9IG51bGw7XG4gICAgICB0aGlzLm1vdmVQb3NZID0gbnVsbDtcbiAgICAgIHRoaXMuaXNMZWF2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5tb3ZlUG9zWCA9IFsnbGVmdCcsICdyaWdodCddW35+KE1hdGgucmFuZG9tKCkgKiAyKV0gYXNcbiAgICAgICAgfCAnbGVmdCdcbiAgICAgICAgfCAncmlnaHQnO1xuICAgICAgdGhpcy5tb3ZlUG9zWSA9IFsndG9wJywgJ2JvdHRvbSddW35+KE1hdGgucmFuZG9tKCkgKiAyKV0gYXNcbiAgICAgICAgfCAndG9wJ1xuICAgICAgICB8ICdib3R0b20nO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBgJHt0aGlzLm1vdmVQb3NYID09PSAnbGVmdCcgPyAnLScgOiAnJ31gO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gYCR7dGhpcy5tb3ZlUG9zWSA9PT0gJ3RvcCcgPyAnLScgOiAnJ31gO1xuICAgICAgICB0aGlzLmJ0blRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSR7XG4gICAgICAgICAgNTAgKyBNYXRoLnJhbmRvbSgpICogNTBcbiAgICAgICAgfSUsICR7dHJhbnNsYXRlWX0kezUwICsgTWF0aC5yYW5kb20oKSAqIDUwfSUpYDtcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPVxuICAgICAgICAgICAgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9NTAlLCAke3RyYW5zbGF0ZVl9MTAwJSkgYCArXG4gICAgICAgICAgICBgcm90YXRlKCR7XG4gICAgICAgICAgICAgICh0aGlzLm1vdmVQb3NYID09PSAnbGVmdCcgJiYgdGhpcy5tb3ZlUG9zWSA9PT0gJ3RvcCcpIHx8XG4gICAgICAgICAgICAgICh0aGlzLm1vdmVQb3NYID09PSAncmlnaHQnICYmIHRoaXMubW92ZVBvc1kgPT09ICdib3R0b20nKVxuICAgICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfTMwZGVnKSBgICtcbiAgICAgICAgICAgIGBzY2FsZSgxKWA7XG4gICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0sIDEwKTtcbiAgICAgIGNvbnNvbGUubG9nKGDmjInpiJXlnKggJHt0aGlzLmRheX0g6ZaD6YGO5LqG5L2gJHt0aGlzLmxhdWdoVGV4dCA/IGDvvIwke3RoaXMubGF1Z2hUZXh0fWA6ICcnfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTGVhdmUgPSB0cnVlO1xuICAgICAgdGhpcy50cmFuc2xhdGUgPSAnJztcbiAgICAgIHRoaXMuYnRuVHJhbnNsYXRlID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNMZWF2ZSkge1xuICAgICAgICAgIHRoaXMubW92ZVBvc1ggPSBudWxsO1xuICAgICAgICAgIHRoaXMubW92ZVBvc1kgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XG59XG5cblxuIl19