<template>
    <div>
        <div class="method_box">
            <h3>js数组及字符串的基本操作方法</h3>
            <el-table :data="tableBody" border style="width:100%;" center>
                <el-table-column label="方法名" width="120" prop="name" fixed="left"></el-table-column>
                <el-table-column label="类型" width="80" prop="types"></el-table-column>
                <el-table-column label="作用" min-width="350" prop="text"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { getPath } from '@/uitls/domList';
export default {
  name: 'JsMethod',
  data () {
    return {
      heightTab: 0,
      tableBody: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let urls = getPath()
      this.$axios.get(urls + '/static/jsMethods.json').then(res => {
        this.tableBody = res.data.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.method_box {
    padding: 0 0.2rem 0.2rem 0.2rem;
    font-size: 0.16rem;
}
</style>
