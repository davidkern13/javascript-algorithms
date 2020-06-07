class Queue {
  constructor() {
    this.list = [];
  }

  /*
   * add elemt to head of queque
   */
  enqueue(...element) {
    element.map(item => this.list.push(item));
  }

  /*
   * return first element for array and removed from queque
   */
  dequeue() {
    if (this.empty()) return "Empty";

    return this.list.shift();
  }

  head() {
    if (this.empty()) return "Empty";

    return this.list.find(Boolean);
  }

  /*
   * return value boolean if array is empty
   */
  empty() {
    return this.list.length === 0;
  }

  /*
   * return value boolean if array is empty
   */
  print() {
    return this.list.map(number => `| ${number} |`).join(" ");
  }
}

(function() {
  let queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(6);
  console.log("queue:", queue.print());
  console.log("head:", queue.head());

  let dequeue_element = queue.dequeue();
  console.log("dequeue_element: ", dequeue_element);

  queue.enqueue(7);
  console.log("queue:", queue.print());
  console.log("head:", queue.head());

  let dequeue_element2 = queue.dequeue();
  console.log("dequeue_element: ", dequeue_element2);

  console.log("queue:", queue.print());
})();

