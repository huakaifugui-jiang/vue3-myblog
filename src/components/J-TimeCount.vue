<!--
 * @Author: wlj
 * @Date: 2022-06-06 16:02:01
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-06 16:05:36
 * @Description: 
-->
<template>
  <van-count-down :time="time" />
</template>
<script lang="ts" setup>
import { CountDown as VanCountDown } from "vant";
import { ref } from "vue";
const time = ref(30 * 60 * 60 * 1000);
</script>
<style lang="less" scpoed></style>
