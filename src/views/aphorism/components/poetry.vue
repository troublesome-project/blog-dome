<template>
  <div class="box">
     <!-- :style="'height:' + (height/100 - 1.60) + 'rem'" -->
    <div class="poetry_box">
      <!-- <div class="search_box">
        <InputSearch :textName="textName" @searchList='getSearchList' />
      </div> -->
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <div>{{item.title}}</div>
          <div>
            <span class="span_title" @click="detailsChange(item.id)">《{{item.tname}}》</span>
            <span>—{{item.times}}.{{item.names}}</span>
          </div>
          </li>
      </ul>
      <!-- <Pagers ref="change" /> -->
    </div>
  </div>
</template>
<script>
import InputSearch from '../../../components/InputSearch/index'
import { heightGet, getPath } from '@/uitls/domList'
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
      let urls = getPath()
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
        path: '/aphorism/poetryDetails',
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
  padding: 0.2rem 0 0.2rem 0;
  background-color: rgba(249, 204, 157, 1);
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 0.3rem;
    li {
      padding: 0.15rem 0.2rem;
      font-size: 0.24rem;
      div:nth-of-type(2) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        span{
          font-size: 0.2rem;
        }
        span:nth-of-type(2) {
          color: #666666;
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
