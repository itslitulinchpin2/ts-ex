{
    //type inference
    let text = 'hello'; // 알아서 ts는 string으로 유추함

    function print(message = 'hello'){
        console.log(message)
    }
    // print(1); //알아서 오류 출력

}