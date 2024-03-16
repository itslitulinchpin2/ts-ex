{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }

    class CoffeeMaker {

        static BEANS_GRAM_PER_SHOT:number = 7; //클래스  레벨
        //앞으로 접근하려면 클래스이름.변수명 으로 접근해야함


        coffeeBeans: number = 0; //인스턴스 레벨

        constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;

        }

        static makeMachine(coffeeBeans: number):CoffeeMaker{
          return new CoffeeMaker(coffeeBeans);  
        }

        makeCoffee(shots:number):CoffeeCup {
            if (this.coffeeBeans<shots*CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans-=shots*CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots, //shots:shots, :동일한 경우 생략가능
                hasMilk:false
            }
        } 

    }

    const maker1 = new CoffeeMaker(32);
    console.log(maker1);
    const maker2 = CoffeeMaker.makeMachine(16);
    console.log(maker2);
}