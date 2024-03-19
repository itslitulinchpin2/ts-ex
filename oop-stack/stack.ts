{


    interface Stack {
        readonly size:number;
        push(value:string):void;
        pop():string;
    }

    type StackNode = {
        readonly value:string;
        readonly next?: StackNode; //가리키는 것이 없을수도.
    }

    class StackImpl implements Stack{
        private _size:number =0;
        private head?: StackNode;

        get size(){
            return this._size;
        }
     
        push(value:string){
                const node: StackNode = {
                value,
                next:this.head
            }
            this.head=node;
            this._size++;

        }
        pop():string{
            if(this.head==null){
                throw new Error('Stack is Empty');
            }
            const output=this.head;
            this.head=output.next;
            this._size--;
            return output.value;
            
        }
    }

    const stack = new StackImpl();
    stack.push('lee');
    stack.push('kim');
    console.log(stack.pop());
    console.log(stack.pop());
    

   
}