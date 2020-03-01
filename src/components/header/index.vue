<template>
    <div>
        <div class="header_box">
            <el-row>
                <el-col :span="12"><div class="titles">CKW、的收藏卡</div></el-col>
                <el-col :span="12">
                    <div class="logos">
                        <img src="../../assets/logo_one.jpg" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss" scoped>
.header_box{
    width: 90%;
    padding: 0 5%;
    height: 1.3rem;
    background-image: linear-gradient(45deg,#020031 0,#6d3353 100%);
    font-size: 0.35rem;
    color: #fff;
    font-weight: 600;
    line-height: 1.3rem;
    .logos{
        text-align: right;
        img{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
}
</style>
