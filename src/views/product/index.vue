<template>
  <div class="product">
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  data() {
    //这里存放数据
    return {
      goods:[]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    axios.get('http://localhost:8081/public/data.json').then((res) => {
      console.log("111")
      this.goods = res.data.goods
      // this.$nextTick(() => {
      //   this._initScroll(); // 初始化scroll
      //   this._calculateHeight(); // 初始化列表高度列表
      // })
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
</style>