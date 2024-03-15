{
    //discrimiataed union : 서로를 구분할 공통된 프로퍼티를 추가하자!

    type SuccessState = {
        result: 'success',
        response: {
            body:string;
        }

    }
    type FailState = {
        result:'fail',
        reason:string;
    }
    type LoginState = SuccessState | FailState

    function login():LoginState{
        return {
            result:'success',
            response:{
                body:'logged in'!
            }
        }
    }

    function printLoginState(state:LoginState): void{
       state.result==='success' ?console.log(state.response.body) : console.log(state.reason);
    }
}