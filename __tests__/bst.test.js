const { Tree, Node } = require("../binarysearchtree");

describe("BST Test cases", () => {
	let treeInstance;
	let constructedTree;

	beforeEach(() => {
		treeInstance = new Tree();
		treeInstance.insertNode(90);
		treeInstance.insertNode(80);
		treeInstance.insertNode(75);
		treeInstance.insertNode(70);
		treeInstance.insertNode(60);
		treeInstance.insertNode(50);
		treeInstance.insertNode(150);
		treeInstance.insertNode(130);
		treeInstance.insertNode(200);

		constructedTree = new Node(90);
		constructedTree.left = new Node(80);
		constructedTree.left.left = new Node(75);
		constructedTree.left.left.left = new Node(70);
		constructedTree.left.left.left.left = new Node(60);
		constructedTree.left.left.left.left.left = new Node(50);

		constructedTree.right = new Node(150);
		constructedTree.right.left = new Node(130);
		constructedTree.right.right = new Node(200);
	});

	test("check tree construction", () => {
		expect(treeInstance.root).toEqual(constructedTree);
	});

	test.each([75, 80, 150])("check if bst has %i", (node) => {
		expect(treeInstance.contains(node)).toStrictEqual(true);
	});
	test("checking inorder traversal", () => {
		expect(treeInstance.inorderTrav()).toStrictEqual([
			50, 60, 70, 75, 80, 90, 130, 150, 200,
		]);
	});
	test("checking pre-order traversal", () => {
		expect(treeInstance.preOrder()).toStrictEqual([
			90, 80, 75, 70, 60, 50, 150, 130, 200,
		]);
	});
	test("checking post-order traversal", () => {
		expect(treeInstance.postOrder()).toStrictEqual([
			50, 60, 70, 75, 80, 130, 200, 150, 90,
		]);
	});
	test("breadth first search", () => {
		expect(treeInstance.bfs()).toStrictEqual([
			90, 80, 150, 75, 130, 200, 70, 60, 50,
		]);
	});
	test("tree after removing 200", () => {
		treeInstance.remove(200);

		const newTree = new Node(90);
		newTree.left = new Node(80);
		newTree.left.left = new Node(75);
		newTree.left.left.left = new Node(70);
		newTree.left.left.left.left = new Node(60);
		newTree.left.left.left.left.left = new Node(50);
		newTree.right = new Node(150);
		newTree.right.left = new Node(130);

		expect(treeInstance.root).toStrictEqual(newTree);
	});
	test("tree after removing 150", () => {
		treeInstance.remove(150);

		const newTree = new Node(90);
		newTree.left = new Node(80);
		newTree.left.left = new Node(75);
		newTree.left.left.left = new Node(70);
		newTree.left.left.left.left = new Node(60);
		newTree.left.left.left.left.left = new Node(50);
		newTree.right = new Node(200);
		newTree.right.left = new Node(130);

		expect(treeInstance.root).toStrictEqual(newTree);
	});
	test("tree after removing 90", () => {
		treeInstance.remove(90)
		const newTree = new Node(130);
		newTree.left = new Node(80);
		newTree.left.left = new Node(75);
		newTree.left.left.left = new Node(70);
		newTree.left.left.left.left = new Node(60);
		newTree.left.left.left.left.left = new Node(50);
		newTree.right = new Node(150); // Right subtree of 100
		newTree.right.right = new Node(200);
		expect(treeInstance.root).toStrictEqual(newTree);
	});
});
