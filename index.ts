//order version array;

export const orderVersions = (arr: Array<string>) => {
  return arr.sort(sorter);
};

const sorter = (a: string, b: string) => {
  const el1 = a.split('.');
  const el2 = b.split('.');
  return getHighest(el1, el2, 0);
};

const getHighest = (
  number1: Array<string>,
  number2: Array<string>,
  i: number
) => {
  if (!number1[i]) return 1;
  if (!number2[i]) return -1;
  if (number1[i] > number2[i]) return -1;
  else if (number1[i] > number2[i]) return 1;
  else if (number1[i] === number2[i])
    return getHighest(number1, number2, i + 1);
};

//add one number
export const addOne = (arr: Array<number>) => {
  return add(arr, arr.length - 1);
};

const add = (el1: Array<number>, i: number) => {
  const newArr = [...el1];
  if (i === 0 && newArr[0] === 9) {
    newArr[0] = 0;
    newArr.unshift(1);
    return newArr;
  } else if (newArr[i] === 9) {
    newArr[i] = 0;
    return add(newArr, i - 1);
  } else {
    newArr[i] = newArr[i] + 1;
    return newArr;
  }
};

//Get deepest node recursively
interface INode {
  val: number;
  left: INode;
  right: INode;
}

export const getDeepestNode = (node: INode, stack: Array<number>) => {
  stack.push(node.val);
  if (node.left) {
    getDeepestNode(node.left, stack);
  }
  if (node.right) {
    getDeepestNode(node.right, stack);
  }

  return Math.max(...stack);
};

interface IDeepest {
  level: number;
  node: any;
}

//Get deepest node while loop
export const deepestNode = (node: any) => {
  let deepest: IDeepest = { node, level: -1 };
  const stack = [[node, 0]];

  while (stack.length) {
    const [curr, level] = stack.pop();

    if (curr) {
      if (level > deepest.level) {
        deepest = { node, level };
      }

      stack.push([curr.left, level + 1], [curr.right, level + 1]);
    }
  }

  return deepest.level;
};
