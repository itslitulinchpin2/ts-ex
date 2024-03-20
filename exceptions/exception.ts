//JS는 Exception이 아닌 Error 클래스가 있음

//에러 발생! (유효하지 않은 배열의 갯수)
//const array = new Array(10000000000000);

//Error handling: try - catch - finally

function readFile(fileName:string):string{
    if(fileName === 'not exist'){
        throw new Error(`File not exist! ${fileName}`)
    }
    return 'file contents';
}

function closeFile(fileName: string):void{

}

const fileName='not exist';

try {
    console.log(readFile(fileName));
} catch (error){
    //에러를 catch하면 app이 죽지 않음!
    console.log('catched!!')
} finally {
    //항상 실행, 캐치에서 잡지 못하더라도 실행
    closeFile(fileName);
}

console.log('print possible!')

