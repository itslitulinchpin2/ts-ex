{
    //JS
    //primitive : number,string,boolean,bigint,symbol,null,undefined
    //Object: function, array ...

    //number
    const num:number = 1 //정수, 소숫점 가능

    //string
    const str:string = 'hello';

    //boolean
    const bool:boolean = false;

    //undefined : 아무 것도 결정되지 않은 상태
    //optional한 상황에서 보편적으로 사용
    let age : number | undefined;
    age=undefined;
    age=1;
    
    function find() : number | undefined {
        return 1
    }

    //null : 텅텅 비었다고 명시된 상태
    let person: string | null;

    //unknown : 알 수 없는! (가능하면 쓰지 않는것이 좋음)
    let notSure:unknown = 0;
    notSure=true;
    notSure='he';

    //any : 어느것이나 담을 수 있는. (쓰지 않는 것이 좋다)
    let anything:any =0;
    anything='hello';

    //void : 아무것도 리턴하지 않을 때
    function print() : void {
        console.log('hello')
    }

    //never : 마찬가지로 리턴하는 값이 없다.
    function throwError(message: string) : never{
        //message->server(log)

        //에러를 던져서 앱을 죽이거나
        throw new Error(message);

        //무한루프를 돌때
        // while(true){}

    } 

    //object : 원시타입을 제외한 모든 옵젝트 타입
    //쓰지 않는 것이 좋음... 어떤 객체인지 명시하자
    let obj: object;
    function acceptSomeObject(obj:object){

    }
    acceptSomeObject({name:'lee'});
}