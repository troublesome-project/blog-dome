<template>
  <div class="box" :style="'height:' + (height - 160) + 'px;line-height:' + (height - 160) + 'px;'">暂无内容~</div>
</template>
<script>
import { heightGet } from '@/uitls/domList'
export default {
  name: 'NullView',
  data () {
    return {
      height: '',
      width: ''
    }
  },
  mounted () {
    this.height = heightGet()
  }
}
</script>
<style lang="scss" scoped>
.box {
    font-size: 0.24rem;
    text-align: center;
    color: #cccccc;
}
</style>
