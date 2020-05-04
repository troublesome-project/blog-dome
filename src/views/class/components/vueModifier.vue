<template>
  <div>
    <div class='modifier_box'>
      <ul v-for="item in dataList" :key="item.index">
        <h3>{{item.types}}</h3>
        <li v-for="items in item.list" :key="items.id">
          <p>{{items.id}}.<span>{{items.names}}</span></p>
          <div>{{items.use}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getPath } from '../../../uitls/domList'
export default {
  name: 'VueModifier',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    getDatas () {
      let urls = getPath()
      this.$axios.get(urls + '/static/modifier.json').then(res => {
        // console.log(res)
        this.dataList = res.data.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.modifier_box {
  font-size: 0.16rem;
  padding: 0 0.2rem 0.2rem 0.2rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    p {
      padding: 0.05rem 0.1rem;
      border-radius: 0.02rem;
      span {
        margin-left: 0.05rem;
      }
    }
    div {
      padding: 0.1rem 0.2rem;
      border-radius: 0.04rem;
      background-color: #222222;
      color: #e6e6e6;
    }
  }
}
</style>
