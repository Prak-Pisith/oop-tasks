var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getLogger = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.logMsg = function (msg) {
        console.log("Message Logs: ".concat(msg));
    };
    Logger.instance = null;
    return Logger;
}());
var logger1 = Logger.getLogger();
var logger2 = Logger.getLogger();
console.log(logger1 === logger2);
