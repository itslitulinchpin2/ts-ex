{
    interface Employee {
        pay():void;
    }

    class FullTeimEmployee implements Employee{
        pay(){
            console.log(`Full time!`);
        }    
        workFullTime(){

        }
    }

    class PartTimeEmployee implements Employee{
        pay(){
            console.log(`Part time!`);   
        }
        workPartTime(){

        }
    }

    //세부적인 타입을 인자로 받아, 추상 타입으로 리턴
    //아주 좋지 않음
    function pay(employee:Employee):Employee{
        employee.pay();
        return employee;
    }


    const lee = new FullTeimEmployee();
    const park = new PartTimeEmployee();
    
    lee.workFullTime();
    park.workPartTime();

    // const leeAfterPay = pay(lee);
    // const parkAfterPay = pay (park);

    //이 상태에서는 leeAfterPay.workPartTime()이 불가능!
    //pay의 반환형이 인터페이스이기 때문에 pay()함수밖에 없다.
    //즉, 상세 클래스 정보를 잃음
    //제네릭으로 해결할 수 있음.


    //제약 조건을 붙힌 제네릭 함수
    function goodPay<T extends Employee>(employee:T):T{
        employee.pay();
        return employee;
    }

}

