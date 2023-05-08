       
class LinkList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head,
        this.size=1;
    }
    //add 
    push(value) {
        let newNode = {
            value: value,
            next: null
        }
        if(!this.tail){
            this.head = {
                value: value,
                next: null
            }
            this.tail = this.head,
            this.size=1;

            return
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size= this.size+1
    }
    //delete 
    pop(){
    
        if(!this.head) return;
        if(this.size===1){
            this.head=null;
            this.tail=null;
            this.size=0;
            return this.head
        }
     let current= this.head;
     let newNode=null
     while(current){
        if(current.next){
            newNode=current;
        }
        current=current.next;
     }
    let deletedData= this.tail;
     this.tail=newNode;
    this.tail.next=null;
    this.size =this.size-1
    return deletedData;
    }
    }
    
    let list = new LinkList('shanu')
    list.push('kumar')
    list.push('virat')
    list.push('ks')
    
    
    list.pop()
    list.pop()
   console.log( list.pop())
   list.pop()

   list.push('kunar_1')
   list.push('tks_1')
   list.push('tks_3')
   list.pop()
    console.log(list)
   
    