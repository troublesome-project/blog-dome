<template>
  <div class="ancient_box" :style="'height:' + (heights/100 - 1.30) + 'rem;'">
    <div class="left_box">
      <div>
        <h3>
          <span>《{{dataList.title}}》</span>
          <span class="title_box">{{dataList.dynasty}}</span>
          <span class="title_box">·{{dataList.name}}</span>
        </h3>
        <div>
          <textarea :style="'height:' + (heights/100 - 2.10) + 'rem;'" readonly name="" id="" v-model="dataList.text" />
        </div>
      </div>
    </div>
    <div class="right_box">
      <div>
        <h3>译文</h3>
        <div>
          <textarea :style="'height:' + (heights/100 - 2.10) + 'rem;'" readonly name="" id="" v-model="dataList.interpret" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { heightGet, widthGet } from '@/uitls/domList'
export default {
  name: 'AncientArticlesDetails',
  data () {
    return {
      heights: 0,
      widths: 0,
      dataList: []
    }
  },
  mounted () {
    this.heights = heightGet()
    this.widths = widthGet()
    this.getDatas(this.$route.query.id, this.$route.query.index)
  },
  methods: {
    //  获取数据
    getDatas (id, index) {
      let urls = window.location.origin
      this.$axios.get(urls + '/static/ancientArticles.json').then(res => {
        for (let i of res.data.data[index].list) {
          if (i.id === id) {
            this.dataList = i
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.textarea {
  width: 100%;
  margin: 0;
  padding: 0;
  text-indent: 0.28rem;
  resize: none;
  line-height: 2;
}
.ancient_box {
  background-color: rgba(249, 204, 157, 1);
  overflow-y: auto;
  display: flex;
  font-size: 0.16rem;
  .left_box {
    flex: 1;
    padding: 0.2rem;
    div {
      h3 {
        text-align: center;
        margin: 0;
        .title_box {
          color: #666666;
          font-size: 0.12rem;
          font-weight: 400;
        }
      }
      div {
          text-align: center;
          margin: 0.1rem 0;
          textarea {
            @extend .textarea
          }
      }
    }
  }
  .right_box {
    flex: 1;
    padding: 0.2rem;
    div {
      h3 {
        margin: 0;
        text-align: center;
      }
      textarea {
        @extend .textarea
      }
      div {
        margin: 0.1rem 0;
      }
    }
  }
}
</style>
