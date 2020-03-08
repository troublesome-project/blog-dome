<template>
  <div>
    <div class="right_box" :style="'height:' + (Height - 130) + 'px'">
      <Gits v-if="types === 0" />
      <DomOperation v-else-if="types === 1" />
      <ProjectBuild v-else-if="types === 2" />
      <JsMethod v-else-if="types === 3" />
      <LifeCycle v-else-if="types === 4" />
    </div>
  </div>
</template>
<script>
import Gits from '@/components/rightView/gits'
import DomOperation from '@/components/rightView/domOperation'
import ProjectBuild from '@/components/rightView/projectBuild'
import JsMethod from '@/components/rightView/jsMethod'
import LifeCycle from '@/components/rightView/lifeCycle.vue'
export default {
  name: 'RightView',
  components: {
    Gits,
    DomOperation,
    ProjectBuild,
    JsMethod,
    LifeCycle
  },
  props: {
    Height: {
      type: Number,
      default: 0
    },
    Width: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      types: 0
    }
  },
  methods: {
    changeTypes (type) {
      this.types = type
    }
  }
}
</script>
<style lang="scss" scoped>
.right_box {
  overflow-y: auto;
}
.right_box::-webkit-scrollbar {
  width: 0.01rem;
}
</style>
