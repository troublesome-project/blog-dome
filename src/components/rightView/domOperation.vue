<template>
  <div>
    <div class="dom_box">
      <ul>
        <li>
          <h3>一.创建节点</h3>
        </li>
        <li>
          <P>1.创建元素节点</P>
          <div>document.createElement('name')</div>
        </li>
        <li>
          <p>2.某个节点末尾添加新节点</p>
          <div>
            var box = document.getElementById('box')
            <br />var span = document.createElement('span')
            <br />box.appendChild(span)
          </div>
        </li>
        <li>
          <p>3.创建文本节点</p>
          <div>
            var p = document.getElementById('p')
            <br />var text = document.createTextNode('文本')
            <br />p.appendChild(text)
          </div>
        </li>
        <li>
          <p>4.某个节点前添加新节点</p>
          <div>
            var box = document.getElementById('box')
            <br />var span = document.createElement('span')
            <br />box.parentNode.insertBefore(span, box)
          </div>
        </li>
        <li>
          <h3>二.删除节点</h3>
        </li>
        <li>
          <p>1.删除指定节点</p>
          <div>
            var box = document.getElementById('box')
            <br />box.parentNode.removeChild(box)
          </div>
        </li>
        <li>
          <h3>三.替换节点</h3>
        </li>
        <li>
          <p>1.把节点替换成指定节点</p>
          <div>
            var box = document.getElementById('box')
            <br />box.parentNode.replaceChild(p, box)
          </div>
        </li>
        <li>
          <h3>四.查询节点</h3>
        </li>
        <li>
          <p>1.查找id节点</p>
          <div>document.getElementById('idName')</div>
        </li>
        <li>
          <p>2.查找class节点</p>
          <div>document.getElementByClassName('className')</div>
        </li>
        <li>
          <p>3.查找name节点</p>
          <div>document.getElementByTagName('name')</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DomOperation',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.dom_box {
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
