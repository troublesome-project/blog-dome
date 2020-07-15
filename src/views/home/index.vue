<template>
    <div>
        <!-- <div class="header_box">CKW、的资料卡</div> -->
        <!-- <Header/> -->
        <div class="modular_box">
            <el-row>
                <el-col :span='12' v-for="item in domeList" :key="item.id">
                  <div @click="change(item.routers, item.id)" :class="'modular_box_list modular_box_list' + item.type">{{item.name}}</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      domeList: [
        { name: '前端资料', routers: '/class', type: 'one', id: '0' },
        { name: '名言警句', routers: '/aphorism', type: 'two', id: '1' },
        { name: '书籍推荐', routers: '/books', type: 'three', id: '2' },
        { name: '歌曲收藏', routers: '/musicStore', type: 'four', id: '3' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    change (row, id) {
      this.$router.push({
        path: row,
        query: {
          id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.modular_box{
    height: calc(100vh - 1.3rem);
    padding: 0.2rem;
    .modular_box_list{
        margin: 0.2rem;
        height: 2.5rem;
        background-color: #f60;
        font-size: 0.3rem;
        text-align: center;
        line-height: 2.5rem;
        font-weight: 400;
        box-shadow: 0 0.05rem 0.05rem;
        color: #e6e6e6;
    }
    .modular_box_list:hover {
        cursor: pointer;
    }
    .modular_box_listone{
        background-color: #909399;
    }
    .modular_box_listtwo{
        background-color: #67C23A;
    }
    .modular_box_listthree{
        background-color: #E6A23C;
    }
    .modular_box_listfour{
        background-color: #F56C6C;
    }
}
</style>
