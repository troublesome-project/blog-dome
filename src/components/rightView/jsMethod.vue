<template>
    <div>
        <div class="method_box">
            <h3>js数组及字符串的基本操作方法</h3>
            <!-- <ul>
                <li>
                    <h3>一.数组的基本操作方法</h3>
                </li>
                <li>
                    <div><span>push()</span><span>向数组末尾添加一个或多个元素</span></div>
                    <div><span>pop()</span><span>删除数组最后一位元素</span></div>
                    <div><span>unshift()</span><span>向数组前添加一个或多个元素</span></div>
                    <div><span>shift()</span><span>删除数组第一位元素</span></div>
                    <div><span>concat()</span><span>连接两个数组</span></div>
                    <div><span>reverse()</span><span>反转数组</span></div>
                    <div><span>splice()</span><span>替换指定位置数组元素</span></div>
                    <div><span>toString()</span><span>数组转为字符串</span></div>
                </li>
            </ul> -->
            <table>
                <thead>
                    <tr>
                        <th v-for="item in tableHead" :key="item">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tableBody" :key="item.ids">
                        <td>{{item.name}}</td>
                        <td>{{item.types}}</td>
                        <td>{{item.text}}</td>
                        <td>{{item.isNot}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'JsMethod',
  data () {
    return {
      tableHead: ['方法名', '类型', '作用', '是否改变原字段'],
      tableBody: [
        {name: 'push()', types: '数组', text: '向数组末尾添加一个或多个元素', isNot: 'Y', ids: 1},
        {name: 'pop()', types: '数组', text: '删除数组最后一位元素', isNot: 'Y', ids: 2},
        {name: 'unshift()', types: '数组', text: '向数组前添加一个或多个元素', isNot: 'Y', ids: 3},
        {name: 'shift()', types: '数组', text: '删除数组第一位元素', isNot: 'Y', ids: 4},
        {name: 'concat()', types: '数组', text: '连接两个数组', isNot: 'N', ids: 5},
        {name: 'reverse()', types: '数组', text: '反转数组', isNot: 'Y', ids: 6},
        {name: 'splice()', types: '数组', text: '替换指定位置数组元素', isNot: 'Y', ids: 7},
        {name: 'toString()', types: '数组', text: '数组转为字符串', isNot: 'N', ids: 8},
        {name: 'sort()', types: '数组', text: '将数组进行排序', isNot: 'Y', ids: 9},
        {name: 'filter()', types: '数组', text: '将数组按条件过滤', isNot: 'N', ids: 10},
        {name: 'every()', types: '数组', text: '依据判断条件，数组的元素是否全满足', isNot: 'N', ids: 11}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.method_box {
    padding: 0 0.2rem 0.2rem 0.2rem;
    font-size: 0.16rem;
    table {
        display: block;
        background-color: #222222;
        color: #E6E6E6;
        font-size: 0.14rem;
        overflow-x: auto;
        thead, tbody{
            display: block;
            tr{
                display: flex;
                th,td {
                    // flex: 1;
                    text-align: center;
                    padding: 0.1rem 0;
                }
                th:nth-of-type(1) {
                    width: 1rem;
                }
                th:nth-of-type(2) {
                    width: 1rem;
                }
                th:nth-of-type(4) {
                    width: 2rem;
                }
                th:nth-of-type(3){
                    flex: auto;
                }
                td:nth-of-type(3){
                    flex: auto;
                }
                td:nth-of-type(1){
                    width: 1rem;
                }
                td:nth-of-type(2){
                    width: 1rem;
                }
                td:nth-of-type(4){
                    width: 2rem;
                }
                th+th, td+td{
                    border-left: 1px solid #999999;
                }
            }
            tr{
                border-top: 1px solid #999999;
            }
        }
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            div{
                padding: 0.1rem 0.2rem;
                border-radius: 0.04rem;
                background-color: #222222;
                color: #E6E6E6;
                span:nth-of-type(1){
                    display: inline-block;
                    width: 0.8rem;
                    height: auto;
                }
                span+span{
                    margin-left: 20px;
                }
            }
            div+div{
                margin-top: 10px;
            }
        }
    }
}
</style>
