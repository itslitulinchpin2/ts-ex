const x = {};
const y = {};
console.log(x.__proto__===y.__proto__); //true

const array = [];
console.log(array.__proto__);

function CoffeeMachine(beans){
    this.beans=beans;

    //아래 함수는 instance member level.
    // this.makeCoffee=shots=>{
    //     console.log('making coffee...')
    // }
}

//Prototype member level
//__proto__ 안에 makeCoffee가 정의됨.
CoffeeMachine.prototype.makeCoffee = (shots)=>{
    console.log('making coffee...')
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk){
    this.milk=milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
