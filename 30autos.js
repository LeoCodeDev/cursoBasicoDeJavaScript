let brands = ['Ford', 'Chevrolet', 'Fiat'];
let models = ['GT', 'Utilitary', 'Van', 'Cargo', 'Compact']
let cars   = [];
let randomBrand = rand(0, 2);
let randomModel = rand(0, 4);
let randomYear  = rand(0, 27);

function rand(a, b){
    let ran = Math.floor(Math.random() * (a - b + 1)) + b;
    return ran;
}

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year  = year;
}

for(i = 0 ; i < 30; i++){
    let randomBrand = rand(0, 3);
    let randomModel = rand(0, 5);
    let randomYear  = rand(0, 27);
    function rand(a, b){
        let ran = Math.floor(Math.random() * (a - b)) + b;
        return ran;
    }
    cars.push( new car(brands[randomBrand], models[randomModel], 1995 + randomYear));
}

console.log(cars);

let carsFilter = cars.filter(function(vehicle){
    return vehicle.model == 'GT'
});

console.log(carsFilter)

let carsMap = cars.map(function(vehicle){
    return vehicle.model
});

console.log(carsMap);

let carsFind = cars.find(function(vehicles){
    return vehicles.brand === 'Fiat'
});

console.log(carsFind);