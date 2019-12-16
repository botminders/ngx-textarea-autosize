import * as tslib_1 from "tslib";
import { AfterViewInit, Directive, ElementRef, HostListener, Input, HostBinding, DoCheck, Renderer2 } from '@angular/core';
var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.overflow = 'hidden';
        this.rows = 1;
    }
    AutosizeDirective.prototype.ngAfterViewInit = function () {
        this.resize();
    };
    AutosizeDirective.prototype.ngDoCheck = function () {
        this.resize();
    };
    AutosizeDirective.prototype.resize = function () {
        var textarea = this.elem.nativeElement;
        // Calculate border height which is not included in scrollHeight
        var borderHeight = textarea.offsetHeight - textarea.clientHeight;
        // Reset textarea height to auto that correctly calculate the new height
        this.setHeight('auto');
        // Set new height
        this.setHeight(textarea.scrollHeight + borderHeight + "px");
    };
    AutosizeDirective.prototype.setHeight = function (value) {
        this.renderer.setStyle(this.elem.nativeElement, 'height', value);
    };
    AutosizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        HostBinding('style.overflow')
    ], AutosizeDirective.prototype, "overflow", void 0);
    tslib_1.__decorate([
        Input(),
        HostBinding('rows')
    ], AutosizeDirective.prototype, "rows", void 0);
    tslib_1.__decorate([
        HostListener('input')
    ], AutosizeDirective.prototype, "resize", null);
    AutosizeDirective = tslib_1.__decorate([
        Directive({
            selector: 'textarea[autosize]'
        })
    ], AutosizeDirective);
    return AutosizeDirective;
}());
export { AutosizeDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRleHRhcmVhLWF1dG9zaXplLyIsInNvdXJjZXMiOlsiYXV0b3NpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUt2QjtJQVFFLDJCQUFvQixJQUFnQixFQUFVLFFBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTjFELGFBQVEsR0FBRyxRQUFRLENBQUM7UUFJcEIsU0FBSSxHQUFHLENBQUMsQ0FBQztJQUVvRCxDQUFDO0lBRTlELDJDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBR00sa0NBQU0sR0FBYjtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBb0MsQ0FBQztRQUNoRSxnRUFBZ0U7UUFDaEUsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ25FLHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFJLFFBQVEsQ0FBQyxZQUFZLEdBQUcsWUFBWSxPQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8scUNBQVMsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBdkJ5QixVQUFVO2dCQUFvQixTQUFTOztJQU5qRTtRQURDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzt1REFDSDtJQUkzQjtRQUZDLEtBQUssRUFBRTtRQUNQLFdBQVcsQ0FBQyxNQUFNLENBQUM7bURBQ0o7SUFhaEI7UUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDO21EQVNyQjtJQTNCVSxpQkFBaUI7UUFIN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDO09BQ1csaUJBQWlCLENBZ0M3QjtJQUFELHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FoQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgRG9DaGVjayxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9zaXplRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjayB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cnKVxuICBwdWJsaWMgb3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ3Jvd3MnKVxuICBwdWJsaWMgcm93cyA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBwdWJsaWMgcmVzaXplKCkge1xuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAvLyBDYWxjdWxhdGUgYm9yZGVyIGhlaWdodCB3aGljaCBpcyBub3QgaW5jbHVkZWQgaW4gc2Nyb2xsSGVpZ2h0XG4gICAgY29uc3QgYm9yZGVySGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0IC0gdGV4dGFyZWEuY2xpZW50SGVpZ2h0O1xuICAgIC8vIFJlc2V0IHRleHRhcmVhIGhlaWdodCB0byBhdXRvIHRoYXQgY29ycmVjdGx5IGNhbGN1bGF0ZSB0aGUgbmV3IGhlaWdodFxuICAgIHRoaXMuc2V0SGVpZ2h0KCdhdXRvJyk7XG4gICAgLy8gU2V0IG5ldyBoZWlnaHRcbiAgICB0aGlzLnNldEhlaWdodChgJHt0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBib3JkZXJIZWlnaHR9cHhgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SGVpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdmFsdWUpO1xuICB9XG59XG4iXX0=