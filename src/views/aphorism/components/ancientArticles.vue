<template>
  <div class="box">
    <div class="ancient_box" :style="'height:' + (height - 160) + 'px'">
      <div class="search_box">
        <InputSearch :textName="textName" @searchList='getSearchList' />
      </div>
      <ul v-for="(item,index) in dataList" :key="index">
        <li v-for="items in item.list" :key="items.id">
          <div><h3 @click="change(items.id, index)">{{items.title}}</h3><span>{{items.dynasty}}</span><span>·{{items.name}}</span></div>
          <div>{{items.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import InputSearch from '../../../components/InputSearch/index'
import { heightGet } from '@/uitls/domList'
export default {
  name: 'AncientArticles',
  components: {
    InputSearch
  },
  data () {
    return {
      height: 0,
      textName: '诗文名',
      dataList: [],
      searchList: {
        nameInput: '',
        textInput: '',
        titleInput: '',
        selectVal: 0
      }
    }
  },
  mounted () {
    this.height = heightGet()
    this.getDatas()
  },
  methods: {
    // 获取数据
    getDatas () {
      let urls = window.location.origin
      this.$axios.get(urls + '/static/ancientArticles.json').then(res => {
        this.dataList = res.data.data
        // console.log(res.data.data)
        // for (let key in res.data.data) {
        //   this.dataList.push({
        //     list: [...this.fileData(res.data.data[key].list, this.searchList)]
        //   })
        // }
        // console.log(this.dataList)
      })
    },
    // 获取子组件传值
    getSearchList (data) {
      this.searchList = data
      this.getDatas()
    },
    // 进入详情
    change (id, index) {
      this.$router.push({
        path: './ancientArticlesDetails',
        query: {
          id,
          index
        }
      })
    }
    // 筛选数据-需要封装
    // fileData (data, searchData) {
    //   let dataName = []
    //   if (searchData.nameInput) {
    //     for (let names of data) {
    //       if (names.name.match(searchData.nameInput)) {
    //         dataName.push(names)
    //       }
    //     }
    //   } else {
    //     dataName = data
    //   }
    //   let dataTitle = []
    //   if (searchData.titleInput) {
    //     for (let titles of dataName) {
    //       if (titles.title.match(searchData.titleInput)) {
    //         dataTitle.push(titles)
    //       }
    //     }
    //   } else {
    //     dataTitle = dataName
    //   }
    //   let dataText = []
    //   if (searchData.textInput) {
    //     for (let texts of dataTitle) {
    //       if (texts.text.match(searchData.textInput)) {
    //         dataText.push(texts)
    //       }
    //     }
    //   } else {
    //     dataText = dataTitle
    //   }
    //   let dataVal = []
    //   let vals = ''
    //   if (searchData.selectVal === 1) {
    //     vals = '唐'
    //   } else if (searchData.selectVal === 2) {
    //     vals = '宋'
    //   } else if (searchData.selectVal === 3) {
    //     vals = '元'
    //   } else if (searchData.selectVal === 4) {
    //     vals = '明'
    //   } else if (searchData.selectVal === 5) {
    //     vals = '清'
    //   }
    //   if (searchData.selectVal === 0) {
    //     dataVal = dataText
    //   } else {
    //     for (let val of dataText) {
    //       if (val.times.match(vals)) {
    //         dataVal.push(val)
    //       }
    //     }
    //   }
    //   return dataVal
    // }
  }
}
</script>
<style lang="scss" scoped>
.box {
  background-color: rgba(249, 204, 157, 1);
  overflow-y: auto;
}
::-webkit-scrollbar {
  display: none;
}
.ancient_box {
  padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  background-color: rgba(249, 204, 157, 1);
  ul:nth-of-type(1) {
    margin-top: 0.3rem;
  }
  ul+ul {
    border-top: 0.01rem solid #666666;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 0.1rem;
      font-size: 0.14rem;
      .span_title {
        cursor: pointer;
      }
      .span_title:hover {
        color: red;
        text-decoration: underline;
      }
      div {
        padding: 0.05rem 0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        h3 {
          display: inline;
          cursor: pointer;
        }
        h3:hover {
          color: red;
          text-decoration:underline
        }
        span {
          color: #666666;
        }
        span:nth-of-type(1) {
          margin-left: 0.1rem;
        }
      }
    }
    li+li {
      border-top: 0.01rem solid #666666;
    }
  }
  .search_box {
    width: 100%;
    position: fixed;
    top: 1.3rem;
    height: 0.4rem;
  }
}
</style>
