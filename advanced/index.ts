{
    const obj = {
        name:'lee'
    }
    // obj.name;
    // obj['name']

    //Type 또한 인덱스 기반으로 결정할 수 있다!

    type Animal = {
        name:string,
        age:number,
        gender: 'male'|'female'
    }

    type Name = Animal['name'] // string type
    const text:Name = 'hello'

    type Gender = Animal['gender']; //'male'|'female'

    type Keys = keyof Animal; //'name'|'gender'|'age'

    const key:Keys = 'name';


    type Person = {
        name:String;
        gender:Animal['gender'];
    }

    const person:Person = {
        name:'park',
        gender:'female'
    }

}