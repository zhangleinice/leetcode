/**
 * 一维数组转成树形结构菜单
 */

const list = [
  { id: 20, parentId: 0, name: "一级菜单1" },
  { id: 21, parentId: 0, name: "一级菜单2" },
  { id: 22, parentId: 0, name: "一级菜单3" },
  { id: 23, parentId: 0, name: "一级菜单4" },
  { id: 24, parentId: 20, name: "二级菜单" },
  { id: 25, parentId: 20, name: "二级菜单" },
  { id: 26, parentId: 24, name: "三级菜单" },
  { id: 27, parentId: 24, name: "三级菜单" },
  { id: 28, parentId: 21, name: "二级菜单" },
  { id: 29, parentId: 21, name: "二级菜单" },
  { id: 30, parentId: 29, name: "三级菜单" },
  { id: 31, parentId: 30, name: "四级菜单" },
  { id: 32, parentId: 31, name: "五级菜单" },
];

// ==>

// [
//     { "id": 22, "parentId": 0, "name": "一级菜单3" },
//     { "id": 23, "parentId": 0, "name": "一级菜单4" },
//     { "id": 20, "parentId": 0, "name": "一级菜单1",
//         "children": [
//             { "id": 25, "parentId": 20, "name": "二级菜单" },
//             { "id": 24, "parentId": 20, "name": "二级菜单",
//                 "children": [
//                     { "id": 26, "parentId": 24, "name": "三级菜单" },
//                     { "id": 27, "parentId": 24, "name": "三级菜单" }
//                 ]
//             }
//         ]
//     },
//     {
//         "id": 21, "parentId": 0, "name": "一级菜单2",
//         "children": [
//             { "id": 28, "parentId": 21, "name": "二级菜单" },
//             { "id": 29, "parentId": 21, "name": "二级菜单",
//                 "children": [
//                     { "id": 30, "parentId": 29, "name": "三级菜单",
//                         "children": [
//                             { "id": 31, "parentId": 30, "name": "四级菜单",
//                                 "children": [
//                                     { "id": 32, "parentId": 31, "name": "五级菜单" }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// function bfs(list) {
//   const queue = [{ id: 0, children: [] }];
//   const head = [{ id: 0, children: [] }];
//   let level = 0;
//   while (queue.length) {
//     for (let i = 0; i < queue.length; i++) {
//       for (let j = 0; j < list.length; j++) {
//         if (list[j].parentId === queue[i].id) {
//           if (!head[i].children) {
//             head[i].children = [];
//           }
//           head[i].children.push(list[j]);
//           if (!queue[i].children) {
//             queue[i].children = [];
//           }
//           queue[i].children.push(list[j]);
//           queue.splice(i, 1);
//         }
//       }
//     }
//     level++;
//   }
//   return head[0].children;
// }

const bfs = (list) => {
  const heads = [{ id: 0, children: [] }]; // 创建一个头指针，heads[0].children就是最终结果
  const levels = [heads]; // 按层存储，每层都是一个数组
  let lv = 0; // 层级
  while (list.length) {
    const level = levels[lv];
    // 遍历第j层，找该层第j个元素的children
    for (let j = 0; j < level.length; j++) {
      //   for (let i = 0; i < list.length; i++) {
      //     if (list[i].parentId === level[j].id) {
      //       if (!level[j].children) {
      //         level[j].children = [];
      //       }
      //       level[j].children.push(list[i]); // 挂到父级节点下
      //       if (!levels[lv + 1]) {
      //         levels.push([]);
      //       }
      //       levels[lv + 1].push(list[i]); // 孩子属于下一层
      //       list.splice(i, 1); // 移除
      //     }
      //   }

      let i = 0;
      // 遍历原数据
      while (i < list.length) {
        if (list[i].parentId === level[j].id) {
          if (!level[j].children) {
            level[j].children = [];
          }
          level[j].children.push(list[i]); // 挂到父级节点下
          if (!levels[lv + 1]) {
            levels.push([]);
          }
          levels[lv + 1].push(list[i]); // 孩子属于下一层
          list.splice(i, 1); // 移除
        } else {
          i++; // 指针继续
        }
        // i++;
      }
    }
    lv++; // 层级
  }
  return levels[0][0].children;
};

const x = bfs(list);
console.log(x);
