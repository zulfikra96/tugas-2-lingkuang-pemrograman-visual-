"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Question1Component = (function () {
    function Question1Component() {
        this.pupil = [
            { name: 'zulfikra', routine: 'menggambar' },
            { name: 'lahmudin', routine: 'menulis' },
            { name: 'abdjul', routine: 'bermain' }
        ];
        this.name = "";
        this.routine = "";
    }
    Question1Component.prototype.ngOnInit = function () {
        for (var row in this.pupil) {
            console.log(row);
        }
    };
    Question1Component.prototype.onNameChange = function (args) {
        var field = args.object;
        this.name = field.text;
    };
    Question1Component.prototype.onRoutineChange = function (args) {
        var field = args.object;
        this.routine = field.text;
    };
    Question1Component.prototype.tambah = function () {
        var name = { name: this.name, routine: this.routine };
        this.pupil.push(name);
        for (var row in this.pupil) {
            console.log(row);
        }
    };
    Question1Component = __decorate([
        core_1.Component({
            selector: 'question1-component',
            templateUrl: './components/question1/question1.component.html',
            styleUrls: ['./components/question1/question1.css']
        }),
        __metadata("design:paramtypes", [])
    ], Question1Component);
    return Question1Component;
}());
exports.Question1Component = Question1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24xLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9uMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFTakQ7SUFXSTtRQVRPLFVBQUssR0FBRztZQUNYLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsWUFBWSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsU0FBUyxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsU0FBUyxFQUFDO1NBQ3JDLENBQUE7UUFFTSxTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQTtJQUlsQixDQUFDO0lBRUYscUNBQVEsR0FBUjtRQUNJLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksS0FBSyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxLQUFLLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDN0IsQ0FBQztJQUlELG1DQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQXZDUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxxQkFBcUI7WUFDOUIsV0FBVyxFQUFDLGlEQUFpRDtZQUM3RCxTQUFTLEVBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNyRCxDQUFDOztPQUVXLGtCQUFrQixDQXdDOUI7SUFBRCx5QkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3F1ZXN0aW9uMS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOicuL2NvbXBvbmVudHMvcXVlc3Rpb24xL3F1ZXN0aW9uMS5jb21wb25lbnQuaHRtbCcsIFxuICAgIHN0eWxlVXJsczpbJy4vY29tcG9uZW50cy9xdWVzdGlvbjEvcXVlc3Rpb24xLmNzcyddICBcbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbjFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBwdWJsaWMgcHVwaWwgPSBbXG4gICAgICAgIHtuYW1lOid6dWxmaWtyYScsIHJvdXRpbmU6J21lbmdnYW1iYXInfSxcbiAgICAgICAge25hbWU6J2xhaG11ZGluJywgcm91dGluZTonbWVudWxpcyd9LFxuICAgICAgICB7bmFtZTonYWJkanVsJywgcm91dGluZTonYmVybWFpbid9ICAgICAgICBcbiAgICBdXG5cbiAgICBwdWJsaWMgbmFtZSA9IFwiXCJcbiAgICBwdWJsaWMgcm91dGluZSA9IFwiXCJcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBmb3IobGV0IHJvdyBpbiB0aGlzLnB1cGlsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTmFtZUNoYW5nZShhcmdzKXtcbiAgICAgICAgbGV0IGZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdFxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZC50ZXh0XG4gICAgfVxuXG4gICAgb25Sb3V0aW5lQ2hhbmdlKGFyZ3Mpe1xuICAgICAgICBsZXQgZmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0XG4gICAgICAgIHRoaXMucm91dGluZSA9IGZpZWxkLnRleHRcbiAgICB9XG5cbiAgICBcblxuICAgIHRhbWJhaCgpe1xuICAgICAgICBsZXQgbmFtZSA9IHtuYW1lOnRoaXMubmFtZSxyb3V0aW5lOnRoaXMucm91dGluZX1cbiAgICAgICAgdGhpcy5wdXBpbC5wdXNoKG5hbWUpXG4gICAgICAgIGZvcihsZXQgcm93IGluIHRoaXMucHVwaWwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocm93KVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==