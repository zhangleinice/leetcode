/**
 * 反转一个链表
 * 原理：遍历依次向后挪动
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
const reverseList = function (head) {
  let [curr, prev] = [head, null];
  while (curr) {
    // let next = curr.next;
    // curr.next = prev;
    // prev = curr;
    // curr = next;
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};

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
var swapPairs = function (head) {};

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

const y = swapPairs(linkedList);
console.log(y);

const x = reverseList(linkedList);
console.log(x);
