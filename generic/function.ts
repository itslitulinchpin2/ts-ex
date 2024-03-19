{
    //숫자인지, 문자열인지, 널인지 타입별로 모두 만들어야할까?
    function checkNotNullBad(arg:number | null):number{
        if(arg==null){
            throw new Error('not valid number');
        }
        return arg;
    }

    //아래 함수는 반환 타입이 명시되지 않는 문제.
    function chechNotNullAnyBad(arg:any | null){
        if(arg==null){
            throw new Error('not valid number');
        }
        return arg;
    }

    //제네릭을 이용하여 문제를 해결하자.
    function checkNotNull<T>(arg: T | null):T{
        if(arg==null){
            throw new Error('not valid number');
        }
        return arg;
    }
    
    const number = checkNotNull(123);
    const string = checkNotNull('hi');
    const bool: boolean = checkNotNull(true);

    //제네릭을 사용하면 컴파일 시간에! 타입을 보장받을 수 있다.
    
}