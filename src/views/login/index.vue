<template>
  <div class="box">
    <div class="login">
      <img :src="imgUrl" class="login-img" alt />
      <div class="fix-con">
        <div class="con">
          <el-row class="con-title">账号登录</el-row>
          <el-row class="con-list">
            <span class="con-list_title">账号:</span>
            <el-input type="text" class="con-list_input" v-model="params.userName" />
            <span v-if="userRule" class="con-list_comfig">{{ userComfig }}</span>
          </el-row>
          <el-row class="con-list">
            <span class="con-list_title">密码:</span>
            <el-input type="password" class="con-list_input" v-model="params.password" />
            <span v-if="passwordRule" class="con-list_comfig">{{ passwordComfig }}</span>
          </el-row>
          <!-- <el-row class="con-comfig">*如有需要，请联系管理员</el-row> -->
          <div class="con-button" @click="signBtn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPath } from "@/uitls/domList";
export default {
  name: "Login",
  data() {
    return {
      imgUrl: require("@/assets/login.jpg"),
      params: {
        userName: "",
        password: "",
      },
      userComfig: "请输入用户名", // 用户名警告
      passwordComfig: "请输入密码", // 密码警告
      userRule: false,
      passwordRule: false,
      tableList: [
        {
          id: "1",
          userName: "chengkewei",
          password: "mengjie521",
          restrict: "1",
        },
        {
          id: "2",
          userName: "oumengjie",
          password: "mengjie521",
          restrict: "2",
        },
        {
          id: "3",
          userName: "wangshuai",
          password: "woaiqianhan1314",
          restrict: "3",
        },
        {
          id: "4",
          userName: "lijingli",
          password: "LIJINGLI1998",
          restrict: "3",
        },
        {
          id: "99",
          userName: "usernames",
          password: "hei123456",
          restrict: "5",
        },
      ],
    };
  },
  methods: {
    // 点击登录
    async signBtn() {
      if (!this.params.userName) return (this.userRule = true);
      if (!this.params.password)
        return (this.userRule = false), (this.passwordRule = true);
      // await this.getUserInfos();
      for (const i of this.tableList) {
        if (
          i.userName === this.params.userName &&
          i.password === this.params.password
        ) {
          sessionStorage.setItem("token", this.params.userName);
          return this.$router.push("/home");
        } else if (i.userName === this.params.userName) {
          this.userRule = false;
          this.passwordRule = true;
          this.passwordComfig = "密码不正确";
        } else {
          this.userRule = true;
          this.userComfig = "用户名不正确";
        }
      }
    },
    // 数据请求
    // async getUserInfos() {
    //   let urls = getPath();
    //   await this.$axios.get(urls + "/static/login.json").then((res) => {
    //     this.tableList = res.data.data;
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.fix-con {
  width: 2.6rem;
  padding: 0.2rem;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -1.7rem;
  margin-left: -1.5rem;
  z-index: 9;
  border-radius: 0.05rem;
  box-shadow: 0 0.05rem 0.2rem #333333;
}
.con {
  height: 3rem;
  font-size: 0.2rem;
  color: #333333;
  position: relative;
  &-title {
    display: flex;
    justify-content: center;
  }
  &-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
    position: relative;
    &_title {
      font-size: 0.16rem;
      padding-right: 0.05rem;
    }
    &_input {
      max-width: 2rem;
    }
    &_comfig {
      font-size: 0.14rem;
      position: absolute;
      bottom: -0.16rem;
      left: 0.55rem;
      color: red;
    }
  }
  &-button {
    position: absolute;
    width: 100%;
    bottom: 0.2rem;
    display: flex;
    padding: 0.1rem 0;
    justify-content: center;
    background-color: #578deb;
    color: #ffffff;
    border-radius: 0.08rem;
    cursor: pointer;
  }
}
</style>
