<template>
  <div class="Home">
    <a-layout id="components-layout-demo-top-side-2">
      <!-- 头部 -->
      <a-layout-header class="header">
        <Header />
      </a-layout-header>
      <a-layout>
        <!-- 菜单 -->
        <a-layout-sider width="230" style="background: #fff">
          <Sidebar />
        </a-layout-sider>
        <!-- 面包屑 -->
        <a-layout style="padding: 24px">
          <a-layout-content>
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from './component/Header.vue';
import Sidebar from './component/Sidebar.vue';
export default {
  name: 'Layout',
  components: { Header, Sidebar },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.header {
  color: #fff;
}
</style>
