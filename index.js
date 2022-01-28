function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
    this.sayHello = function () {
        console.log(`${this.year} ${this.color} ${this.model}`)
    }
}

const razor = new Scooter(1998, blue, razor)
razor.sayHello

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}