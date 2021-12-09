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
 * 判断链表是否有环
 * 1.打标记
 * 2.快慢指针
 * 3.JSON.stringify
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
  return false;
};

var hasCycle = function (head) {
  if (!head) return false;
  let [fast, slow] = [head, head];
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

var hasCycle = function (head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (error) {
    return true;
  }
};

/**
 * 两两交换链表中相邻的节点
 * Definition for singly-linked list.
 */
//  输入：head = [1,2,3,4]
//  输出：[2,1,4,3]
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const prev = {};
  prev.next = head;
  let curr = prev;
  while (curr.next && curr.next.next) {
    let n1 = curr.next;
    let n2 = curr.next.next;
    [curr.next, n2.next, n1.next] = [n2, n1, n2.next];
    // 交换完成之后移动指针
    curr = n1;
  }
  return prev.next;
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

const y = swapPairs(linkedList);
console.log("y", y);

// const x = reverseList(linkedList);
// console.log(x);
