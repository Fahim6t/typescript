var PDetails = /** @class */ (function () {
    function PDetails(name, age) {
        this.pName = name;
        this.pAge = age;
    }
    PDetails.prototype.details = function () {
        return "Person Name:".concat(this.pName, " and Age:").concat(this.pAge);
    };
    return PDetails;
}());
var delObj = new PDetails("Fahim", 24);
console.log(delObj.details());
