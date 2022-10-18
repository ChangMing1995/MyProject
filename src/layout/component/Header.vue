<template>
  <div class="Header">
    <span>Have A Dream To Become A Great</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
.Header {
  span {
    font-size: 20px;
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    color: transparent;
    // 转变为行内块元素 文字渐变才会生效
    display: inline-block;
  }
}
</style>
