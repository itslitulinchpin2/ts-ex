{
    const obj1 = {
        name:'lee',
        age:20
    }

    const obj2 = {
        animal:'kobe',
    }

    function getValue<T, K extends keyof T>(input:T, key:K): T[K]{
       return input[key];
    }

    console.log(getValue(obj1, 'name')); //lee
    console.log(getValue(obj2, 'animal')); //kobe
}