<template>
    <div>
        <Header/>
        <div class="bodyBox">
            <div class="leftBox">
                <LeftView :Height="leftHeight" :types="types" @type="getTypes" />
            </div>
            <div class="rightBox">
                <RightView :types="types" ref="change" />
            </div>
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
            rightWidth: 0,
            types: 0
        }
    },
    methods: {
        // 切换模块
        getTypes(row) {
            this.types == row
            this.$refs.change.changeTypes(row)
        }
    },
    mounted() {
        this.leftHeight = heightGet()
    }
}
</script>
<style lang="scss" scoped>
.bodyBox{
    display: flex;
    .leftBox{
        flex: auto;
    }
    .rightBox{
        flex: auto;
    }
}
</style>