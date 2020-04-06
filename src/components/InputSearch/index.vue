<template>
  <div class="searchBox">
    <div>
      <select v-model="searchList.selectVal">
        <option v-for="item in optionList" :key="item.id" :value="item.id">{{item.label}}</option>
      </select>
      <input type="text" placeholder="请输入作者名" v-model="searchList.nameInput" />
      <input type="text" placeholder="请输入关键字" v-model="searchList.textInput" />
      <input type="text" :placeholder="'请输入' + textName" v-model="searchList.titleInput" />
      <button @click="searchClick">搜素</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputSearch',
  props: {
    textName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchList: {
        nameInput: '',
        textInput: '',
        titleInput: '',
        selectVal: 0
      },
      optionList: [
        { label: '全部', id: 0 },
        { label: '唐', id: 1 },
        { label: '宋', id: 2 },
        { label: '元', id: 3 },
        { label: '明', id: 4 },
        { label: '清', id: 5 }
      ]
    }
  },
  methods: {
    // 点击搜索及传值给父组件
    searchClick () {
      console.log(this.searchList)
      this.$emit('searchList', this.searchList)
    }
  }
}
</script>
<style lang="scss" scoped>
.searchBox {
  margin: 0;
  padding: 0;
  font-size: 0.14rem;
  line-height: 0.4rem;
  background-color: rgba(249, 204, 157, 1);
  input {
    width: 1.0rem;
    height: 0.2rem;
    vertical-align: middle;
  }
  select {
    width: 0.6rem;
    height: 0.26rem;
    vertical-align: middle;
  }
  button {
    height: 0.26rem;
    vertical-align: middle;
  }
}
</style>
