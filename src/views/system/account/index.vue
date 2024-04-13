
<template>
    <div>
        account
        <a-button @click="handelClick">点击跳转</a-button>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handelClick = () => {
    router.push("/system/account_detail/")
}
</script>
