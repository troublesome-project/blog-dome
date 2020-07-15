<template>
  <div class="music_box">
    <div>
      <ul v-for="(item, index) in dataList" :class="`box_ul${index}`" :key="index">
        <h3>{{ item.title }}</h3>
        <li v-for="(items, indexs) in item.list" :key="indexs" @click="classifyClick(indexs)">
          {{ items.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getPath } from '../../uitls/domList'
export default {
  name: 'MusicStore',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 获取分类
    getList () {
      let urls = getPath()
      this.$axios.get(urls + '/static/musicStore.json').then(res => {
        console.log(res.data.data, 'res')
        this.dataList = res.data.data
      })
    },
    // 分类点击
    classifyClick (index) {
      console.log(index)
    }
  }
}
</script>
<style lang="scss" scoped>
.music_box {
  height: 100vh;
  font-size: 0.2rem;
  div {
    ul {
      list-style: none;
    }
    .box_ul0 {
    }
    .box_ul1 {
    }
  }
}
</style>
