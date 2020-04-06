<template>
  <div>
    <div class="right_box" :style="'height:' + (Height - 130) + 'px'">
      <Gits v-if="types === 0 && tableType === 0" />
      <DomOperation v-else-if="types === 1 && tableType === 0" />
      <ProjectBuild v-else-if="types === 2 && tableType === 0" />
      <JsMethod v-else-if="types === 3 && tableType === 0" />
      <LifeCycle v-else-if="types === 4 && tableType === 0" />
      <VueModifier v-else-if="types === 5 && tableType === 0" />
      <Poetry v-if="types === 0 && tableType === 1" />
      <AncientArticles v-else-if="types === 1 && tableType === 1" />
      <Other v-else-if="types === 4 && tableType === 1" />
    </div>
  </div>
</template>
<script>
import Gits from '../../views/class/components/gits' // git
import DomOperation from '../../views/class/components/domOperation' // Dom节点操作
import ProjectBuild from '../../views/class/components/projectBuild' // vue项目搭建
import JsMethod from '../../views/class/components/jsMethod' // js常用方法
import LifeCycle from '../../views/class/components/lifeCycle' // 生命周期
import VueModifier from '../../views/class/components/vueModifier' // vue修饰符
import Poetry from '../../views/aphorism/components/poetry' // 古诗
import Other from '../../views/aphorism/components/other' // 其他
import AncientArticles from '../../views/aphorism/components/ancientArticles' // 文言文
export default {
  name: 'RightView',
  components: {
    Gits,
    DomOperation,
    ProjectBuild,
    JsMethod,
    LifeCycle,
    Poetry,
    Other,
    VueModifier,
    AncientArticles
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
