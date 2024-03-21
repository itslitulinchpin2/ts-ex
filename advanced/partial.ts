{
    type Todo = {
        title:string;
        desc:string;
        label:string;
        priority: 'high'|'low'
    }

    function updateTodo(todo:Todo, fieldsToUpdate:Partial<Todo>):Todo{
        //todo를 fieldsToUpdate가 덮어쓴다.
        return {...todo, ...fieldsToUpdate}

    }

    const todo : Todo = {
        title: 'oldboy',
        desc:'GOAT Film ever',
        label:'bb',
        priority:'high'
    }

    const toUpdate : Partial<Todo> = {
        label:'aa'
    }

    const updatedTodo = updateTodo(todo,toUpdate);

    console.log(updatedTodo);
}