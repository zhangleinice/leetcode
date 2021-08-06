/**
 * 两两交换链表中相邻的节点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 创建一个头部节点
  const dummy = {};
  dummy.next = head;
  // 当前节点
  let temp = dummy;
  // temp后面没有节点或者只有一个节点时不在交换
  while (temp.next !== null && temp.next.next !== null) {
    let node1 = temp.next;
    let node2 = temp.next.next;

    [temp.next, node2.next, node1.next] = [node2, node1, node2.next];
    temp = node1;
  }
  return dummy.next;
};

const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const x = swapPairs(linkedList);
console.log(x);
