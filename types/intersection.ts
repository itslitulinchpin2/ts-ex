{
    //union이 or과 같은 속성이었다면
    //intersection은 and와 같은 속성

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        id:number;
        work:()=> void;
    }

    function internWork(person: Student & Worker){
        //두 타입의 속성을 모두 가지고 있다.
        console.log(person.name, person.id);
    }

    internWork({
        name:'lee',
        score:1,
        id:2,
        work(){
            console.log('work')
        }
        
    })
}