<template>
  <div class="pageBox">
    <div>
      <span @click="lastPageClick">﹤</span>
      <span v-for="item in pageList" :key="item" :class="[item === pageType ? 'page_span' : '']">{{item}}</span>
      <span @click="nextPageClick">﹥</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PagesList',
  data () {
    return {
      pageList: [],
      pageType: 1
    }
  },
  methods: {
    // 上一页
    lastPageClick () {
      if (this.pageType > 1) {
        this.pageType = this.pageType - 1
        this.$parent.getData(0)
      }
    },
    // 下一页
    nextPageClick () {
      if (this.pageType < this.pageList.length) {
        this.pageType = this.pageType + 1
        this.$parent.getData(1)
      }
    },
    // 获取页数
    getPageLength (pages) {
      this.pageList = []
      if (pages > 15) {
        for (let i = 0; i < Math.floor(pages / 15); i++) {
          this.pageList.push(i + 1)
        }
      } else {
        this.pageList = [1]
      }
      console.log(this.pageList)
    }
  }
}
</script>
<style lang="scss" scoped>
.pageBox {
  font-size: 0.14rem;
  position: absolute;
  bottom: 0.3rem;
  div {
    span {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      text-align: center;
      line-height: 0.3rem;
      background-color: #fff;
      cursor: pointer;
    }
    span+span {
      margin-left: 0.1rem;
    }
    .page_span {
        background-color: rgba(117, 91, 71, 1);
        color: #ffffff;
    }
  }
}
</style>
