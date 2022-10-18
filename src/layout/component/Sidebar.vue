<template>
  <div class="name">
    <a-menu mode="inline" :selected-keys="[routerPath]" style="width: 100%">
      <a-menu-item v-for="item in routes" :key="item.path">
        <router-link :to="{ path: '/' + item.name }">
          {{ item.name }}
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import router from '@/router';
export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {
      routerPath: '/Demo1',
    };
  },
  computed: {
    routes() {
      return router.options?.routes[1].children;
    },
  },
  watch: {
    $route: {
      handler(value) {
        this.routerPath = value.fullPath;
      },
      deep: true,
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
