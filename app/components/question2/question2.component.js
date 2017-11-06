"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Question2Component = (function () {
    function Question2Component() {
        this.numb = [30, 60];
    }
    Question2Component.prototype.add = function () {
        var numb = this.entryNumb;
        this.numb.push(numb);
        console.log(numb);
    };
    Question2Component.prototype.entryNumber = function (args) {
        var numb = args.object;
        var entry = parseInt(numb.text);
        if (entry === 0) {
            var number = Math.max.apply(Math, this.numb);
            alert("nilai terbesar adalah " + " " + number);
        }
        this.entryNumb = entry;
    };
    Question2Component = __decorate([
        core_1.Component({
            selector: 'question2-component',
            templateUrl: './components/question2/question2.component.html',
        })
    ], Question2Component);
    return Question2Component;
}());
exports.Question2Component = Question2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9uMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFRakQ7SUFMQTtRQVFJLFNBQUksR0FBRyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQW9CbEIsQ0FBQztJQWpCRyxnQ0FBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksSUFBSSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDakMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUvQixFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFBO1FBQ2xELENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUMxQixDQUFDO0lBckJRLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLHFCQUFxQjtZQUM5QixXQUFXLEVBQUMsaURBQWlEO1NBQ2hFLENBQUM7T0FFVyxrQkFBa0IsQ0F1QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidxdWVzdGlvbjItY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDonLi9jb21wb25lbnRzL3F1ZXN0aW9uMi9xdWVzdGlvbjIuY29tcG9uZW50Lmh0bWwnLCBcbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbjJDb21wb25lbnR7XG5cblxuICAgIG51bWIgPSBbMzAsNjBdXG4gICAgZW50cnlOdW1iIDogbnVtYmVyXG5cbiAgICBhZGQoKXtcbiAgICAgICAgbGV0IG51bWIgPSB0aGlzLmVudHJ5TnVtYlxuICAgICAgICB0aGlzLm51bWIucHVzaChudW1iKVxuICAgICAgICBjb25zb2xlLmxvZyhudW1iKVxuICAgIH1cblxuICAgIGVudHJ5TnVtYmVyKGFyZ3Mpe1xuICAgICAgICBsZXQgbnVtYiA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3RcbiAgICAgICAgbGV0IGVudHJ5ID0gcGFyc2VJbnQobnVtYi50ZXh0KVxuXG4gICAgICAgIGlmKGVudHJ5ID09PSAwKXtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLm1heCguLi50aGlzLm51bWIpXG4gICAgICAgICAgICBhbGVydChcIm5pbGFpIHRlcmJlc2FyIGFkYWxhaCBcIiArIFwiIFwiICsgbnVtYmVyKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cnlOdW1iID0gZW50cnlcbiAgICB9XG5cbn0iXX0=