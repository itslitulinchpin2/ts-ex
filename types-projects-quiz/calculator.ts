/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add'|'substract'|'multiply'|'divide'|'remainder';
function calculate(opt:Command,input_1:number,input_2:number):number{
    switch(opt){
        case 'add':
            return (input_1+input_2);
            break;
        case "substract":
            return (input_1-input_2);
            break;
        case "multiply":
            return input_1*input_2;
            break;
        case "divide":
            return input_1/input_2;
            break;
        case "remainder":
            return input_1%input_2;
            break;
        default:
            throw Error('unknown command');
    }
}