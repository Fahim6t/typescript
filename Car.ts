class Car{
    static cars : Car[] = [];
 
    constructor(private carModel:string,private carPrice:number,private carBrand:string){
        Car.cars.push(this);
    }
 
    get carmodel(){
        return this.carModel;
    }
 
    get carprice(){
        return this.carPrice;
    }
 
    get carbrand(){
        return this.carBrand;
    }
 
    static getCarCount(): number {
        return Car.cars.length;
    }

    static display(){
        this.cars.forEach((car, index) => {
            console.log(`${index + 1}. ${car.carBrand} ${car.carModel} - ${car.carPrice}`);
        });
    }
}
 
let car1 = new Car("TATA CURVV", 79990, "Tata");
let car2 = new Car("MAHINDRA THAR", 35000, "Mahindra");
let car3 = new Car("KIA", 22000, "Kia");
let car4 = new Car("MARUTHI SWIFT", 200000, "Maruthi");
 
console.log(`Total number of cars: ${Car.getCarCount()}`);
Car.display();