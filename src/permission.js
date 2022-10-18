import router from '@/router';

// 跳转前判断 单点登录截取code备用;
router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
