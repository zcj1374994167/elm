<template>
  <div class="content">
    <div class="nav">
      <van-tabs v-model="active" title-active-color="red" line-width="0" line-height="0">
        <van-tab title="商品" to='/index/product'></van-tab>
        <van-tab title="评论" to='/index/comment'></van-tab>
        <van-tab title="商家" to='/index/store'></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  data() {
    //这里存放数据
    return {
      active: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
};
</script>
<style lang='scss' scoped>
.content{
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  .nav{
    height: 44px;
  }
}
</style>