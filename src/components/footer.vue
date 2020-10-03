<template>
  <div class="footer">
    <div class="left">
      <van-switch v-model="checked" />
    </div>
    <div class="right">
      <span>￥15起送</span>
    </div>
  </div>
</template>

<script>
import { Icon,Switch  } from "vant";
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
    [Icon.name]: Icon,
    [Switch.name]: Switch
  },
};
</script>
<style lang='scss' scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  display: flex;
  .left {
    flex: 1;
    height: 48px;
    // background: #141d27;
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