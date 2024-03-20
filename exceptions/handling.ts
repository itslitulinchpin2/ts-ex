{//try catch를 하더라도
//유의미하게 error를 핸들링 할 수 있는 곳에서 사용해야 함.
//아래 코드에서는 app에서 에러를 처리하는 것이 가장 적절

class TimeoutError extends Error{}
class OfflineError extends Error{}

class NetworkClient {
    tryConnect():void{
        throw new OfflineError('no network!')
    }

}

class UserService{
    constructor(private client:NetworkClient){}

    login(){
       
        this.client.tryConnect();
        //login...
       
    }
}

class App{
    constructor(private userService:UserService){}
    run(){
        try{
        this.userService.login();
        } catch(error){
            //App 클래서에서 에러를 처리하는 것이 가장 효율적
            //show dialog to user;
            console.log('catched')
            //단점! error가 any type으로 받아짐
            //-> instanceof로 에러 처리를 따로 할 수 없다.
            //그렇기에 error state를 사용하는 것이 현명
            
        }
    }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();

}