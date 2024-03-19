{


    interface Stack<T> {
        readonly size:number;
        push(value:T):void;
        pop():T;
    }

    type StackNode<T> = {
        readonly value:T;
        readonly next?: StackNode<T>; //가리키는 것이 없을수도.
    }

    class StackImpl<T> implements Stack<T>{
        private _size:number =0;
        private head?: StackNode<T>;

        get size(){
            return this._size;
        }
     
        push(value:T){
                const node = {
                value,
                next:this.head
            }
            this.head=node;
            this._size++;

        }
        pop():T{
            if(this.head==null){
                throw new Error('Stack is Empty');
            }
            const output=this.head;
            this.head=output.next;
            this._size--;
            return output.value;
            
        }
    }

    const stack = new StackImpl<string>();
    stack.push('lee');
    stack.push('kim');
    console.log(stack.pop());
    console.log(stack.pop());
    

   
}