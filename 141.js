/**
 * 判断链表是否有环
 * 1.打标记
 * 2.快慢指针
 * 3.JSON.stringify
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.tag) {
      return true;
    }
    head.tag = true;
    head = head.next;
  }
  return false;
};
// JSON.stringify当在循环引用时会抛出异常TypeError ("cyclic object value")
var hasCycle2 = function (head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (error) {
    return true;
  }
};
// 快慢指针
var hasCycle3 = function (head) {
  if (!head) return false;
  let [slow, fast] = [head, head];
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
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

const x = hasCycle(linkedList);
console.log("x", x);
