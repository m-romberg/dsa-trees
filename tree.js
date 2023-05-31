"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues(current=this) {
    // start at this
    let sum = current.val;
    //add it to the sum of its children
    if (current.children.length !== 0){
      for (let child of current.children){
        sum += child.sumValues(child);
      }
    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {

  }
}

let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [n2, n3, n4];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

const largeTree = new Tree(n);

n.sumValues();


module.exports = { Tree, TreeNode };
