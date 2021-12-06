# 数组
 - 88.合并两个有序数组

# 链表
 - 206.反转一个链表
 - 24.两两交换链表中相邻的节点
 - 141.判断链表是否有环

# 滑动窗口
 - 3.无重复字符的最长子串

# 双指针
 - 165.比较版本号

# 栈
 - 20.有效的括号

# 队列
 - 703.数据流中第k大元素

# 递归,分治
 - 50.实现 pow(x, n) ，即计算 x 的 n 次幂函数

# 位运算
 - x & 1 判断奇偶数
 - 左移,右移运算符号，会使小数转化为整数

# 排序
  - 冒泡
  - 插入
  - 归并
  - 快排

# 二分查找
  - 704.二分查找一个数
  - 69.求一个数的平方根
  - 二分查找的变形问题
  - 33.查找旋转数组中的值

# 二叉树
  - 前序，中序，后序遍历
  - 102.按层序遍历(bfs, dfs)
  - 104.二叉树的最大深度(bfs,dfs)
  - 111.二叉树的最小深度(bfs,dfs)，注意是根节点到*叶子节点*的深度
  - 二叉搜索树的查找，插入，删除


# BFS(Breadth Frist Search)
  - 自定义一个方法去检查DOM中某个ID的元素。类似getElementById

# DFS(Depth First Search)

# 字符串
 - 415.字符串相加

# 贪心算法
  - 122.买卖股票的最佳时机II

# 回溯算法
  - 46.全排列
  - 77.组合
  - 电商sku

# 动态规划
  - 70.爬楼梯
  - 53.最大子序和
  - 121.买卖股票的最佳时机I
  - 0-1背包问题

# 实践
  - 如何实现浏览器的前进后退功能？
  - DOM树的遍历？
  - 双十一购物时的凑单问题？

# 算法到底有没有用？
 - 凡是需要跨过一定智商门槛才能掌握的技术，都不会轻易的流行。
 - 换句话说：技术变得更简单，别人更愿意用，更容易流行。
 - 这也是当前各种技术框架的真实写照: **足够好用，足够简单，简单到你不需要知道底层复杂的细节**。

 - 回到算法本身，它代表的是你**解决更加复杂问题**能力的一部分。
 - 可能干讲不容易理解，我们以 Vue 这个框架为例，如果你以前没有接触过深度优先遍历和递归的概念，没有看过相应的代码，那么虚拟 DOM 整个patch的源码你是基本不可能看懂的；如果你没有系统掌握过栈先进后出这种特点的应用，你也是很难理解 Vue 模板编译阶段为什么要用栈来检查标签是否正常闭合；同样的，如果你没有回溯这种算法的代码经验，你也是很难理解 Vue 模板编译的优化阶段，到底是怎样在从父到子深度优先遍历的过程中检查到非静态的子节点后给父节点打上标记；并且，如果你以前不知道 LRU 缓存淘汰算法究竟是个什么东西，你看到keep-alive组件的实现会非常纳闷
 - 我认为基本的算法能力对于一个想要解决复杂问题的工程师而言，不是一个加分项，而且是必备项。


# 算法的六种思想

## 递归
  - DFS

## 分治
  - 二分查找

## 回溯
  - 排列，组合