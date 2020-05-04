<template>
  <div>
    <ul>
      <li v-for="item in lists" :key="item.index">
        <span>{{item.types}}</span>
        <div v-for="items in item.datas" :key="items.index">
          <span>{{items.name}}</span>
          <span>{{items.price}}</span>
          <!-- <span>{{items.brand}}</span> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getPath } from '../../../uitls/domList'
export default {
  name: 'Others',
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    console.log(this.lists)
    this.getData()
  },
  methods: {
    getData () {
      let urls = getPath()
      this.$axios.get(urls + '/static/others.json').then(res => {
        this.lists = res.data.dataList
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  font-size: 0.16rem;
  ul {
    list-style: none;
    display: flex;
    // border: 0.01rem solid #000;
    padding: 0;
    margin: 0;
    li {
        flex: 1;
        span {
            display: block;
            padding: 0.05rem;
            font-weight: bold;
            text-align: center;
        }
        div {
            width: 100%;
            font-size: 0.14rem;
            border-top: 0.01rem solid #000;
            padding: 0.05rem 0;
            span {
                display: inline;
                font-weight: normal;
            }
        }
        // div+div {
        //     border-top: 0.01rem solid #000;
        // }
    }
    li+li {
        border-left: 0.01rem solid #000;
    }
  }
}
</style>
