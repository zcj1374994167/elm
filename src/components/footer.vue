<template>
  <div class="footer">
    <div class="left">
      <span class="icon">
        <van-icon name="shopping-cart" size="40" badge="" />
      </span>
      <span class="totle">￥<span>0</span>元</span>
      <span class="postprice">另需要配送费￥<span>4</span>元</span>
    </div>
    <div class="right">
      <span class="starprice">￥<span>15</span>起送</span>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  data() {
    //这里存放数据
    return {
      checked: true,
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
    [Icon.name]: Icon
  }
};
</script>
<style lang='scss' scoped>
.footer {
  // position: fixed;
  // left: 0;
  // bottom: 0;
  // width: 100%;
  height: 48px;
  display: flex;
  .left {
    flex: 1;
    height: 48px;
    background: #141d27;
    z-index: 50px;
    .icon {
      display: inline-block;
      width: 44px;
      height: 44px;
      margin: -5px 0 0 10px;
      background: #2b343c;
      border-radius: 50%;
      font-size: 24px;
      color: #80858a;
      line-height: 44px;
      font-weight: 700;

    }
    .totle {
      position: relative;
      top: -10px;
      left: 5px;
      display: inline-block;
      font-size: 16px;
      margin-top: 12px;
      padding-right: 12px;
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 700;
      line-height: 24px;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .postprice {
      position: relative;
      top: -10px;
      left: 5px;
      display: inline-block;
      margin: 12px 0 0 12px;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 700;
      line-height: 24px;
    }
  }
  .right {
    flex: 0 0 105px;
    font-size: 12px;
    font-weight: 700;
    background: #2b343c;
    color: rgba(255, 255, 255, 0.4);
    line-height: 48px;
    text-align: center;
  }
}
</style>