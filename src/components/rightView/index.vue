<template>
  <div>
    <div class="right_box" :style="'height:' + (Height - 130) + 'px'">
      <Gits v-if="types === 0 && tableType === 0" />
      <DomOperation v-else-if="types === 1 && tableType === 0" />
      <ProjectBuild v-else-if="types === 2 && tableType === 0" />
      <JsMethod v-else-if="types === 3 && tableType === 0" />
      <LifeCycle v-else-if="types === 4 && tableType === 0" />
      <Poetry v-if="types === 0 && tableType === 1" />
    </div>
  </div>
</template>
<script>
import Gits from '../../views/class/components/gits'
import DomOperation from '../../views/class/components/domOperation'
import ProjectBuild from '../../views/class/components/projectBuild'
import JsMethod from '../../views/class/components/jsMethod' 
import LifeCycle from '../../views/class/components/lifeCycle'
import Poetry from '../../views/aphorism/components/poetry'
export default {
  name: 'RightView',
  components: {
    Gits,
    DomOperation,
    ProjectBuild,
    JsMethod,
    LifeCycle,
    Poetry
  },
  props: {
    Height: {
      type: Number,
      default: 0
    },
    Width: {
      type: Number,
      default: 0
    },
    tableType: {
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
