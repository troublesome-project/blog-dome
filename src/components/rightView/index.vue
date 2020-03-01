<template>
    <div>
        <div class="right_box" :style="'width:' + (rightWidth - 200) / 100 + 'rem;' + 'height:' + (rightHeight - 130) / 100 + 'rem'">
            <Gits v-if="types === 0" />
            <DomOperation v-else-if="types === 1" />
        </div>
    </div>
</template>
<script>
import Gits from '@/components/rightView/gits'
import DomOperation from '@/components/rightView/domOperation'
import { heightGet, widthGet } from '@/uitls/domList'
export default {
    name: 'RightView',
    components: {
        Gits,
        DomOperation
    },
    data() {
        return {
            rightHeight: 0,
            rightWidth: 0,
            types: 0
        }
    },
    methods: {
        changeTypes(type) {
            this.types = type
        }
    },
    mounted() {
        this.rightHeight = heightGet()
        this.rightWidth = widthGet()
        // console.log(document.documentElement.clientWidth)
    }
}
</script>
<style lang="scss" scoped>

</style>