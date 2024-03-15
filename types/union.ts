{
    //Union Types : OR
    //발생할 수 있는 경우들 중 하나를 할당할 때

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction:Direction){
        console.log(direction);
    }
    move('right');

    //function: login->success or fail
    type SuccessState = {
        response: {
            body:string;
        }

    }
    type FailState = {
        reason:string;
    }
    type LoginState = SuccessState | FailState

    // function login():LoginState{
    //     return {
    //         response:{
    //             body:'logged in'!
    //         }
    //     }
    // }

    // function printLoginState(state:LoginState): void{
    //    //키가 있는지 직접 확인하는 코딩은 좋은 방식이 아님
    //     if('response' in state){
    //     console.log(state.response.body)
    //    } else{
    //     console.log(state.reason);
    //    }
    // }
}