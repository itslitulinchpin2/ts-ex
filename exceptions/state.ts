{


type SuccessState = {
    result:'success'
}

type NetworkErrorState = {
    result:'fail';
    reason: 'offline'|'down'|'timeout'
}

type ResultState= SuccessState | NetworkErrorState;

class NetworkClient {
    tryConnect():ResultState {
        return {
            result:'fail',
            reason:'offline'
        }
    }

}

class UserService{
    constructor(private client:NetworkClient){}

    login():ResultState{
       
        return this.client.tryConnect();
        //login...
       
    }
}

class App{
    constructor(private userService:UserService){}
    run(){
        try{
            const a = this.userService.login() 
            console.log(a);
            return a
        
    } catch(error){
            
            console.log('catched')
           
        }
    }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();

}