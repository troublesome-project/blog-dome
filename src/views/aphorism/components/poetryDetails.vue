<template>
  <div class="detailBox" :style="'height:' + heights + 'px;width:' + widths + 'px;'" >
    <div class="box">
      <h5>{{dataList.tname}}</h5>
      <p class="name_box">
        <span>{{dataList.times}}</span>
        <span>{{dataList.names}}</span>
      </p>
      <p v-for="item in textList" :key="item.index">{{item}}</p>
    </div>
  </div>
</template>
<script>
import { heightGet, widthGet } from '@/uitls/domList'
export default {
  name: 'PoetryDetails',
  data () {
    return {
      heights: 0,
      widths: 0,
      dataList: {},
      textList: []
    }
  },
  mounted () {
    this.heights = heightGet()
    this.widths = widthGet()
    // console.log(this.$route.params.id)
    // console.log(window.location.origin)
    this.getData(this.$route.params.id)
  },
  methods: {
    // 获取数据
    getData (id) {
      let urls = window.location.origin
      this.$axios.get(urls + '/static/poetry.json').then(res => {
        this.dataList = res.data.dataList
        for (let i of res.data.dataList) {
          if (i.id === id) {
            this.dataList = i
            this.splitText(i.text)
          }
        }
      })
    },
    // 截取内容
    splitText (text) {
      let lists = text.split('')
      let indexs = 0
      for (let i = 0; i < lists.length; i++) {
        if (lists[i] === '。') {
          this.textList.push(text.slice(indexs = this.textList.length === 0 ? indexs : indexs + 1, i + 1))
          indexs = i
        } else if (lists[i] === '？' || lists[i] === '！' || lists[i] === '；') {
          if (text.indexOf('，') + 1 < (i - indexs)) {
            console.log(text.indexOf('，'), i - indexs)
            this.textList.push(text.slice(indexs = this.textList.length === 0 ? indexs : indexs + 1, i + 1))
            indexs = i
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.detailBox {
  background-color: rgba(249, 204, 157, 1);
  overflow-y: auto;
  // overflow: hidden;
  .box {
    h5 {
      text-align: center;
      font-size: 0.24rem;
      margin: 0.2rem 0 0.1rem 0;
    }
    p {
      text-align: center;
      font-size: 0.16rem;
    }
    .name_box {
      margin: 0;
      padding: 0;
      font-weight: 600;
      span+span {
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
