const bookshelf = [
  {
    // 注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
    path: '/pages/bookshelf/index',
    aliasPath: '/', // 对于h5端你必须在首页加上aliasPath并设置为/
    name: 'bookshelfIndex',
    meta: {
      title: '首页',
    },
    //可以自定义路由元信息
    myDiy: {
      isTab: true,
    },
  },
];
export default bookshelf;
