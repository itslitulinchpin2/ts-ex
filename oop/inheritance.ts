{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }
    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }


    class CoffeeMachine implements CoffeeMaker {

        protected static BEANS_GRAM_PER_SHOT:number = 7; //클래스  레벨
        //앞으로 접근하려면 클래스이름.변수명 으로 접근해야함


        protected coffeeBeans: number = 0; //인스턴스 레벨

        public constructor(coffeeBeans:number){
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

        protected extract(shots:number):CoffeeCup{
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

    class CaffeeLatteMachine extends CoffeeMachine {
        constructor(beans:number, private readonly serial:number){
            super(beans);

        }
        private steamMilk(){
            console.log('steaming milk....')
        }
        makeCoffee(shots:number):CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            console.log('serial: ',this.serial)
            return {...coffee, hasMilk:true}
        } 
    }
    
    const generalMaker = new CoffeeMachine(23);
    console.log(generalMaker.makeCoffee(2));
    const latteMaker = new CaffeeLatteMachine(23,1);
    console.log(latteMaker.makeCoffee(2));

   
}