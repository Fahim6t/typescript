class User{
    private uId:string="fahim@gmail.com";
    private uPassword:string="@#$12345";

    get _uId(){
        return this.uId;
    }
    set _uId(val:any){
        this.uId = val;
    }

    get _uPassword(){
        return this.uPassword;
    }
    set _uPassword(val:any){
        this._uPassword = val;
    }

    userDetails(){
        return `UserId: ${this.uId} Password:${this.uPassword}`;
    }
}

let userObj = new User();
console.log(userObj._uId);
//userObj._uId='basha@gamil.com';


console.log(userObj._uId);
console.log(userObj._uPassword);

console.log(userObj.userDetails());