<template>
  <div>
    <div class="git_box">
      <ul>
        <li>
          <h3>一.git基本指令介绍</h3>
        </li>
        <li>
          <p>1.初始化仓库</p>
          <div>git init</div>
        </li>
        <li>
          <p>2.克隆远程代码</p>
          <div>git clone 'url'</div>
        </li>
        <li>
          <p>3.连接远程仓库</p>
          <div>git remote add origin 'url'</div>
        </li>
        <li>
          <p>4.将暂存区里的改动给提交到本地的版本库</p>
          <div>git commit -m '注解'</div>
        </li>
        <li>
          <p>5.查看状态和是否存在.git文件</p>
          <div>git status</div>
        </li>
        <li>
          <p>6.将修改添加到暂存区</p>
          <div>git add .</div>
        </li>
        <li>
          <p>7.第一次提交到远程分支</p>
          <div>git push -u origin master</div>
        </li>
        <li>
          <p>8.提交修改到远程分支</p>
          <div>git push</div>
        </li>
        <li>
          <p>9.更新分支代码</p>
          <div>git pull</div>
        </li>
        <li>
          <h3>二.分支的操作指令</h3>
        </li>
        <li>
          <p>1.查看所有分支</p>
          <div>git branch -a</div>
        </li>
        <li>
          <p>2.查看当前分支</p>
          <div>git branch</div>
        </li>
        <li>
          <p>3.创建分支</p>
          <div>git branch '分支名'</div>
        </li>
        <li>
          <p>4.切换分支</p>
          <div>git checkout '分支名'</div>
        </li>
        <li>
          <p>5.合并分支命令</p>
          <div>git merge</div>
        </li>
        <li>
          <h3>三.远程仓库的操作指令</h3>
        </li>
        <li>
          <p>1.查看远程仓库地址</p>
          <div>git remote -v</div>
        </li>
        <li>
          <p>2.删除连接仓库</p>
          <div>git remote -rm</div>
        </li>
        <li>
          <p>3.连接远程仓库</p>
          <div>git remote add origin 'url'</div>
        </li>
        <li>
          <h3>四.版本回退操作指令</h3>
        </li>
        <li>
          <p>1.回退所有内容到上一版本</p>
          <div>git reset HEAD^</div>
        </li>
        <li>
          <p>2.回退指定文件到上一版本</p>
          <div>git reset HEAD^ 文件名</div>
        </li>
        <li>
          <p>3.向前回退N个版本</p>
          <div>git reset -soft HEAD~N</div>
        </li>
        <li>
          <p>4.回退到与远程相同</p>
          <div>git reset -hard origin/master</div>
        </li>
        <li>
          <p>5.回退到上一次提交的状态</p>
          <div>git revert HEAD</div>
        </li>
        <li>
          <h3>五.查看提交历史操作指令</h3>
        </li>
        <li>
          <p>1.查看历史提交记录</p>
          <div>git log</div>
        </li>
        <li>
          <p>2.查看历史提交记录简洁版</p>
          <div>git log --oneline</div>
        </li>
        <li>
          <p>3.查看历史提交的分支、合并记录</p>
          <div>git log --graph</div>
        </li>
        <li>
          <p>4.逆向查看历史提交记录</p>
          <div>git log --reverse --oneline</div>
        </li>
        <li>
          <p>5.查看指定用户的提交日志</p>
          <div>git log --author=用户名</div>
        </li>
        <li>
          <p>6.查看指定日期的提交记录</p>
          <div>git log --before={3 weeks.ago} --after={xxxx-xx-xx} --no-merges</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { heightGet } from "@/uitls/domList"
export default {
  name: "Gits"
}
</script>
<style lang="scss" scoped>
.git_box {
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
