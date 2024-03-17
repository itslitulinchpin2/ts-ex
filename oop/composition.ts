{
    type CoffeeCup = {
        shots:number;
        hasMilk?:boolean;
        hasSugar?:boolean;
    }
    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup;
    }
    interface SugarProvider {
        addSugar(cup:CoffeeCup):CoffeeCup;
    }

    //싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(){
            //Assume Complicated logic...
            console.log('steaming milk....')
        }
        makeMilk(cup: CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true
            }
        }
    }

    //고급 우유 거품기
      class FancyMilkSteamer implements MilkFrother {
        private steamMilk(){
            //Assume Complicated logic...
            console.log('Fancy steaming milk....')
        }
        makeMilk(cup: CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true
            }
        }
    }

    //최고급 우유 거품기
    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(){
            //Assume Complicated logic...
            console.log('Fancy steaming milk....')
        }
        makeMilk(cup: CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true
            }
        }
    }

    //우유 없는 경우
    class NoMilk implements MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup{
            return cup;
        }
    }

    //설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSugar(){
            //Assume Complicated logic...
            console.log('getting sugar from candy')
            return true;
        }

        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar:true
            }
        }   
    }

    //고급설탕제조기
    class SugarMixer implements SugarProvider {
        private getSugar(){
            //Assume Complicated logic...
            console.log('getting sugar from jar')
            return true;
        }

        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar:true
            }
        }   
    }

    //설탕 없는 경우
    class NoSugar implements SugarProvider{
        addSugar(cup:CoffeeCup):CoffeeCup{
            return cup;
        }
    }
    


    class CoffeeMachine implements CoffeeMaker {

        protected static BEANS_GRAM_PER_SHOT:number = 7; //클래스  레벨
        //앞으로 접근하려면 클래스이름.변수명 으로 접근해야함


        protected coffeeBeans: number = 0; //인스턴스 레벨

        public constructor(coffeeBeans:number,
            private milk: MilkFrother,
            private sugar: SugarProvider){
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

        protected extract(shots:number):CoffeeCup{
            console.log(`pulling ${shots} shots...`);
            return {
                shots, //shots:shots, :동일한 경우 생략가능
                hasMilk:false
            }
        }
        protected clean(){
            console.log('cleaning...');
                }


        makeCoffee(shots:number):CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee= this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        } 


    }

    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMiklMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    //Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //Machine
    const sweetCandyMachine = new CoffeeMachine(12,noMilk,candySugar);
    const sweetMachine = new CoffeeMachine(12,noMilk,sugar);

    const latteMachine = new CoffeeMachine(12,cheapMilkMaker,noSugar);
    const coldLatteMachine = new CoffeeMachine(12,coldMilkMaker,noSugar);

    const sweetLatteMachine = new CoffeeMachine(12,coldMilkMaker,sugar);
   
}