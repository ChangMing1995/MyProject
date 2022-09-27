<template>
  <div class="Login">
    <div class="login-containor">
      <h2>Dreamworks</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
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
    border: solid 1px #83a5cd;
    border-radius: 10px;
    padding: 15px;
  }
}
</style>
