{
    //Type Assertion : 썩 좋은 방식은 아님

    function jsStrFunc():any{
        return 'hello'
    }

    const result = jsStrFunc();
    
    //assertion 예시
    //console.log((result as string).length);
    //console.log(<string>result.length);

   //assertion은 확실하지 않은 경우 쓰지 않는 것이 좋다!

   function findNumbers() : number[] | undefined{
    return undefined;
   }

   const numbers = findNumbers();
   // numbers!.push(2); //잘못된 assertion. error발생
   console.log(numbers);
}