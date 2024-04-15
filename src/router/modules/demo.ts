

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
      // component: () => import('@/views/system/menu/index.vue'),
      children: [
        {
          path: 'menu',
          name: 'menu',
          meta: {
            title: "菜单",
            ignoreKeepAlive: true,
          },
          component: () => import('@/views/system/menu/detail.vue'),
        },
        {
          path: 'menuDetail2',
          name: 'MenuDetail2',
          meta: {
            title: "菜单详情中的想起",
            ignoreKeepAlive: true,
            hideMenu: true,
          },
          component: () => import('@/views/system/menu/detail2.vue'),
        },
        {
          path: 'menuDetail',
          name: 'MenuDetail',
          meta: {
            title: "菜单详情",
            ignoreKeepAlive: true,
          },
          component: () => import('@/views/system/menu/detail.vue'),
        },
      ],
    },
  ],
};

export default system;
