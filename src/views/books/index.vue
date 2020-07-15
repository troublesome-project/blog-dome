<template>
  <div class="box">
    <div class="bodyBox">
      <ul>
        <li v-for="(item, index) in tableList" :key="index" @click="change(index)">
          <!-- <div v-show="item.types === 1" class="just_box">
            <img :src="require('../../assets/book_logo.png')" alt="">
            <span>《{{ item.name }}》</span>
          </div> -->
          <div class="back_box" :style="`background:rgba(${Math.round(Math.random()*100)}, ${Math.round(Math.random()*100)}, ${Math.round(Math.random()*100)}, 0.9)`">
            <span>名称:《{{ item.name }}》</span>
            <span>作者:{{ item.author }}</span>
            <span>出版时间:{{ item.date }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getPath } from '../../uitls/domList'
import { heightGet } from '@/uitls/domList'
export default {
  name: 'Books',
  data () {
    return {
      heights: 0,
      tableList: []
    }
  },
  mounted () {
    this.heights = heightGet()
    this.getList()
  },
  methods: {
    // 数据请求
    getList () {
      let urls = getPath()
      this.$axios.get(urls + '/static/books.json').then(res => {
        console.log(res.data.data, 'res')
        this.tableList = res.data.data
      })
    },
    change (index) {
      console.log(index)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  height: 100vh;
  overflow-y: auto;
}
.bodyBox{
  display: flex;
  flex-wrap : nowrap;
  font-size: 0.16rem;
  background: url('../../assets/book_logo.png') 100% 100% / 100% 100% no-repeat;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 0.1rem;
    li {
      display: inline-block;
      width: 25%;
      .back_box {
        height: 1.5rem;
        margin: 0.05rem;
        padding: 0.1rem;
        border-radius: 0.16rem;
        box-shadow: 0 0.05rem 0.05rem #666666;
        // background-color: rgba(249, 204, 157, 1);
        span {
          display: block;
          font-size: 0.16rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          line-height: 0.2rem;
          color: #cccccc;
        }
        span:nth-of-type(1) {
          font-size: 0.2rem;
          color: #eeeeee;
        }
        span+span {
          margin-top: 0.1rem;
        }
      }
      .back_box:hover {
        transform: translate(0,-0.05rem);
        transition: all 0.8s;
      }
    }
  }
}
</style>
