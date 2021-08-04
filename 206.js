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
    // 注意存储下一个指针，防止next丢失
    // const next = curr.next;
    // curr.next = prev;
    // prev = curr;
    // curr = next;

    // 同时赋值，指针不会丢失
    // [a, b] = [b, a] 能交换成功，不需要中间变量
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
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

const x = reverseList(linkedList);
console.log(x);
