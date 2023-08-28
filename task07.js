var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.addAll = function (nums) {
        var total = 0;
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var num = nums_1[_i];
            total += num;
        }
        return total;
    };
    return Calculator;
}());
