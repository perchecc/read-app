<template>
  <view class="content">
    <u-sticky bgColor="#fff">
      <u-tabs :list="tabList" lineColor="#428687"></u-tabs>
    </u-sticky>
    <view>
      <u-grid :border="false" col="3">
        <u-grid-item v-for="(listItem, listIndex) in list" :key="listIndex" @tap="clickHandler">
          <view class="book-item">
            <view class="add-icon" v-if="listItem.addPlaceHolder">
              <u-icon name="plus" color="#979797" size="28"></u-icon>
            </view>
            <view @tap.stop class="book-image" v-else>
              <u--image width="100%" height="100%" :src="listItem.url" mode="widthFix">
                <template v-slot:loading>
                  <u-loading-icon color="red"></u-loading-icon>
                </template>
                <view slot="error" style="font-size: 24rpx">加载失败</view>
              </u--image>
            </view>
            <text class="u-line-2 book-title">{{ listItem.title }}</text>
          </view>
        </u-grid-item>
      </u-grid>
    </view>
    <u-toast ref="uToast" />
    <tab-bar></tab-bar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          name: '全部',
        },
        {
          name: '借阅',
          // badge: {
          //   isDot: true,
          // },
        },
        {
          name: '已购',
          // badge: {
          //   value: 5,
          // },
        },
      ],

      // 图书列表
      list: [
        {
          title: 'CATCHER IN THE RYE',
          url: 'https://img.js.design/assets/img/635630e1269c73eb3ba85e2d.png',
        },
        {
          title: 'CINDERELLA',
          url: 'https://img.js.design/assets/img/635630e1a38f42339d93cee1.png',
        },
        {
          title: 'MOONSHINE',
          url: 'https://img.js.design/assets/img/635630e17d1d4a15bae05cf6.png',
        },
        {
          title: 'FINDING ELENA',
          url: 'https://img.js.design/assets/img/635630e23459581fc003c75d.png',
        },
        {
          title: '多情却被无情恼：李商隐…',
          url: 'https://img.js.design/assets/img/635630e07d1d4a15bae05c99.png',
        },
        {
          title: '余生皆假期',
          url: 'https://img.js.design/assets/img/635630e09712877d7223b147.png',
        },
        {
          title: '望春风',
          url: 'https://img.js.design/assets/img/635630e09712877d7223b135.png',
        },
      ],
    };
  },
  onLoad() {
    this.list.push({
      addPlaceHolder: true,
    });
  },
  methods: {
    click(name) {
      this.$refs.uToast.success(`点击了第${name}个`);
    },
  },
};
</script>

<style lang="postcss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.book-image {
  width: 97px;
  height: 126px;
  @apply overflow-hidden;
}

.book-title {
  width: 90px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.38px;
  color: rgba(51, 51, 51, 1);
  text-align: left;
  display: inline-block;
  height: 32px;
  margin-top: 4px;
}

.book-item {
  padding-top: 25px;
}

.add-icon {
  width: 90px;
  height: 126px;
  border-radius: 2px;
  background: #f9f9f9;
  @apply flex items-center justify-center;
}
</style>
