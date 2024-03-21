function simpleFunc(){
    console.log(this); //브라우저에서는 window
}


class Counter {
    count = 0;
    increase = function (){
        console.log(this);
    }

    //increase = ()=>{console.log(this)}
}

const counter = new Counter();
counter.increase(); //this는 Counter

const caller = counter.increase;
caller(); //this는 undefined, Couter가 아님
//함수는 window에(글로벌 객체에) 등록되지만,
//let이나 const로 선언한 변수는 윈도우에 등록되지 않는다.
//따라서 위에서는 undefined를 출력

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this는 Bob을 출력!! 밥이 불렀기 때문


//따라서 JS에서 this정보를 제대로 쓰려면
//bind로 묶어주어야 한다.

const caller2 = counter.increase.bind(counter);
caller2(); // bind했으므로 this는 Counter

//bind를 쓰지 않으려면, 클래스에서 메소드를 
//arrow function으로 처리해도 된다.
//화살표 함수는 문맥을 유지시킨다.
