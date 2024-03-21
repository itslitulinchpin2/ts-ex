{
    type PositionType = {
        x:number;
        y:number
    }
    interface PositionInterface {
        x:number;
        y:number;
    }
    //object로 둘 다 가능
    const obj1:PositionType={
        x:1,
        y:1
    }
    // const obj2:PositionInterface={
    //     x:1,
    //     y:1
    // }

    //class로 둘 다 가능
    class Pos1 implements PositionType{
        x:number;
        y:number
    }

    // class Pos2 implements PositionInterface{
    //     x:number;
    //     y:number
    // }

    //extends 둘 다 가능 (Type은 &로)

    interface ZPositionInterface extends PositionInterface{
        z:number;
    }

    type ZPositionType = PositionType & {z:number}

    //Only interface can be merged.
    interface PositionInterface{
        z:number;
    }

    //Type aliases can use computed porperties
    type Person = {
        name:string;
        age:number;
    }
    type Name = Person['name'] //string type




}