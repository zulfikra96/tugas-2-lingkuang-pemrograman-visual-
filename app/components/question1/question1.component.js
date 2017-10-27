"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Question1Component = (function () {
    function Question1Component() {
        this.pupil = [
            { nama: 'zulfikra', routine: 'menggambar' },
            { nama: 'lahmudin', routine: 'menggambar' },
            { nama: 'abdjul', routine: 'menggambar' }
        ];
        for (var row in this.pupil) { }
    }
    Question1Component.prototype.tambah = function () {
        var nama = { nama: 'haffina', routine: 'menulis' };
        this.pupil.push(nama);
    };
    Question1Component = __decorate([
        core_1.Component({
            selector: 'question1-component',
            templateUrl: './components/question1/question1.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], Question1Component);
    return Question1Component;
}());
exports.Question1Component = Question1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24xLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9uMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFPekM7SUFRSTtRQU5PLFVBQUssR0FBRztZQUNYLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsWUFBWSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsWUFBWSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsWUFBWSxFQUFDO1NBQ3hDLENBQUE7UUFHRSxHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFmUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxxQkFBcUI7WUFDOUIsV0FBVyxFQUFDLGlEQUFpRDtTQUNoRSxDQUFDOztPQUVXLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidxdWVzdGlvbjEtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDonLi9jb21wb25lbnRzL3F1ZXN0aW9uMS9xdWVzdGlvbjEuY29tcG9uZW50Lmh0bWwnLCAgIFxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uMUNvbXBvbmVudHtcblxuICAgIHB1YmxpYyBwdXBpbCA9IFtcbiAgICAgICAge25hbWE6J3p1bGZpa3JhJywgcm91dGluZTonbWVuZ2dhbWJhcid9LFxuICAgICAgICB7bmFtYTonbGFobXVkaW4nLCByb3V0aW5lOidtZW5nZ2FtYmFyJ30sXG4gICAgICAgIHtuYW1hOidhYmRqdWwnLCByb3V0aW5lOidtZW5nZ2FtYmFyJ30gICAgICAgIFxuICAgIF1cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgZm9yKGxldCByb3cgaW4gdGhpcy5wdXBpbCl7fVxuICAgIH1cblxuICAgIHRhbWJhaCgpe1xuICAgICAgICBsZXQgbmFtYSA9IHtuYW1hOidoYWZmaW5hJyxyb3V0aW5lOidtZW51bGlzJ31cbiAgICAgICAgdGhpcy5wdXBpbC5wdXNoKG5hbWEpXG4gICAgfVxufSJdfQ==