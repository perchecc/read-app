const home = [
  {
    // 注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
    path: '/pages/bookshelf/index',
    aliasPath: '/', // 对于h5端你必须在首页加上aliasPath并设置为/
    name: 'bookshelfIndex',
    meta: {
      title: '首页',
    },
  },
  {
    path: '/pages/market/index',
    name: 'marketIndex',
    meta: {
      title: '列表',
    },
  },
  {
    path: '/pages/store/index',
    name: 'storeIndex',
    meta: {
      title: '书库',
    },
  },
  {
    path: '/pages/my/index',
    name: 'myIndex',
    meta: {
      title: '书库',
    },
  },
];
export default home;
