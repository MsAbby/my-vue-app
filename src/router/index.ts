
import { createRouter, createWebHashHistory } from 'vue-router'
// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModuleList: any = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [ ...routeModuleList];

// 根路由
export const RootRoute = [{
  path: '/',
  name: 'Root',
  redirect: '/home',
  meta: {
    title: 'Root',
  },
}];


// 实例化路由
const router = createRouter({
	history: createWebHashHistory("/"),
	routes: [ ...RootRoute, ...routeModuleList],
});
export default router;
