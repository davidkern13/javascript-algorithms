
//factory method
function Node(data) {
  this.data = data;
  this.type = null;
  this.value = {
    left: null,
    right: null
  };
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.mySet = new Set();

    this.arr = [];
  }

  add(data) {
    const node = new Node(data); //create new node

    if (!this.root) {
      // if we dont have root
      this.root = node;
    } else {
      this.insertNode(node);
    }
  }
  
  /*
    Inser new node to tree
  */
  insertNode(node) {
    let current = this.root; //create current node

    while (current) {
      //while the tree until current node
      if (node.data < current.data) {
        //check the value of node vs current who is smaller
        if (!current.value.left) {
          // if we dont have left side

          current.value.left = node; //add the node to left side
          break;
        }

        current = current.value.left; // add to current the last side value
      } else if (node.data > current.data) {
        if (!current.value.right) {
          // if we dont have left side

          current.value.right = node; //add the node to left side
          break;
        }

        current = current.value.right; // add to current the last side value
      } else {
        break;
      }
    }
  }
   /*
    Search in tree by value
  */
  binarySearch(root, key) {
    if (root === null || root.data === key) return root;

    if (root.data > key) return this.binarySearch(root.value.left, key);

    return this.binarySearch(root.value.right, key);
  }

  inorder() {
    this.inorderTree(this.root);
  }

  /*
    Inorder (Left, Root, Right)
  */
  inorderTree(root) {
    if (root !== null) {
      this.inorderTree(root.value.left);
      console.log(`inorder count: ${root.data}`);
      this.inorderTree(root.value.right);
    }

    return `Node not found~`;
  }

  preorder() {
    this.preorderTree(this.root);
  }

  /*
    Preorder (Root, Left, Right)
  */
  preorderTree(root) {
    if (root == null) return;

    console.log(`preorder count: ${root.data}`);
    this.preorderTree(root.value.left);
    this.preorderTree(root.value.right);
  }

  postorder() {
    this.postorderTree(this.root);
  }

  /*
    Postorder (Left, Right, Root)
  */

  postorderTree(root) {
    if (root == null) return;

    this.postorderTree(root.value.left);
    this.postorderTree(root.value.right);
    console.log(`preorder count: ${root.data}`);
  }

   /*
    Get parent of value 
  */
  getParent(value) {
    let root = this.root,
      parent = null;

    if (root == null) return;

    while (root) {
      if (value < root.data) {
        parent = { data: root.data, side: "left"};
        root = root.value.left;
      } else if (value > root.data) {
        parent = { data: root.data, side: "right"};
        root = root.value.right;
      } else {
        break;
      }
    }

    return parent;
  }

  /*
    Get minimum value of left side
  */
  getMinimumTree() {
    let root = this.root;

    if (root == null) return -1;

    while (root.value.left != null) {
      root = root.value.left;
    }

    return root.data;
  }

  /*
    Get maximun value of right side
  */
  getMaximumTree() {
    let root = this.root;

    if (root == null) return -1;

    while (root.value.right != null) {
      root = root.value.right;
    }

    return root.data;
  }

  printTree(tree) {
    let node = tree;

    for (let i in node) {
      if (Number.isInteger(node[i])) {
        let number = node[i];
        let parent = this.getParent(number);
        this.arr.push({
          number: number,
          parent
        });
      }
      this.printTree(node[i]);
    }
  }
}


(function() {
  let tree = new BinaryTree();

  tree.add(5);
  tree.add(2);
  tree.add(7);
  tree.add(4);
  tree.add(10);
  tree.add(8);
  tree.add(3);

   console.log("--------binarySearch----------");
   console.log(tree.binarySearch(tree.root, 5));
   console.log("---------inorder---------");
   console.log(tree.inorder());
   console.log("---------preorder---------");
   console.log(tree.preorder());
   console.log("--------postorder----------");
   console.log(tree.postorder());
   console.log("-------getParent-----------");
   console.log(tree.getParent(4));
   console.log("---------getMinimumValue---------");
   console.log(tree.getMinimumTree());
   console.log("----------getMaximumTree--------");
   console.log(tree.getMaximumTree());
})();
