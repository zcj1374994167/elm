<template>
  <div class="header">
    <div class="header-wrap">
      <div class="pic">
        <img
          src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
          alt=""
        />
      </div>
      <div class="titles">
        <div class="title">
          <span class="tit-icon"></span>
          <span class="tit">粥品香坊（回龙观）</span>
        </div>
        <div class="description">蜂鸟专送 / 38分钟送达</div>
        <div class="supports">
          <span class="sup-icon"></span>
          <span class="sup-tit">在线支付满28减5</span>
        </div>
      </div>
      <div class="count">
        <div class="nums">5个</div>
        <div class="sub"></div>
      </div>
    </div>
    <div class="notice">
      <span class="notice-icon"></span>
      <span class="notice-con"
        >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span
      >
      <span class="sub"></span>
    </div>
  </div>
</template>

<script>
// import { Button } from "vant";
export default {
  data() {
    //这里存放数据
    return {};
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
  //   components: {
  //     [Button.name]: Button,
  //   },
};
</script>
<style lang='scss' scoped>
.header {
  height: 136px;
  // position: relative;
  background: rgba(7, 17, 27, 0.5);
  // color: #fff;
  // overflow: hidden;
  .header-wrap {
    position: relative;
    display: flex;
    padding: 24px 12px 18px 24px;
    font-size: 12px;
    .pic {
      img {
        width: 64px;
        height: 64px;
      }
    }
    .titles {
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        font-size: 16px;
        .tit-icon {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjhCMERGODc0RDYwMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjhCMERGODg0RDYwMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OEIwREY4NTRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OEIwREY4NjRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpkNE6kAAAOnSURBVHja7Fm/M2NRFL75wSaxsxoKBX8BnYqKjoaSSmFnVHTMFootaOiomNlCp6ShVNHp6FTMrh2aZdaSZCN7v+OdzMl138t9eTEbSc7MneTFyb33O/ec73w3Yr+6usaUUt/06FGNbdd6zMY04B9NALYEOt5EYGE9cdVk1gLc6Jb4ksl8dXH8MDenkqOjKjkwoGKpFH1WvL/3j2Rvr+rY3yffwump22b6+1Vme5u+m+jrU4Wzs9f7WFxU6dVVlRgcJB+VzarizY0zYLB00cWxY29PJYeHS89/j49pBAUo1tlJ7/MHB+pxYUEV7+5ebT61tETAaL7DQ1qH53+YnCSf4tWVesa4vFQfj45K8+J7j/Pz9Iq9Be2HLVltamABGYAgaxsfp9c/MzO+J4tgALBpCAgbgJlBhGV2dmiN7NaWelpefhvAud1dldcjKCOkZdfXo9efDowMIgdSZhV8EFgzmyIDRnq5pJA8naiW8wLcPjVVVlbt09NU97Qvnfp+YN8dS+eNrAJYZA6CL33eJKXjmiFda7gaQ62mVlbKucA7WckjvBdn7ql2Q0irdmMDUetTAsSzrFmZytUQZ/Qa9tpEEIuHPdGEx8B+xgzMgWHixLMZnJoAZpB4xUJBpCX7qYtx3zWt8/bWl/iYOINIKhRgpFBybOxFGOgeiT7Hp0GCQC/Em0CU8TmdulZgcvOYB/6urclPRJg1DXaGr+vpVgQc01Qv+50Eh0XQ95BmCASeZRqzb2JoqCQe4GNTXCZRIUA2EWECQyvidvQmNWyKCQYft0TY5ovAJbQWf5iYoLIwT/XTxUW5dvcCyKVEde6tJVtSenOTfBHISukdCvDT2loplWRkC3rxuMGg7GsyKTZqgqWLiFce0hfy8ffICAFNb2yU/Y3nxXzQ07Y5IwPmGsRCDBgLgi3NHinrtQyEjzAAWNS9JCnMwSkuNTT6rkxvgIUP5qik6OpGadlICqAAFANAUNM5fX006x7pj7TGTaqSNkiqOrY2IW5IiBgsbfscGZHXHaXml4daW+HkxFpC1iujEBp88rI3BxFX/QC21B7dkS2pLgH5+dS0Lbk0evYNEvZMZgAbRi1FsVCAw+hjF19m3pyn4OruV8u77m4aLinEvtyPrZcF76edvKVO/8sJg0iwYZNQQBLcKjgV+TJh+j6fn7+A1vra7JOYx1RHLEyCbmJyrbCl4PyrZaNY6z8PLcAtwO8f8HUT4f0JwJ/xpgnAftdj9p8AAwCeZRLH3XUY/AAAAABJRU5ErkJggg==);
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .tit {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .description {
        font-size: 12px;
        margin-bottom: 10px;
      }
      .supports {
        .sup-icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjk0NDhEMEM0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjk0NDhEMEQ0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwQTREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOTQ0OEQwQjREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmOUYqwAAAXASURBVHjazFjZalRZFN3nnFtxNolxHqJRUHHGAcTpRQQfpKFfBH3wC/pjujF/IAg+ddP9ogiKE6g44IizGOcpibNJ3XtOr7VP3Ri77y1TDU3lwkklVbfOWXvttdfeNyaE0CUiv2D9hNUhzbneYv2J1W0A6Ff8sg+rXZp79WEdIKBH+KVTRsfVY/GjTUbP1ZbgR/Z/7Bw+fJDwFtJoaRHT3i5m3DgJnz+LGT++3teypO6uGbA6N+yUIJKmIpXKDwH5p08lO3NG9zCdnWLnzxd/966+uqVLRcaMKfxeMSAc7J89E3/njpjp08XOmydm8mQJ1ar469clfPwopq0tfjZzZjEi3tvTI/75c7GvX4uZOFGyq1d1EaRbubIwsGJAAwOSXb4s6eHDYlpbxW3YIMnGjcpWduGCpJcuiUkSsStWSGXXruKYXr6MjOI+w7QhIDNpkvj79yU9d07sjBli5swZGaDw9asEgGIE1EIK6v2TJ5KsX6+fG2P0IKZgoLu7JGdeF7XjAW7w4MGYbgQVXr0S//69uJECYjQ8PIBuf++eCAG+eCEei2kjGL0PhzFtQoBkI6IVsSheirq3V8LgoMjYsWJnzYopwn3K1oQJDWgIG1oI0SFN/sEDMdgw2bFD32N0gdEjWrd4sVT27i2uB2gtPXpUGXazZ0vLnj3fNAOWGMzIAdUidQsWiF+9Wixek02bYhprbBiAZvSqleGZAqsMKLx7F5nEvYEAOjq+r9iSq27ZU9DJzp1ip0yJzMBHAsEQFMqWhw8eOvS9/vr7FTRZDSx5gmHVPnwo2Y0bCorMGpS/KSj9+j4EilkN8umTVI8d0+oLfX0aOQ+z0IJduDBqhoKliHEYAXkGQLYIHveqL50+rQXD9xJqqmFAtSs9e1b9g8I0ZIGHIF1m6lRJtm2LQOAzXPQvgRtbeFC1piFNLQSuGvryJaYSVtBwynJNEBAPdWvWiH+EXozDTI0V//ixWoJle4BOslu3tIqUMVYY7yOgN2+UVU0nTfU/AQK9GcBQoLR8M22aCA4PNVHzUNpBdvEispJFBvAeTVPTQYugwPFKDSpIvM/epqksKvDy7hg0ch7GjR1c2UDcuuk/DRBC1R4FBpUdANNDIWw9mG2EjRZ7WphhmQfVBcQNqnDoAEel5bMhsur+BYhsgREHQAkB8R6WN/SkLOWGSQbpbygCBd0QILIDQ/RshOxZS5ZgUvnB2JQLlSkCa7QKC9EPAaoZruvqUvE3BEhLFE1UOL/AUd3ateorKtL8or8kSWm6FWDuzPwbYFTMnA5K9FMKiO7LrqwVQi9iv7L2W69immj9pB5/kxGPKmIF6hDGwxGADmMEQ4NE+hyY9vCx7Nq1OLyNOGXYaEgLrDSMIto26CE0Nh4CYarI8/K/fVtSGh8P4vcoXKamBoh7kmnOSOmpU+IxI40YkEUzdMuWRT0ABA9iVMoAhrO8Y6uLU+Qsb4KghphWljkO1FLPJwGmGAB1AmBgJX0tKethLGPhCMrmyJno5ElNgTLFe2CCbLpsERxBGIBdtEgyTJmCyqRjB9jG0MFk+vx51afO2CXCLjVGpkMjIiM0QFBNX6HJKeC5cyMQ6IJjrEFb4XsEll25ItUjR9QyVNw50ydOxB6I6jONMKQXNYKDAqZCfXIgGGzKlaxbp0DUEPmai50VSi0dP67ppbPTBJk+DYrpHT7MNWKMrCL1EWyYQIzJ5s2RNSyHGclQPzmQYWWcogBYoWS3smWLVHbvjqApfoqbYGiYJZZRzhAYccuXK0tu1arYBlg5fJ9PDCVewllHMBMZDnVbt8bvbd8uKc325k1l2nIeYhUXEYFG2Vv4XM9IWD15RLXh39Ds6k1+7Owc0pjyvGcRDOcjeJAObHysItCC5/tyQE36hwM1ZEbRs32d8aM5lyOg3lEEqJ+A/qr9s6jp+sH6g2X/G/0M62es1iaBwUOc/I61/28BBgD3P8H8u1Ef0QAAAABJRU5ErkJggg==);
        }
        .sup-tit {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }
    .count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;
      .nums {
        font-size: 10px;
      }
    }
  }
  .notice {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);
    .notice-icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
      width: 22px;
      height: 12px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAYCAYAAACBbx+6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjk0NDhEMDg0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjk0NDhEMDk0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwNjREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOTQ0OEQwNzREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puq6d8sAAAM6SURBVHja1FdLTFNBFL0YdrZbS7cI7vjuqoZEI0EwGhKIGkxABbugKNJFaWJ1IZC0JLapKS6IqDVKRK2BxL+uiIaVIrqTzw7aurTt+vnOwAzT+qYfNeo7ycvrm++59557Z1qmaVorEU3pj53+b8T1p7dMJ7xhArKCNAhrZCLsIJOhvJhB8+8WqKG+hqwWy3ZsEkn2NNbXFo6jPg6wV9jY+9nLN7S49IV9V++upKb9jj9HGJt5r4yQxbKTmvY5yDfspuXVNXINDbP+2PTtLEOMMOD2snVAcLDfSYnkN3r+6i3ra6irKYlwQUlMRe+zdzqdEZ6CV3hbeGIy7/yPnz6LeYygHikVUuk0cwQcokLepMMCLceOi+9I0C8k8ODxLF2/sUn2kmeIjhxuNlwDBBD+UoBoRicjQkJFS+JhbG7bM3roZL2e7GynR0/mmPfGxkOsLZc0vMvJ9vacYmsAkAOXBKI16HJmzbNaLYZk8xIGkZnYrLAY2uXJAi1Dd/As9AkYkeZyAVk8HLLHsXYxiVtQw9AuNAogUWDxrbvTzDNIQoQaG7W1HBJzQDqsywRSAnxeN/mvXs4iWwjQb0fXGaWOy1WJwkMGQvAavCsnz4mO9k1j9HAur6yJDWZ0bXMjes4NFCQIb+892GaofSMd/5R08M5p53lGDhtDCgCs5oTldu4VbICIyOGH4SWdu1ulj+uYV6MsaDnYiCe05qOd2oj/mmi7eeee5jjQyp7uPpf2PZVi7R8Wl1gf8HVlVeu/6MldjrXxeRijwtMXr9k4jOfrG8GwrMmWwuPwLryHBJkIBYTl3Ou5SfXXy5o8cCwQyko+OUxnu7tYoiFBizliL+jz91RVGvbJpa6xrrb0ssbP/Pn3C8rDAd+oHPDy6HiQolUR5UYAyKpKmByFaoVReQmDbHjrJEOIcP6PBoIi8fAtVw1EAf2QzD+5rYEQlwLe/E4hg8uA98FLuNmppIGDBMar9vstwihduST58Qyi8nUTJOPJJPk87rw6RqhVksm9JP3S5QeyACm73WZcE6U6XGHbZXjNxCUpk8mwfhijuoqCMK9EMEw1zpR/keIm4psA4T78MAHZdVz8fggwAAhHLI5JzyRSAAAAAElFTkSuQmCC);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .notice-con {
      font-size: 10px;
      vertical-align: middle;
      margin: 0 4px;
    }
  }
}
</style>