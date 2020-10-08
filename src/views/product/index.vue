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
        <li class="right-item-hook" v-for="(items, index) in goods" :key="index">
          <h1>{{ items.name }}</h1>
          <ul>
            <li v-for="(item, index) in items.foods" :key="index">
              <div class="pic">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <h2>{{ item.name }}</h2>
                <p class="description">{{ item.description }}</p>
                <div class="sell-info">
                  <span class="sellCount">月售{{ item.sellCount }}份</span>
                  <span class="rating">好评率{{ item.rating }}%</span>
                </div>
                <div class="price">
                  <span class="newPrice"><span class="unit">￥</span>{{ item.price }}</span >
                  <span class="oldPrice" v-if="oldPrice" >￥{{ item.oldPrice }}</span>
                </div>
                <div class="add">
                  <!-- <van-stepper v-if="item.flag" v-model="item.num" theme="round" button-size="22" @plus="add(item.num)" />
                  <span v-else @click="item.flag=true">+</span> -->
                  <span v-show="item.num>0" @click="decrease(item,$event)">-</span>
                  <input v-show="item.num>0" type="text" :value="item.num">
                  <span @click="add(item,$event)">+</span>
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
import BScroll from 'better-scroll'
import axios from "axios";
export default {
  data() {
    //这里存放数据
    return {
      value: 1,
      oldPrice: false,
      currentIndex: 0,
      goods: [],
      scrollY: 0,
      tops: [],
      clickEvent: false,
      count:0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    
  },
  //方法集合
  methods: {
    _initScrollY() {
      // 创建左侧滑动
      this.lefts = new BScroll(this.$refs.left, {
        click: true,
      });
      //创建右侧滑动
      this.rights = new BScroll(this.$refs.right, {
        click: true,
        probeType: 3,
      });

      // 给右侧绑定的BScroll绑定监听事件，获取滑动过程中的位置
      this.rights.on("scroll", (pos) => {
        // console.log(pos)
        this.scrollY = Math.abs(Math.round(pos.y));
        this.nowIndex(this.scrollY);
      });
    },

    _initTops() {
      var tops = [];
      let top = 0;
      tops[0] = 0;
      var lis = this.$refs.r_item.children; //获取到子元素的每个li
      // Array.protoype.slice.call(lis) 将具有length属性的对象转成数组
      Array.prototype.slice.call(lis).forEach((li) => {
        // console.log(index);index
        top = top + li.clientHeight; //当前的位置=上一个的位置+这个的高度
        tops.push(top);
      });
      this.tops = tops;
    },

    //nowIndex 右联左
    nowIndex(scrollY) {
      for (let i = 0; i < this.tops.length; i++) {
        if (scrollY >= this.tops[i] && scrollY < this.tops[i + 1]) {
          this.currentIndex = i;
        }
      }
    },

    selectItem(index, event) {
      this.currentIndex = index;
      this.clickEvent = true;
      if (!event._constructed) {
        return;
      } else {
        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
        let el = rightItems[index];
        this.rights.scrollToElement(el, 300);
      }
    },
    
    add(item,event){
      // console.log(event.target);
      if (!event._constructed) {
        return
      }
      item.num++;
      console.log(this.goods)
    },
    decrease(item,event){
      // console.log(event.target);
      if (!event._constructed) {
        return
      }
      item.num--;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    axios.get("/api/seller").then((res) => {
      this.goods = res.data.data.goods;
      this.goods.forEach(items=>{
        items.foods.forEach(item=>{
          item.num= 0;
          // item.flag=false
        })
      })
      // console.log(this.goods)
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(() => {
      this._initScrollY();
      this._initTops();
    }, 20);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    
  }, //生命周期 - 更新之后
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
                span{
                  display: inline-block;
                  height: 20px;
                  width: 20px;
                  border-radius: 10px;
                  background: skyblue;
                  color: white;
                  text-align: center;
                  line-height: 20px;
                  font-size: 16px;
                }
                input{
                  width: 20px;
                  height: 20px;
                  border: none;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>