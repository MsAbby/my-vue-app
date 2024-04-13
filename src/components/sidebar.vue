<template>
	<div style="width: 100%">
        <!-- 写法一： 这种写法默认会selectkey选中，改变selected值也不会高亮选中的值 -->
		<!-- <a-menu
			v-model:openKeys="state.openKeys"
			v-model:selectedKeys="state.selectedKeys"
			mode="inline"
			theme="dark"
            @open-change="handleOpenChange"
            @click="handleMenuClick"
            :subMenuOpenDelay="0.2"
			:items="items"
		></a-menu> -->
        <!-- 写法二 ： 去掉v-model，改变selected值会高亮选中的值-->
        <a-menu
			:openKeys="state.openKeys"
			:selectedKeys="state.selectedKeys"
			mode="inline"
			theme="dark"
            @open-change="handleOpenChange"
            @click="handleMenuClick"
            :subMenuOpenDelay="0.2"
			:items="items"
		></a-menu>
        <!-- <Menu
            :selectedKeys="state.selectedKeys"
            :defaultSelectedKeys="state.defaultSelectedKeys"
            mode="inline"
            :openKeys="state.openKeys"
            theme="dark"
            @open-change="handleOpenChange"
            @click="handleMenuClick"
            :subMenuOpenDelay="0.2"
            :items="items"
        > -->
    <!-- <template v-for="item in items" :key="item.path">
      <BasicSubMenuItem :item="item" :theme="theme" :isHorizontal="isHorizontal" />
    </template> -->
  <!-- </Menu> -->
	</div>
</template>
<script lang="ts" setup>
import { reactive, watch, h, onBeforeMount } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { Menu, MenuProps } from 'ant-design-vue';
import {
	PieChartOutlined,
	MailOutlined,
	DesktopOutlined,
	InboxOutlined,
	AppstoreOutlined,
} from "@ant-design/icons-vue";

// 路由跳转携带参数
const router = useRouter();
const route = useRoute();

function handleOpenChange(openKeys: Key[]) {
    // if (unref(mode) === MenuModeEnum.HORIZONTAL || !unref(accordion) || unref(getIsMixSidebar)) {
    //   menuState.openKeys = openKeys;
    // } else {
    //   const rootSubMenuKeys: Key[] = [];
    //   for (const { children, path } of unref(menus)) {
    //     if (children && children.length > 0) {
    //       rootSubMenuKeys.push(path);
    //     }
    //   }
    //   if (!unref(getCollapsed)) {
    //     const latestOpenKey = openKeys.find((key) => menuState.openKeys.indexOf(key) === -1);
    //     if (rootSubMenuKeys.indexOf(latestOpenKey as string) === -1) {
    //       menuState.openKeys = openKeys;
    //     } else {
    //       menuState.openKeys = latestOpenKey ? [latestOpenKey] : [];
    //     }
    //   } else {
    //     menuState.collapsedOpenKeys = openKeys;
    //   }
    // }
  }

  const handleMenuClick = async ({ key }) => {
    // go(key)
    state.selectedKeys = [key];
    console.log("1111", state.selectedKeys)
  };

  const go = (opt) => {
    router.push(opt)
  }


const state = reactive({
    defaultSelectedKeys: [],
	collapsed: false,
	selectedKeys: ["1"],
	openKeys: ["sub1"],
	preOpenKeys: ["sub1"],
});
const items = reactive([
	{
		key: "1",
		icon: () => h(PieChartOutlined),
		label: "Option 1",
		title: "Option 1",
	},
	{
		key: "2",
		icon: () => h(DesktopOutlined),
		label: "Option 2",
		title: "Option 2",
	},
	{
		key: "3",
		icon: () => h(InboxOutlined),
		label: "Option 3",
		title: "Option 3",
	},
	{
		key: "sub1",
		icon: () => h(MailOutlined),
		label: "Navigation One",
		title: "Navigation One",
		children: [
			{
				key: "5",
				label: "Option 5",
				title: "Option 5",
			},
			{
				key: "6",
				label: "Option 6",
				title: "Option 6",
			},
			{
				key: "7",
				label: "Option 7",
				title: "Option 7",
			},
			{
				key: "8",
				label: "Option 8",
				title: "Option 8",
			},
		],
	},
	{
		key: "sub2",
		icon: () => h(AppstoreOutlined),
		label: "Navigation Two",
		title: "Navigation Two",
		children: [
			{
				key: "9",
				label: "Option 9",
				title: "Option 9",
			},
			{
				key: "10",
				label: "Option 10",
				title: "Option 10",
			},
			{
				key: "sub3",
				label: "Submenu",
				title: "Submenu",
				children: [
					{
						key: "11",
						label: "Option 11",
						title: "Option 11",
					},
					{
						key: "12",
						label: "Option 12",
						title: "Option 12",
					},
				],
			},
		],
	},
]);
// const setMenuKey = () => {
// 	if (route.meta.hidden) {
// 		state.selectedKeys = [route.meta.activeMenu as string]
// 	} else {
// 		state.selectedKeys = [route.key]
// 	}
// 	console.log(selectedKeys.value)
// }

// onBeforeMount(setMenuKey)
// watch(route, setMenuKey)
</script>
