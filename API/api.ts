//두가지 every api


type Student = {
    passed:boolean
}

const students:Student[] = [{passed:true},{passed:true},{passed:false}];

//한 번이라도 false가 나오면 false가 된다.
const result = students.every(student=>student.passed);
//console.log(result);

class Animal{

}

class Cat extends Animal{
    isCat:boolean=true;
}

class Dog extends Animal{
    isDog:boolean=true;
}

function isCat(animal:Animal): animal is Cat{
    return(animal as Cat).isCat !==undefined;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

console.log(animals.every<Cat>((isCat)));

