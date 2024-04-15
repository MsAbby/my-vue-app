
<template>
	<a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
		<a-layout>
			<a-layout-header :style="headerStyle">Header</a-layout-header>
			<a-layout>
				<a-layout-sider :style="siderStyle">
          <Sidebar />
        </a-layout-sider>
				<a-layout-content :style="contentStyle">
					<router-view></router-view>
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-space>
</template>
<script lang="ts" setup>
import type { CSSProperties } from "vue";
import Sidebar from "./sidebar2.vue";
// import Sidebar from "./sidebar.vue";
const headerStyle: CSSProperties = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 50,
	lineHeight: "64px",
	backgroundColor: "#7dbcea",
};

const contentStyle: CSSProperties = {
	textAlign: "center",
	minHeight: "100vh",
};

const siderStyle: CSSProperties = {
	textAlign: "center",
  minHeight: "100vh",
	color: "#fff",
};
</script>
