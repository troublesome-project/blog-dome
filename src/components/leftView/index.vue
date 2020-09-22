<template>
    <div>
       <!-- :style="'height:' + (Height/100 - 1.30) + 'rem'" -->
        <div class="left_box">
            <ul class="left_ul">
                <li v-for="item in tableList" :key="item.type" @click="change(item.type, item.path)" :class="[types === item.type ? 'left_li' : '']">{{item.title}}</li>
                <!-- <li v-for="(item, index) in tableList" :key="index" :class="[types === item.type ? 'left_li' : '']">
                  <router-link :to="{path: item.path}">{{item.title}}</router-link>
                </li> -->
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
    },
    tableList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      types: 0
    }
  },
  methods: {
    // 切换
    change (type, path) {
      if(type === this.types) {
        return false;
      }
      this.types = type
      // this.$emit('type', type)
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.left_box {
    width: 2rem;
    height: calc(100vh - 1.3rem);
    background-image: linear-gradient(45deg,#020031 0,rgba(16, 7, 53, 1) 100%);
    margin: 0;
    padding: 0;
    .left_ul {
        display: block;
        padding: 0 0.2rem;
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        font-size: 0.16rem;
        li {
            display: block;
            padding: 0.2rem;
            color: #E6E6E6;
            // a {
            //   display: block;
            //   padding: 0.2rem;
            //   width: 100%;
            //   height: 100%;
            //   color: #E6E6E6;
            //   text-decoration: none;
            // }
        }
        li:hover {
          color: #E6E6E6;
          cursor: pointer;
          background-color: rgba(40, 18, 61, 1);
        }
        // li:hover a {
        //   color: #E6E6E6;
        // }
        li+li {
            border-top: 0.01rem solid #333333;
        }
        .left_li {
            background-color: rgba(40, 18, 61, 1);
        }
    }
}
</style>
