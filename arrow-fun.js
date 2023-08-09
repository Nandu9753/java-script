console.log("Arrow function");
const sum = (a,b) =>{
    return a+b;
}
console.log("sum of: "+ sum(4,6));
// sum of: 10

const name = name => "hello "+ name; // two and more than argument not pass without parenthisis
console.log(name("johny"));
// hello johny

const user = (name,city) => "hello "+ name+" and he is live in " +city;
console.log(user("ram",'bhopal'));
// hello ram and he is live in bhopal

let names = ['John', 'Mac', 'Peter'];
let length = names.map(name => name.length);
console.log(length);
// [ 4, 3, 5 ]

// const setColor = color => {value:color};
// undefined
const setColor = color => ({value:color});
console.log(setColor("black"));
// { value: 'black' }
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function () {
            console.log(this.speed); // undefined
            console.log(self.speed)   // 50
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50);
function Bus() {
    this.speed = 0;
    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log("bus speed:" + this.speed), // 100
            1000);

    };
}
let bus = new Bus();
bus.speedUp(100);