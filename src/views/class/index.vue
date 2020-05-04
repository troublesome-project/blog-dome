<template>
    <div>
        <!-- <Header/> -->
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
import LeftView from '@/components/leftView/index'
import RightView from '@/components/rightView/index'
import { heightGet, widthGet } from '@/uitls/domList'
export default {
  name: 'class',
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
        { title: 'git篇', type: 0, path: '/class/gits' },
        { title: 'DOM节点操作篇', type: 1, path: '/class/domOperation' },
        { title: 'vue项目搭建篇', type: 2, path: '/class/projectBuild' },
        { title: 'js常用方法篇', type: 3, path: '/class/jsMethod' },
        { title: '生命周期篇', type: 4, path: '/class/lifeCycle' },
        { title: 'vue修饰符篇', type: 5, path: '/class/vueModifier' },
        { title: '对象方法篇', type: 6, path: '/class/winObject' }
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
    // console.log(this.rightWidth, 'left')
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
