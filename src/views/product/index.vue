<template>
  <div class="product">
    <div class="product-l" ref="left">
      <ul ref="l_item">
        <li
          v-for="(item, index) in goods"
          :key="index"
          :class="index == currentIndex ? 'menu-item-selected' : ''"
          @click="selectItem(index, $event)"
        >
          <span class="left-item">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="product-r" ref="right">
      <ul ref="r_item" class="prolist">
        <li>
          <h1>1111</h1>
          <ul>
            <li>
              <div class="pic">
                <img
                  src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                  alt=""
                />
              </div>
              <div class="content">
                <h2>皮蛋廋肉粥</h2>
                <p class="description">咸粥</p>
                <div class="sell-info">
                  <span class="sellCount">月售100份</span>
                  <span class="rating">好评率99%</span>
                </div>
                <div class="price">
                  <span class="newPrice"><span class="unit">￥</span>30</span>
                  <span class="oldPrice">￥50</span>
                </div>
                <div class="add">
                  <!-- <van-stepper v-model="value" theme="round" button-size="22" disable-input show-minus="false" /> -->
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Stepper } from "vant";
// import BScroll from 'better-scroll'
import axios from "axios";
export default {
  data() {
    //这里存放数据
    return {
      value:1,
      currentIndex: 0,
      goods: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    selectItem(index, event) {
      this.currentIndex = index;
      this.clickEvent = true;
      console.log(this.currentIndex);
      return event;
      // console.log(event);
      // if (!event._constructed) {
      //   return;
      // } else {
      //   let rightItems = this.$refs.right.getElementsByClassName(
      //     "right-item-hook"
      //   );
      //   let el = rightItems[index];
      //   this.rights.scrollToElement(el, 300);
      // }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    axios.get("http://localhost:3333/getdata").then((res) => {
      this.goods = res.data.list.goods;
      console.log(this.goods);
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
  components: {
    [Stepper.name]: Stepper,
  },
};
</script>
<style lang='scss' scoped>
.product {
  flex: 1;
  overflow-y: auto;
  display: flex;
  .product-l {
    width: 80px;
    background: #f3f5f7;
    margin-top: 2px;
    ul {
      width: 100%;
      li.menu-item-selected {
        vertical-align: auto;
        background: #fff;
        font-weight: 700;
        margin-top: -1px;
      }
      li {
        position: relative;
        display: table;
        height: 54px;
        line-height: 14px;
        width: 56px;
        padding: 0 12px;
        span {
          display: table-cell;
          vertical-align: middle;
          font-size: 12px;
          font-weight: 200;
          white-space: normal;
          line-height: 14px;
        }
      }
    }
  }
  .product-r {
    flex: 1;
    margin-top: 2px;
    .prolist {
      li {
        h1 {
          height: 26px;
          line-height: 26px;
          padding-left: 12px;
          font-size: 12px;
          color: #93999f;
          background: #f3f5f7;
          border-left: 2px solid #d9dde1;
        }
        ul {
          li {
            position: relative;
            display: flex;
            margin: 0 18px;
            padding: 18px 0;
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            .pic {
              width: 57px;
              img {
                width: 57px;
                height: 57px;
              }
            }
            .content {
              flex: 1;
              padding-left: 10px;
              h2 {
                margin: 2px 0 8px 0;
                font-size: 14px;
                line-height: 14px;
                height: 14px;
                font-weight: 700;
                color: #07111b;
              }
              .description {
                font-size: 10px;
                margin-bottom: 8px;
                line-height: 12px;
                color: #93999f;
              }
              .sell-info {
                font-size: 10px;
                color: #93999f;
                line-height: 10px;
                .sellCount {
                  margin-right: 4px;
                }
              }
              .price {
                font-size: 10px;
                font-weight: 700;
                line-height: 24px;
                .newPrice {
                  font-size: 14px;
                  color: #f01414;
                  .unit {
                    font-size: 10px;
                    font-weight: normal;
                  }
                }
                .oldPrice {
                  text-decoration: line-through;
                  color: #93999f;
                  padding-left: 4px;
                }
              }
              .add {
                position: absolute;
                right: 0;
                bottom: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>