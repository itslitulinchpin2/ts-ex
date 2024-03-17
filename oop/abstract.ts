{
    type CoffeeCup = {
        shots:number;
        hasMilk?:boolean;
        hasSugar?:boolean;
    }
    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }


    abstract class CoffeeMachine implements CoffeeMaker {

        protected static BEANS_GRAM_PER_SHOT:number = 7; //클래스  레벨
        //앞으로 접근하려면 클래스이름.변수명 으로 접근해야함


        protected coffeeBeans: number = 0; //인스턴스 레벨

        public constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;

        }

        fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans+=beans;
        }

        protected grindBeans(shots:number){
            console.log(`grinding beans for ${shots}shots`);
            if(this.coffeeBeans<shots*CoffeeMachine.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots;

        }

        protected preheat(){
            console.log('heating..!')
        }

        protected abstract extract(shots:number):CoffeeCup
        

        makeCoffee(shots:number):CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        } 
        clean(){
            console.log('cleaning...');
                }

    }

    class CaffeeLatteMachine extends CoffeeMachine {
        constructor(beans:number, private readonly serial:number){
            super(beans);

        }
        private steamMilk(){
            console.log('steaming milk....')
        }
        protected extract(shots:number):CoffeeCup {
            this.steamMilk();
            return {shots, hasMilk:true}
        }

    }

    class SweetCoffeMaker extends CoffeeMachine{
    

        protected extract(shots:number):CoffeeCup {
            
            return {shots, hasSugar:true}
        }


    }
    
   const machines : CoffeeMaker[]= [
   
    new CaffeeLatteMachine(30,1),
    new SweetCoffeMaker(30)
   ]
   machines.forEach((machine)=>{
    console.log('---------------------')
    console.log(machine.makeCoffee(2));
   })

   
}