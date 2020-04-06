<template>
  <div>
    <div class="life_box">
      <ul>
        <li>
          <h3>一.vue生命周期</h3>
        </li>
        <li v-for="item in vueDataList" :key="item.id">
          <p>{{item.id}}.{{item.title}}</p>
          <div>{{item.text}}</div>
        </li>
      </ul>
      <ul>
        <li>
          <h3>二.小程序生命周期</h3>
        </li>
        <li v-for="item in wxDataList" :key="item.id">
          <p>{{item.id}}.{{item.title}}</p>
          <div>{{item.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LifeCycle',
  data () {
    return {
      vueDataList: [
        { title: 'beforeCreate', text: '实例刚在内存中被创建出来，此时，还没有初始化好data和methods属性。', id: 1 },
        { title: 'created', text: '实例已经在内存中创建OK，此时data和methods已经创建OK，此时还没有开始 编译模板。', id: 2 },
        { title: 'beforeMount', text: '此时已经完成了模板的编译，但是还没有挂载到页面中。', id: 3 },
        { title: 'mounted', text: '此时，已经将编译好的模板，挂载到了页面指定的容器中显示。', id: 4 },
        { title: 'beforeUpdate', text: '状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上显示的数据还是旧的，因为此时还没有开始重新渲染DOM节点。', id: 5 },
        { title: 'updated', text: '实例更新完毕之后调用此函数，此时data中的状态值和界面上显示的数据，都已经完成了更新，界面已经重新渲染完成。', id: 6 },
        { title: 'beforeDestroy', text: '实例销毁之前调用。在这一步，实例仍然完全可用。', id: 7 },
        { title: 'destroyed', text: '实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。', id: 8 }
      ],
      wxDataList: [
        { title: 'onLoad', text: '页面创建时执行', id: 1 },
        { title: 'onShow', text: '页面出现在前台时执行', id: 2 },
        { title: 'onReady', text: '页面首次渲染完毕时执行', id: 3 },
        { title: 'onHide', text: '页面从前台变为后台时执行', id: 4 },
        { title: 'onUnload', text: '页面销毁时执行', id: 5 },
        { title: 'onPullDownRefresh', text: '触发下拉刷新时执行', id: 6 },
        { title: 'onReachBottom', text: '页面触底时执行', id: 7 },
        { title: 'onShareAppMessage', text: '页面被用户分享时执行', id: 8 },
        { title: 'onPageScroll', text: '页面滚动时执行', id: 9 },
        { title: 'onResize', text: '页面尺寸变化时执行', id: 10 },
        { title: 'onTabItemTap', text: 'tab 点击时执行', id: 11 }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.life_box {
  padding: 0 0.2rem 0.2rem 0.2rem;
  font-size: 0.16rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      p {
        padding: 0.05rem 0.1rem;
        border-radius: 0.02rem;
      }
      div {
        padding: 0.1rem 0.2rem;
        border-radius: 0.04rem;
        background-color: #222222;
        color: #e6e6e6;
      }
    }
  }
}
</style>
