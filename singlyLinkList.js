

class LinkList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head,
        this.size=1;
    }
    appendList(value) {
        let newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size= this.size+1
    }
}

let list = new LinkList('shanu')
list.appendList('kumar')
list.appendList('virat')

console.log(list)

