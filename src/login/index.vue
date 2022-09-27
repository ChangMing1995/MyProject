<template>
  <div class="Login">
    <div class="login-containor">
      <h1 class="iconfont icon-location systemTitle">
        Dreamworks
      </h1>
      <div class="loginWrap">
        <a-input v-model="user.name" allow-clear placeholder="账号">
          <a-icon slot="prefix" type="user" />
        </a-input>
        <a-input ref="userNameInput" v-model="user.password" allow-clear type="password" placeholder="密码">
          <a-icon slot="prefix" type="lock" />
        </a-input>
        <router-link to="/Layout">
          <a-button type="link" class="loginButton">
            登陆
          </a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.Login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/img/2.jpeg') no-repeat;
  background-size: 100% 100%;
  .login-containor {
    position: absolute;
    right: 5%;
    top: 15%;
    width: 400px;
    height: 500px;
    padding: 50px 56px 0;
    .systemTitle {
      color: #000;
      font-size: 32px;
      line-height: 32px;
      text-align: left;
      margin-bottom: 36px;
    }
    .loginWrap {
      width: 100%;
      .ant-input {
        height: 45px;
        line-height: 45px;
        background: transparent;
        outline: none;
        border: solid 1px transparent;
      }
      .ant-input-affix-wrapper:last-child {
        margin-top: 20px;
      }
      .loginButton {
        width: 100%;
        height: 45px;
        color: #fff;
        font-size: 15px;
        border: none;
        margin-top: 20px;
        &:hover {
          box-shadow: 0px 0px 0px 1px #18a0fb;
        }
      }
    }
  }
}
</style>
