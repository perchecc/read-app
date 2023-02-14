<template>
  <u-tabbar :value="tabbarValue" fixed @change="changeTabBar" safeAreaInsetBottom :placeholder="false">
    <u-tabbar-item v-for="(tabBar, index) in tabBarList" :key="index" :name="index" :text="tabBar.text"
      :icon="tabBar.uniIcon"></u-tabbar-item>
  </u-tabbar>
</template>

<script>
import tabBarList from '@/config/tabbar.config';

export default {
  data() {
    return {
      tabBarList,
    };
  },
  methods: {
    changeTabBar(e) {
      if (e === 3) return uni.$u.toast('请您先登录');
      uni.setStorageSync('tabbarIndex', e);
      uni.switchTab({
        url: `/${tabBarList[e].pagePath}`,
      });
      return true;
    },
  },
  computed: {
    tabbarValue() {
      const tabbarIndex = uni.getStorageSync('tabbarIndex');
      return tabbarIndex || 0;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
