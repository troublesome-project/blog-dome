<template>
  <div class="box">
    <div class="win_object">
      <div v-for="(item, index) in dataList" :key="index" >
        <h3>{{item.title}}</h3>
        <ul>
          <li></li>
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
}
</style>
