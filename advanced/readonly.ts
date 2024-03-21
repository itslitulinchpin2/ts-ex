{
    type Todo = {
        title:string;
        desc:string;
    }
  

    //TS에서 Readonly는 이미 구현돼있음!
    //붙이기만 하면 됨.
    function display(todo:Readonly<Todo>) {
        
        //읽기 전용이므로 수정 불가능.
        //todo.title='haha';
    }
}