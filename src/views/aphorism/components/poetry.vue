<template>
  <div class="box">
    <div class="poetry_box" :style="'height:' + (height - 160) + 'px'">
      <div class="search_box">
        <InputSearch :textName="textName" @searchList='getSearchList' />
      </div>
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <span>{{item.title}}</span>
          <span class="span_title" @click="detailsChange(item.id)">《{{item.tname}}》</span>
          <span>—{{item.times}}.{{item.names}}</span>
          </li>
      </ul>
      <!-- <Pagers ref="change" /> -->
    </div>
  </div>
</template>
<script>
import InputSearch from '../../../components/InputSearch/index'
import { heightGet } from '@/uitls/domList'
export default {
  name: 'Poetry',
  components: {
    InputSearch
  },
  data () {
    return {
      textName: '诗/词名',
      height: 0,
      dataList: [],
      searchData: {
        nameInput: '',
        textInput: '',
        titleInput: '',
        selectVal: 0,
        pages: 1
      }
    }
  },
  mounted () {
    this.height = heightGet()
    this.getData()
  },
  methods: {
    // 数据查询筛选-需要封装
    fileData (data, searchData) {
      let dataName = []
      if (searchData.nameInput) {
        for (let names of data) {
          if (names.names.match(searchData.nameInput)) {
            dataName.push(names)
          }
        }
      } else {
        dataName = data
      }
      let dataTitle = []
      if (searchData.titleInput) {
        for (let titles of dataName) {
          if (titles.tname.match(searchData.titleInput)) {
            dataTitle.push(titles)
          }
        }
      } else {
        dataTitle = dataName
      }
      let dataText = []
      if (searchData.textInput) {
        for (let texts of dataTitle) {
          if (texts.title.match(searchData.textInput)) {
            dataText.push(texts)
          }
        }
      } else {
        dataText = dataTitle
      }
      let dataVal = []
      let vals = ''
      if (searchData.selectVal === 1) {
        vals = '唐'
      } else if (searchData.selectVal === 2) {
        vals = '宋'
      } else if (searchData.selectVal === 3) {
        vals = '元'
      } else if (searchData.selectVal === 4) {
        vals = '明'
      } else if (searchData.selectVal === 5) {
        vals = '清'
      }
      if (searchData.selectVal === 0) {
        dataVal = dataText
      } else {
        for (let val of dataText) {
          if (vals === val.times) {
            dataVal.push(val)
          }
        }
      }
      // this.$refs.change.getPageLength(dataVal.length)
      // let dataPage = []
      // if (dataVal.length > 15) {
      //   dataPage = dataVal.slice((searchData.pages - 1) * 15, 15)
      // } else {
      //   dataPage = dataVal
      // }
      this.dataList = dataVal
    },
    // 获取数据
    getData () {
      let urls = window.location.origin
      this.$axios.get(urls + '/static/poetry.json').then(res => {
        // if (type) {
        //   console.log(type)
        //   this.searchData.pages = type === 0 ? this.searchData.pages - 1 : this.searchData.pages + 1
        // }
        // console.log(this.searchData.pages)
        this.dataList = res.data.dataList
        this.fileData(this.dataList, this.searchData)
      })
    },
    // 获取子组件传值
    getSearchList (data) {
      this.searchData = data
      this.getData()
    },
    // 点击进入详情
    detailsChange (id) {
      this.$router.push({
        path: './poetryDetails',
        query: {
          id
        }
      })
    }
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
.poetry_box {
  padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  background-color: rgba(249, 204, 157, 1);
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 0.3rem;
    li {
      padding: 0.1rem 0;
      font-size: 0.14rem;
      .span_title {
        cursor: pointer;
      }
      .span_title:hover {
        color: red;
        text-decoration: underline;
      }
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
