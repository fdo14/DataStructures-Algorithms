// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let node = this.head
        let counter = 0
        while (node) {
            counter++
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {if(!this.head) return null
        let node = this.head
        while(node.next){
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        let node = this.head.next
        this.head = null
        this.head = node
    }

    removeLast() {
        if(!this.head) return
        if(!this.head.next) return this.head = null
        let prevNode = this.head 
        let node = this.head.next
        while (node.next) {
            prevNode = prevNode.next
            node = node.next
        }
        prevNode.next = null
        node = null;
    }

    insertLast(data) {
        const last = this.getLast()

        if(last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(data) {
        let count = 0
        let node = this.head
        while (node) {
            if(count === data) return node
            count++
            node = node.next
        }
        return null
    }

    removeAt(data) {
        if(!this.head) return null
        let node = this.getAt(data)
        if(node){
            if(node === this.head) {
                return this.removeFirst()
            }
            let prevNode = this.getAt(data-1)
            if(node === this.getLast()) {
                return this.removeLast()
            }
            let futureNode = this.getAt(data+1)
            prevNode.next = futureNode
        }
        return null
    }

    insertAt(data, integer) {
        if(!this.head && integer === 0) return this.head = new Node(data)

        if(integer === 0) {
            return this.head = new Node(data, this.head)
        }

        let prevNode = this.getAt(integer - 1)

        if(this.getAt(integer)) {
            const node = new Node(data, prevNode.next)
            prevNode.next = node
            return
        }
        return this.insertLast(data)
    }

}

module.exports = { Node, LinkedList };
