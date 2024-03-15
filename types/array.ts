{
    //Array : 두가지 방식이 있다.
    const fruits: string[] = ['apple','banana'];
    const scores: Array<number> = [10,20];

    //원본 보장을 위한 readonly를 사용하려면 string[]형태로
    function printArray(fruits: readonly string[]){
        fruits.forEach((fruit)=>console.log(fruit));
    }

    //Tuple : 배열 안의 타입이 서로 다름!
    //->interfact, type alias, class로 대체해서 사용하는게 낫다.
    //서로 다른 타입의 데이터를 담을 수 있다!

    let student: [string,number];
    student = ['park',1];
    
    const [name,age] = student;
    
}