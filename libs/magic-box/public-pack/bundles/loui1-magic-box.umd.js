(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('dayjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@loui1/magic-box', ['exports', '@angular/core', 'dayjs', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.loui1 = global.loui1 || {}, global.loui1["magic-box"] = {}), global.ng.core, global.dayjs, global.ng.common));
})(this, (function (exports, core, dayjs, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var dayjs__namespace = /*#__PURE__*/_interopNamespace(dayjs);

    var MagicBtnComponent = /** @class */ (function () {
        function MagicBtnComponent(cdRef) {
            this.cdRef = cdRef;
            this.laughText = 'HaHa';
            this.probability = 100;
            this.isHover = false;
            this.isLeave = true;
            this.translate = '';
            this.btnTranslate = '';
            this.movePosX = null;
            this.movePosY = null;
            this.day = dayjs__namespace().format('YYYY-MM-DD HH:mm');
        }
        MagicBtnComponent.prototype.check = function () {
            return Math.random() * 100 < this.probability;
        };
        MagicBtnComponent.prototype.setIsHover = function (isHover) {
            var _this = this;
            this.isHover = isHover;
            if (isHover && this.check()) {
                this.movePosX = null;
                this.movePosY = null;
                this.isLeave = false;
                this.movePosX = ['left', 'right'][~~(Math.random() * 2)];
                this.movePosY = ['top', 'bottom'][~~(Math.random() * 2)];
                setTimeout(function () {
                    var translateX = "" + (_this.movePosX === 'left' ? '-' : '');
                    var translateY = "" + (_this.movePosY === 'top' ? '-' : '');
                    _this.btnTranslate = "translate(" + translateX + (50 + Math.random() * 50) + "%, " + translateY + (50 + Math.random() * 50) + "%)";
                    _this.cdRef.markForCheck();
                    setTimeout(function () {
                        _this.translate =
                            "translate(" + translateX + "50%, " + translateY + "100%) " +
                                ("rotate(" + ((_this.movePosX === 'left' && _this.movePosY === 'top') ||
                                    (_this.movePosX === 'right' && _this.movePosY === 'bottom')
                                    ? '-'
                                    : '') + "30deg) ") +
                                "scale(1)";
                        _this.cdRef.markForCheck();
                    }, 500);
                }, 10);
                console.log("\u6309\u9215\u5728 " + this.day + " \u9583\u904E\u4E86\u4F60" + (this.laughText ? "\uFF0C" + this.laughText : ''));
            }
            else {
                this.isLeave = true;
                this.translate = '';
                this.btnTranslate = '';
                setTimeout(function () {
                    if (_this.isLeave) {
                        _this.movePosX = null;
                        _this.movePosY = null;
                        _this.cdRef.markForCheck();
                    }
                }, 300);
            }
        };
        return MagicBtnComponent;
    }());
    MagicBtnComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-magic-btn',
                    template: "<div\n  class=\"btn-container\"\n  (mouseenter)=\"setIsHover(true)\"\n  (mouseleave)=\"setIsHover(false)\"\n>\n  <div\n    class=\"btn\"\n    [ngStyle]=\"{ 'transform': btnTranslate }\"\n  >\n\n    <div\n      class=\"laugh-text {{movePosX}} {{movePosY}} {{isLeave ? 'leave' : ''}}\"\n      [ngStyle]=\"{ 'transform': translate }\"\n    >{{laughText}}</div>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".btn-container .btn{display:flex;align-items:center;justify-content:center;position:relative;transition:transform .2s}.btn-container .btn .laugh-text{color:#fff;font-size:12px;padding:8px 10px;border-radius:20px;background-color:#00000080;position:absolute;transition:transform .2s}.btn-container .btn .laugh-text.left{left:0px}.btn-container .btn .laugh-text.right{right:0px}.btn-container .btn .laugh-text.top{top:0px;transform-origin:bottom center}.btn-container .btn .laugh-text.top:before{border-width:8px 4px 0 4px;border-color:rgba(0,0,0,.5) transparent transparent transparent;bottom:-3px;transform:translate(-50%,5px)}.btn-container .btn .laugh-text.bottom{bottom:0px;transform-origin:top center}.btn-container .btn .laugh-text.bottom:before{border-width:0 4px 8px 4px;border-color:transparent transparent rgba(0,0,0,.5) transparent;top:-3px;transform:translate(-50%,-5px)}.btn-container .btn .laugh-text.left.top{transform:translate(-50%,-100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.left.bottom{transform:translate(-50%,100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.right.top{transform:translate(50%,-100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.right.bottom{transform:translate(50%,100%) rotate(0) scale(0)}.btn-container .btn .laugh-text.leave{transform:translate(0) rotate(0) scale(0)!important}.btn-container .btn .laugh-text:before{content:\"\";display:block;width:0;height:0;color:transparent;border-style:solid;position:absolute;left:50%}\n"]
                },] }
    ];
    MagicBtnComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    MagicBtnComponent.propDecorators = {
        laughText: [{ type: core.Input }],
        probability: [{ type: core.Input }]
    };

    var MagicBoxModule = /** @class */ (function () {
        function MagicBoxModule() {
        }
        return MagicBoxModule;
    }());
    MagicBoxModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
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

    exports.MagicBoxModule = MagicBoxModule;
    exports.MagicBtnComponent = MagicBtnComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=loui1-magic-box.umd.js.map
