var Car = /** @class */ (function () {
    function Car(carModel, carPrice, carBrand) {
        this.carModel = carModel;
        this.carPrice = carPrice;
        this.carBrand = carBrand;
        Car.cars.push(this);
    }
    Object.defineProperty(Car.prototype, "carmodel", {
        get: function () {
            return this.carModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carprice", {
        get: function () {
            return this.carPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carbrand", {
        get: function () {
            return this.carBrand;
        },
        enumerable: false,
        configurable: true
    });
    Car.getCarCount = function () {
        return Car.cars.length;
    };
    Car.display = function () {
        this.cars.forEach(function (car, index) {
            console.log("".concat(index + 1, ". ").concat(car.carBrand, " ").concat(car.carModel, " - ").concat(car.carPrice));
        });
    };
    Car.cars = [];
    return Car;
}());
var car1 = new Car("TATA CURVV", 79990, "Tata");
var car2 = new Car("MAHINDRA THAR", 35000, "Mahindra");
var car3 = new Car("KIA", 22000, "Kia");
var car4 = new Car("MARUTHI SWIFT", 200000, "Maruthi");
console.log("Total number of cars: ".concat(Car.getCarCount()));
Car.display();
