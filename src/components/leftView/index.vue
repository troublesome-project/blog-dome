<template>
    <div>
        <div class="left_box" :style="'height:' + (this.Height - 130) / 100 + 'rem'">
            <ul class="left_ul">
                <li v-for="item in tableList" :key="item.type">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LeftView',
    props: {
        Height: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            tableList: [
                { title: 'git篇', type: 0 },
                { title: 'DOM节点操作', type: 1 },
                { title: 'vue项目搭建', type: 2 },
                { title: 'js数组操作方法', type: 3 },
                { title: 'vue生命周期详解', type: 4 }
            ]
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" scoped>
.left_box {
    width: 2rem;
    background-image: linear-gradient(45deg,#020031 0,rgba(16, 7, 53, 1) 100%);
    margin: 0;
    padding: 0;
    .left_ul {
        display: block;
        padding: 0 20px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        color: #E6E6E6;
        font-size: 0.16rem;
        li {
            padding: 0.2rem;
            display: block;
        }
        li:hover {
            cursor: pointer;
            background-color: #6d3353;
        }
        li+li {
            border-top: 0.01rem solid #333333;
        }
    }
}
</style>
