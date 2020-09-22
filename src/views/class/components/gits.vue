<template>
  <div>
    <div class="git_box">
      <ul v-for="item in dataList" :key="item.indexs">
        <li>
          <h3>{{item.headText}}</h3>
        </li>
        <li v-for="items in item.list" :key="items.id">
          <p>{{items.id}}.{{items.title}}</p>
          <div>{{items.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gits',
  data () {
    return {
      dataList: [
        {
          headText: '一.git基本指令介绍',
          list: [
            { title: '初始化仓库', text: 'git init', id: 1 },
            { title: '克隆远程代码', text: 'git clone `url`', id: 2 },
            { title: '连接远程仓库', text: 'git remote add origin `url`', id: 3 },
            { title: '将暂存区里的改动给提交到本地的版本库', text: 'git commit -m `注解`', id: 4 },
            { title: '查看状态和是否存在.git文件', text: 'git status', id: 5 },
            { title: '将修改添加到暂存区', text: 'git add .', id: 6 },
            { title: '第一次提交到远程分支', text: 'git push -u origin master', id: 7 },
            { title: '提交修改到远程分支', text: 'git push', id: 8 },
            { title: '更新分支代码', text: 'git pull', id: 9 },
            { title: '关联用户名/邮箱', text: 'git config --global user.name/email "name/email"', id: 10 },
            { title: '查看变更内容', text: 'git diff', id: 11 }
          ],
          indexs: 1
        },
        {
          headText: '二.分支的操作指令',
          list: [
            { title: '查看所有分支', text: 'git branch -a', id: 1 },
            { title: '查看当前分支', text: 'git branch', id: 2 },
            { title: '创建分支', text: 'git branch `分支名`', id: 3 },
            { title: '切换分支', text: 'git checkout `分支名`', id: 4 },
            { title: '合并分支命令', text: 'git merge', id: 5 },
            { title: '拉取远程分支', text: 'git fetch', id: 6 },
            { title: '列出所有本地标签', text: 'git tag', id: 7},
            { title: '删除标签', text: 'git tag -d <tabname>', id: 8},
            { title: '基于最新提交创建标签', text: 'git tag <tabname>', id: 9},
            { title: '删除远程分支', text: 'git push origin --delete <branchname>', id: 10 },
            { title: '删除本地已合并的分支', text: 'git branch -d <branchname>', id: 11 },
            { title: '清楚本地无效分支(远程已删除本地没删除的分支)', text: 'git fetch -p', id: 12 },
            { title: '清楚本地无效分支(远程已删除本地没删除的分支)', text: 'git remote prune origin', id: 13 },
            { title: '查看remote地址，远程分支，还有本地分支与之相对应关系等信息', text: 'git remote show origin', id: 14 }
          ],
          indexs: 2
        },
        {
          headText: '三.远程仓库的操作指令',
          list: [
            { title: '查看远程仓库地址', text: 'git remote -v', id: 1 },
            { title: '删除连接仓库', text: 'git remote -rm', id: 2 },
            { title: '连接远程仓库', text: 'git remote add origin `url`', id: 3 }
          ],
          indexs: 3
        },
        {
          headText: '四.版本回退操作指令',
          list: [
            { title: '回退所有内容到上一版本', text: 'git reset HEAD^', id: 1 },
            { title: '回退指定文件到上一版本', text: 'git reset HEAD^ 文件名', id: 2 },
            { title: '向前回退N个版本', text: 'git reset -soft HEAD~N', id: 3 },
            { title: '回退到与远程相同', text: 'git reset -hard origin/master', id: 4 },
            { title: '回退到上一次提交的状态', text: 'git revert HEAD', id: 5 }
          ],
          indexs: 4
        },
        {
          headText: '五.查看提交历史操作指令',
          list: [
            { title: '查看历史提交记录', text: 'git log', id: 1 },
            { title: '查看历史提交记录简洁版', text: 'git log --oneline', id: 2 },
            { title: '查看历史提交的分支、合并记录', text: 'git log --graph', id: 3 },
            { title: '逆向查看历史提交记录', text: 'git log --reverse --oneline', id: 4 },
            { title: '查看指定用户的提交日志', text: 'git log --author=用户名', id: 5 },
            { title: '查看指定日期的提交记录', text: 'git log --before={3 weeks.ago} --after={xxxx-xx-xx} --no-merges', id: 6 }
          ],
          indexs: 5
        },
        {
          headText: '六.密码账号连接',
          list: [
            { title: '重置git认证设置', text: 'git config --system --unset credential.helper', id: 1 },
            { title: 'git认证本地储存', text: 'git config --global credential.helper store', id: 2 }
          ],
          indexs: 6
        }
      ]
    }
  }
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
