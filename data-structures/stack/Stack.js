class Stack {
  constructor() {
    this.list = [];
  }

  /*
   * add elemt to head of queque
   */
  push(...element) {
    element.map(item => this.list.push(item));
  }

  /*
   * return first element for array and removed from queque
   */
  pop() {
    if (this.empty()) return "Empty";

    return this.list.pop();
  }

  /*
   * return value of the first element in queque
   */
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
  let stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log("stack:", stack.print());
  console.log("head:", stack.head());

  let value_pop = stack.pop();
  console.log("lifo:", value_pop);
  console.log("stack:", stack.print());
})();
