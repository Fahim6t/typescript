var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        this.setCelsius(celsius);
    }
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this.celsius * 9 / 5 + 32;
        },
        enumerable: false,
        configurable: true
    });
    Temperature.prototype.setCelsius = function (celsius) {
        if (celsius < -273.15) {
            throw new Error("Temperature cannot be below -273.15°C (absolute zero).");
        }
        this.celsius = celsius;
    };
    Temperature.prototype.getCelsius = function () {
        return this.celsius;
    };
    return Temperature;
}());
try {
    var temp = new Temperature(25);
    console.log("Fahrenheit: ".concat(temp.fahrenheit));
    temp.setCelsius(100);
    console.log("Updated Fahrenheit: ".concat(temp.fahrenheit));
    temp.setCelsius(-300);
}
catch (error) {
    console.error(error.message);
}
