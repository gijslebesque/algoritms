export interface INode {
  val: number;
  left: INode;
  right: INode;
}

export interface IDeepest {
  level: number;
  node: any;
}
