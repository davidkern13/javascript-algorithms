function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

class LinkedList {
  constructor(data) {
    this.head = null;
  }

  addToStartList(data) {
    this.head = new Node(data, this.head);
  }

  addToEndList(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  *list() {
    let current = this.head;
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.list();
  }
}

(function() {
  const list = new LinkedList();

  list.addToEndList(1000);
  list.addToEndList(2000);
  list.addToEndList(3000);
  list.addToStartList(5000);
  list.addToEndList(4000);

  console.log(list);

  for (const key of list) {
    console.log(key);
  }
})();
