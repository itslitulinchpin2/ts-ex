{
    //map type: 변환!

    type Video = {
        title:string;
        author:string;
    }

    //[1.2].map(item=>item*item) 처럼 사용
    type Optional<T> = {
        [P in keyof T]?:T[P] //for..in과 유사 문법
    }
    type ReadOnly<T>={
        readonly [P in keyof T]?:T[P]
    }

    const video : ReadOnly<Video>={
        title:'Oldboy'
    }

    type Animal = {
        name:string;
        age:number;
    }

    const animal:Optional<Animal> = {
        age:12
    }
    animal.age=14;

    //읽기전용이므로 수정 불가능
    // video.title='hi';
    

    type Nullable<T> = {
        [P in keyof T] : T[P] | null;
    }
    const obj:Nullable<Video>={
        title:'haha',
        author:null
    }


}