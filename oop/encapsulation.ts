{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }

    class CoffeeMaker {

        private static BEANS_GRAM_PER_SHOT:number = 7; //클래스  레벨
        //앞으로 접근하려면 클래스이름.변수명 으로 접근해야함


        private coffeeBeans: number = 0; //인스턴스 레벨

        private constructor(coffeeBeans:number){
            this.coffeeBeans=coffeeBeans;

        }

        static makeMachine(coffeeBeans: number):CoffeeMaker{
          return new CoffeeMaker(coffeeBeans);  
        }

        fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans+=beans;
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

    const maker1 = CoffeeMaker.makeMachine(32);
    maker1.fillCoffeeBeans(32);
    console.log(maker1);


    class User{
        
        get fullName():string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge=3;
        get age():number{
            return this.internalAge;
        }
        set age(num:number){
            this.internalAge=num;
        }
        //컨스트럭터에 접근자를 붙혀주면 알아서 멤버변수로 할당함!
        constructor(private firstName:string,private lastName:string){
            
        }
        
    }
    const user = new User('David','Fincher')
    console.log(user.fullName);
    console.log(user.age);
    user.age=6;
    console.log(user.age);
    

}