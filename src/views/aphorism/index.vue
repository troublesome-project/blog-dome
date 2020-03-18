<template>
  <div>
    <Header/>
    <div class="bodyBox">
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
  name: 'aphorism',
  components: {
    LeftView,
    RightView
  },
  data () {
    return {
      leftHeight: 0,
      rightWidth: 0,
      types: 0,
      tableType: 0,
      tableList: [
        { title: '古诗词系列', type: 0 },
        { title: '文言文系列', type: 1 },
        { title: '青春励志系列', type: 2 },
        { title: '小说系列', type: 3 },
        { title: '其他', type: 4 }
      ]
    }
  },
  methods: {
    // 切换模块
    getTypes (row) {
    //   this.types === row
      this.$refs.change.changeTypes(row)
    }
  },
  mounted () {
    this.leftHeight = heightGet()
    this.rightWidth = widthGet()
    this.tableType = Number(this.$route.query.id)
  }
}
</script>
<style lang="scss" scoped>
.bodyBox{
    display: flex;
    flex-wrap : nowrap;
    .leftBox{
        // flex: auto;
    }
    .rightBox{
        flex: auto;
        overflow: hidden;
    }
}
</style>
