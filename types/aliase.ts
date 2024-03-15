{
    //Type Aliases
    //타입을 만들 수 있다!

    type Text = string;
    const name : Text = 'lee';

    type Student = {
        name:string;
        age:number;
    }

    const student:Student = {
        name: 'park',
        age:12
    }

    //String Literal Types
    type Name = 'name';
    let parkName : Name;
    
    //parkName에는 Name타입의 값인 'name'만 할당 가능
    parkName='name';
}