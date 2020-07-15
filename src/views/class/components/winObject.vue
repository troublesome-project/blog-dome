<template>
  <div class="box">
    <div class="win_object">
      <div v-for="(item, index) in dataList" :key="index" >
        <h3>{{item.title}}</h3>
        <ul>
          <li v-for="(items, indexs) in item.list" :key="indexs">
            <div>
              <span>{{ indexs + 1 }}.</span>
              <span>{{ items.names }}:</span>
              <span>{{ items.text }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getPath } from '../../../uitls/domList'
export default {
  name: 'WinObject',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // 获取数据
    getData () {
      let urls = getPath()
      this.$axios.get(urls + '/static/winObject.json').then(res => {
        console.log(res, 'res')
        this.dataList = res.data.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.win_object {
  padding: 0 0.2rem 0.2rem 0.2rem;
  font-size: 0.16rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      div {
        padding: 0.1rem 0.2rem;
        border-radius: 0.04rem;
        background-color: #222222;
        color: #e6e6e6;
        span:nth-last-of-type(1) {
          padding-left: 0.05rem;
        }
      }
    }
    li + li {
      margin-top: 0.2rem;
    }
  }
}
</style>
