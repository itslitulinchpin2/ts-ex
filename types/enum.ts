{
    //관련된 상수값을 관리하기!

    //JS에서는 Enum타입이 존재하지 않음

    //따라서 다음과 같이 코딩할 수 있음
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNEDSDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, })
    
    const today = DAYS_ENUM.MONDAY;

    //TS에서는 Enum을 사용할 수 있다.
    enum Days {
        Monday, //0
        Tuesday, //1
        Wednesday, //2 ... 최초값을 수동으로 설정할 수도 있음.
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Monday);

   //하지만 차라리 union type을 쓰는 것이 나음  

}