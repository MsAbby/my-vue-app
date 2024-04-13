

const system: any = {
  path: '/system',
  name: 'System',
  component: import('@/components/layout.vue'),
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: "系统设置",
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: "账户设置",
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/system/account/index.vue'),
    },
    {
      path: 'vxeTableAccount',
      name: 'VxeTableAccountManagement',
      meta: {
        title: "vxetable-账户设置",
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/system/vxe-account/index.vue'),
    },
    {
      path: 'account_detail',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: "vxetable-设置编辑",
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('@/views/system/account/detail.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: "角色设置",
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/system/role/index.vue'),
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: "菜单管理",
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/system/menu/index.vue'),
    },
  ],
};

export default system;
