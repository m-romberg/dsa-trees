'use strict';

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}

	/** minDepthToIncompleteNode(): return the minimum depth of the tree to an
	 * incomplete node-- that is, the length of the shortest path from the root to
	 * a node with less than two children. */
	minDepthToIncompleteNode() {
		let depth = 0;
		if (this.right !== null && this.left !== null) {
			const depthRight = this.right.minDepthToIncompleteNode();
			const depthLeft = this.left.minDepthToIncompleteNode();
			depth = depthLeft > depthRight ? depthRight : depthLeft;
		}
		return depth + 1;
	}

	/** maxDepth(): return the maximum depth from the invoking node -- that is,
	 * the length of the longest path from the invoking node to a leaf. */
	maxDepth() {
		let depth = 0;
		let depthLeft = 0;
		let depthRight = 0;
		if (this.right !== null) depthRight = this.right.maxDepth();
		if (this.left !== null) depthLeft = this.left.maxDepth();

		depth = depthLeft < depthRight ? depthRight : depthLeft;
		return depth + 1;
	}

	/** minDepth(): return the minimum depth from the invoking node -- that is,
	 * the length of the shortest path from the invoking node to a leaf. */
	minDepth() {
    if (this.right === null & this.left === null) return 1;
		let depth = 0;
		let depthLeft = Infinity;
		let depthRight = Infinity;
		if (this.right !== null) depthRight = this.right.minDepth();
		if (this.left !== null) depthLeft = this.left.minDepth();

		depth = depthLeft > depthRight ? depthRight : depthLeft;
		return depth + 1;
	}

	/** nextLarger(lowerBound): return the smallest value from the invoking node
	 * that is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
    
  }
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepthToIncompleteNode(): return the minimum depth of the tree to an
	 * incomplete node-- that is, the length of the shortest path from the root to
	 * a node with less than two children. */

	// this is a stack or recursion problem; we'll use recursion

	minDepthToIncompleteNode() {
		if (!this.root) return 0;
		return this.root.minDepthToIncompleteNode();
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	// this is a stack or recursion problem; we'll use recursion

	maxDepth() {
		if (!this.root) return 0;
		return this.root.maxDepth();
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	// this is a stack or recursion problem; we'll use recursion

	minDepth() {
    if (!this.root) return 0;
		return this.root.minDepth();
  }

	/** nextLarger(lowerBound): return the smallest value in the tree
	 * that is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}
}

let j = new BinaryTreeNode(1);
let i = new BinaryTreeNode(1);
let h = new BinaryTreeNode(2);
let g = new BinaryTreeNode(1);
let f = new BinaryTreeNode(2, j, null);
let e = new BinaryTreeNode(3, h, i);
let d = new BinaryTreeNode(3, f, g);
let c = new BinaryTreeNode(4, e, null);
let b = new BinaryTreeNode(5, null, d);
let a = new BinaryTreeNode(5, c, null);
let r = new BinaryTreeNode(6, a, b);
let longTree = new BinaryTree(r);

console.log(longTree.minDepth());

module.exports = { BinaryTree, BinaryTreeNode };
