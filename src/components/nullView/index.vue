<template>
  <div class="box" :style="'height:' + (height/100 - 1.60) + 'rem;line-height:' + (height/100 - 1.60) + 'rem;'">暂无内容~</div>
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
