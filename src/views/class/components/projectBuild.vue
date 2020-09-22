<template>
  <div>
    <div class="project_box">
      <ul>
        <li>
          <h3>一.项目搭建</h3>
        </li>
        <li>
            <p>1.检查node/npm版本</p>
            <div>node/npm -v</div>
        </li>
        <li>
            <p>2.全局安装vue-cli</p>
            <div>npm install/i vue-cli -g</div>
        </li>
        <li>
            <p>3.初始化并创建自己的项目</p>
            <div>vue init webpack my-project</div>
        </li>
        <li>
            <p>4.进入项目, 安装依赖包</p>
            <div>
              cd my-project<br/>
              npm install/i
            </div>
        </li>
        <li>
          <p>5.处理eslint格式</p>
          <div>
            npm run lint
          </div>
        </li>
        <li>
            <p>5.运行项目</p>
            <div>npm run dev</div>
        </li>
        <li>
            <h3>二.安装插件</h3>
        </li>
        <li>
            <p>1.安装淘宝镜像</p>
            <div>npm install -g cnpm –registry=https://registry.npm.taobao.org</div>
        </li>
        <li>
            <p>2.安装element-ui组件, main.js引入</p>
            <div>
                npm install element-ui -S<br/>
                import ElementUI from 'element-ui'<br/>
                Vue.use(ElementUI)
            </div>
        </li>
        <li>
            <p>3.安装axios请求</p>
            <div>
                npm install axios -S
            </div>
        </li>
        <li>
            <p>4.安装scss依赖</p>
            <div>
                npm install --save-dev sass-loader<br/>
                npm install --save-dev node-sass
            </div>
        </li>
        <li>
            <p>5.安装vuex状态管理模块</p>
            <div>npm install vuex -S</div>
        </li>
        <li>
            <p>6.安装vue-router路由模块</p>
            <div>npm install vue-router</div>
        </li>
        <li>
            <p>7.安装swiper插件</p>
            <div>npm install vue-awesome-swiper --save</div>
        </li>
        <li>
            <p>8.安装base64加密</p>
            <div>
              npm install js-base64 --save<br/>
              npm install babel-preset-env --save
            </div>
        </li>
        <li>
            <h3>三.卸载插件</h3>
        </li>
        <li>
            <p>1.卸载某一插件</p>
            <div>npm uninstall 'name'</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectBuild',
  data () {
    return {
      dataList: [
        {title: '', text: '', ids: ''}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.project_box {
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
