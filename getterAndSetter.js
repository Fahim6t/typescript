var User = /** @class */ (function () {
    function User() {
        this.uId = "fahim@gmail.com";
        this.uPassword = "@#$12345";
    }
    Object.defineProperty(User.prototype, "_uId", {
        get: function () {
            return this.uId;
        },
        set: function (val) {
            this.uId = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_uPassword", {
        get: function () {
            return this.uPassword;
        },
        set: function (val) {
            this._uPassword = val;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.userDetails = function () {
        return "UserId: ".concat(this.uId, " Password:").concat(this.uPassword);
    };
    return User;
}());
var userObj = new User();
console.log(userObj._uId);
//userObj._uId='basha@gamil.com';
console.log(userObj._uId);
console.log(userObj._uPassword);
console.log(userObj.userDetails());
