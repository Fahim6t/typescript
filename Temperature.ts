class Temperature {
    private celsius: number;
    constructor(celsius: number) {
        this.setCelsius(celsius);
    }
    get fahrenheit(): number {
        return this.celsius * 9 / 5 + 32;
    }
    setCelsius(celsius: number): void {
        if (celsius < -273.15) {
            throw new Error("Temperature cannot be below -273.15°C (absolute zero).");
        }
        this.celsius = celsius;
    }
    getCelsius(): number {
        return this.celsius;
    }
}
try {
    const temp = new Temperature(25); 
    console.log(`Fahrenheit: ${temp.fahrenheit}`); 
    temp.setCelsius(100); 
    console.log(`Updated Fahrenheit: ${temp.fahrenheit}`);
    temp.setCelsius(-300); 
} catch (error) {
    console.error(error.message);
}