<template>
  <div class="box">
    <!-- <Header/> -->
    <div class="bodyBox">
      <!-- <ul>
        <li v-for="(item, index) in tableList" :key="index">
          <router-link :to="{path: item.path}">{{item.title}}</router-link>
        </li>
      </ul> -->
      <div class="leftBox">
        <LeftView :tableList="tableList" :Height="leftHeight" :types="types" @type="getTypes" />
      </div>
      <div class="rightBox">
        <RightView :types="types" :tableType="tableType" :Height="leftHeight" :Width="rightWidth" ref="change" />
      </div>
    </div>
  </div>
</template>
<script>
import LeftView from '../../components/leftView/index'
import RightView from '../../components/rightView/index'
import { heightGet, widthGet } from '@/uitls/domList'
export default {
  name: 'Books',
  components: {
    LeftView,
    RightView
  },
  data () {
    return {
      types: 0,
      tableType: 0,
      leftHeight: 0,
      rightWidth: 0,
      tableList: [
        { title: '青春', type: 0, path: '/books/other' },
        { title: '科幻', type: 1, path: '/books/other' },
        { title: '历史', type: 2, path: '/books/other' },
        { title: '名著', type: 3, path: '/books/other' }
      ]
    }
  },
  mounted () {
    this.leftHeight = heightGet()
    this.rightWidth = widthGet()
    this.tableType = Number(this.$route.query.id)
  },
  methods: {
    // 切换模块
    getTypes (row) {
    //   this.types === row
      this.$refs.change.changeTypes(row)
    }
    // // 页面
    // change (path) {
    //   this.$router.push({
    //     path
    //   })
    // }
  }
}
</script>
<style lang="scss" scoped>
.bodyBox{
    display: flex;
    flex-wrap : nowrap;
    font-size: 0.16rem;
    .rightBox{
        flex: auto;
        overflow: hidden;
    }
}
</style>
