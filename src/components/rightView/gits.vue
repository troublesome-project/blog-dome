<template>
    <div>
        <div class="right_box" :style="'width:' + (this.Width - 200) / 100 + 'rem;' + 'height:' + (this.Height - 130) / 100 + 'rem'">

        </div>
    </div>
</template>
<script>
import { heightGet } from '@/uitls/domList'
export default {
    name: 'Gits',
    props: {
        Height: {
            type: Number,
            default: 0
        },
        Width: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.right_box{
    background-color: #f60;
}
</style>