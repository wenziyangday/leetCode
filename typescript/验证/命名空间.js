var Utility;
(function (Utility) {
    function log(msg) {
        console.log(msg);
    }
    Utility.log = log;
    function error(err) {
        console.log(err);
    }
    Utility.error = error;
})(Utility || (Utility = {}));
Utility.error('klk');
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        console.log(s, 'implement');
        return false;
    };
    return LettersOnlyValidator;
}());
var lettersOnlyValidator = new LettersOnlyValidator();
lettersOnlyValidator.isAcceptable('kk');
var Validation;
(function (Validation) {
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            console.log(s);
            return false;
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
var validation = new Validation.LettersOnlyValidator();
validation.isAcceptable('命名空间处理');
