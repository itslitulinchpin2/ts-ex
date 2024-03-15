{
    //JS
    // function jsAdd(num1,num2){
    //     return num1+num2;
    // }

    //TS
    function add(num1:number,num2:number):number{
        return num1+num2
    }

    //JS
    // function jsFetchNum(id){
    //     //code ...
    //     //code ...
    //     //code ...
    //     return new Promise((resolve,reject)=>{
    //         resolve(100);
    //     })
    // }

    //TS
    function fetchNum(id:string):Promise<number>{
        //...
        return new Promise((resolve,reject)=>{
            resolve(100);
        })
    }
    //TypeScript에서 resolve와 reject의 타입을 따로 지정해 주지 않아도 됩니다. 
    //이는 TypeScript의 타입 추론 기능을 통해 가능합니다.


    //JS => TS
    //Optional parameter : ?를 사용하자!
    //?의 값이 전달되지 않으면 알아서 undefined로 간주함
    function printName(firstName:string,lastName?:string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve','Jobs');
    printName('Bong');

    //Default parameter
    //파라미터 전달하지 않으면 기본값으로 간주함
    function printMessage(message:string = 'default message'){
        console.log(message);
    }
    printMessage();

    //Rest parameter
    function addNumbers(...numbers:number[]):number{
        return numbers.reduce((total:number,num)=>total+num,0)
    }
    console.log(addNumbers(1,2,3));

    

}