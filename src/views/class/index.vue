<template>
    <div>
        <Header/>
        <div class="leftBox">
            <LeftView :Height="leftHeight" />
        </div>
        
        <div>
            <!-- <RightView /> -->
        </div>
    </div>
</template>
<script>
import LeftView from '@/components/leftView/index'
import RightView from '@/components/rightView/index'
import { heightGet } from '@/uitls/domList'
export default {
    name: 'class',
    components: {
        LeftView,
        RightView
    },
    data() {
        return {
            leftHeight: 0,
            rightWidth: 0
        }
    },
    mounted() {
        this.leftHeight = heightGet()
    }
}
</script>
<style lang="scss" scoped>
.leftBox{
    width: auto;
    height: auto;
}
</style>