<template>
    <div>
        <Gits :Height="rightHeight" :Width="rightWidth" />
    </div>
</template>
<script>
import Gits from '@/components/rightView/gits'
import { heightGet } from '@/uitls/domList'
export default {
    name: 'RightView',
    components: {
        Gits
    },
    data() {
        return {
            rightHeight: 0,
            rightWidth: 0
        }
    },
    mounted() {
        this.rightHeight = heightGet()
        this.rightWidth = document.documentElement.clientWidth
        console.log(document.documentElement.clientWidth)
    }
}
</script>
<style lang="scss" scoped>

</style>