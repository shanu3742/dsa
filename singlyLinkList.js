

class LinkList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
    }
    appendList(value) {
        let newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode
    }
}

let list = new LinkList('shanu')
list.appendList('kumar')
list.appendList('virat')

