{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }
    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    interface CommercialCoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans:number):void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker {

        private static BEANS_GRAM_PER_SHOT:number = 7; //클래스  레벨
        //앞으로 접근하려면 클래스이름.변수명 으로 접근해야함


        private coffeeBeans: number = 0; //인스턴스 레벨

        private constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;

        }

        static makeMachine(coffeeBeans: number):CoffeeMachine{
          return new CoffeeMachine(coffeeBeans);  
        }

        fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans+=beans;
        }

        private grindBeans(shots:number){
            console.log(`grinding beans for ${shots}shots`);
            if(this.coffeeBeans<shots*CoffeeMachine.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots;

        }

        private preheat(){
            console.log('heating..!')
        }

        private extract(shots:number):CoffeeCup{
            console.log(`pulling ${shots} shots...`);
            return {
                shots, //shots:shots, :동일한 경우 생략가능
                hasMilk:false
            }
        }

        makeCoffee(shots:number):CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        } 
        clean(){
            console.log('cleaning...');
                }

    }
  

    class AmateurUser{
        constructor(private machine: CoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProUser{
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(3);
            console.log(coffee);
            this.machine.fillCoffeeBeans(32);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(100);
    const amateur = new AmateurUser(maker);
    const pro = new ProUser(maker);
    pro.makeCoffee();

}