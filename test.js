import { orderVersions, addOne, getDeepestNode, deepestNode } from './index';

test('order version arr', () => {
  const input = ['1.2', '5.1.1', '5.1', '1.2.1', '4', '1.4.2'];
  const output = ['5.1.1', '5.1', '4', '1.4.2', '1.2.1', '1.2'];

  expect(orderVersions(input)).toStrictEqual(output);
});

test('order version arr', () => {
  const input = ['5.1.1', '1.2.1', '4', '1.4.2', '1.2', '5.1', '5.1.1'];
  const output = ['5.1.1', '5.1.1', '5.1', '4', '1.4.2', '1.2.1', '1.2'];

  expect(orderVersions(input)).toStrictEqual(output);
});

test('order version arr', () => {
  const input = ['1', '1.1.1', '2.3', '2.3.3'];
  const output = ['2.3.3', '2.3', '1.1.1', '1'];
  expect(orderVersions(input)).toStrictEqual(output);
});

test('add one to array', () => {
  const input = [1, 2, 4];
  const output = [1, 2, 5];
  expect(addOne(input)).toStrictEqual(output);
});

test('add one to array', () => {
  const input = [1, 2, 9];
  const output = [1, 3, 0];
  expect(addOne(input)).toStrictEqual(output);
});

test('add one to array', () => {
  const input = [1, 9, 9, 9, 9];
  const output = [2, 0, 0, 0, 0];
  expect(addOne(input)).toStrictEqual(output);
});

test('add one to array', () => {
  const input = [9, 9, 9, 9, 9];
  const output = [1, 0, 0, 0, 0, 0];
  expect(addOne(input)).toStrictEqual(output);
});

test('add one to array', () => {
  const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9];
  const output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
  expect(addOne(input)).toStrictEqual(output);
});

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

test('binary tree', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3)
  );

  expect(getDeepestNode(root, [])).toBe(4);
});

test('binary tree', () => {
  const root = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4, new TreeNode(5, new TreeNode(4), new TreeNode(10)))
    ),
    new TreeNode(
      3,
      new TreeNode(5, new TreeNode(7, new TreeNode(8), new TreeNode(9)))
    )
  );

  expect(getDeepestNode(root, [])).toBe(10);
});

test('binary tree', () => {
  const root = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4, new TreeNode(5, new TreeNode(4), new TreeNode(10)))
    ),
    new TreeNode(
      3,
      new TreeNode(
        5,
        new TreeNode(7, new TreeNode(8), new TreeNode(9, new TreeNode(11)))
      )
    )
  );

  expect(deepestNode(root, [])).toBe(5);
});
