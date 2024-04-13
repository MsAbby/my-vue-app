<template>
	<Menu.Item
		v-if="!menuHasChildren(item) && getShowMenu"
		:key="item.path"
		v-bind="$props"
	>
    <!-- 标题 -->
		<span>
			{{ item.meta.title || item.name }}
		</span>
	</Menu.Item>


	<Menu.SubMenu
		v-if="menuHasChildren(item) && getShowMenu"
		:class="[theme]"
		:key="`submenu-${item.path}`"
		popupClassName="app-top-menu-popup"
	>
    <!-- 标题 -->
		<template #title>
			<span>
				{{ item.meta.title || item.name }}
			</span>
		</template>

		<template
			v-for="childrenItem in item.children || []"
			:key="childrenItem.path"
		>
			<SubItem v-bind="$props" :item="childrenItem" />
		</template>
	</Menu.SubMenu>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { Menu } from "ant-design-vue";
import SubItem from "./subItem.vue";

defineOptions({ name: "BasicSubMenuItem", isSubMenu: true });

const props: any = defineProps({
  item: {
		type: Object,
		default: () => {
			return {};
		},
	},
});

onMounted(() => {
  console.log("111111", props.item)
})

const getShowMenu = computed(() => !props.item.meta?.hideMenu);

// 是否有子节点
function menuHasChildren(menuTreeItem): boolean {
  console.log("____", menuTreeItem)
	return (
		!menuTreeItem.meta?.hideChildrenInMenu &&
		Reflect.has(menuTreeItem, "children") &&
		!!menuTreeItem.children &&
		menuTreeItem.children.length > 0
	);
}
</script>
