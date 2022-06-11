<!--
 * @Author: wlj
 * @Date: 2022-06-02 10:19:26
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-02 16:18:34
 * @Description: 轮播图
-->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>
<script lang="ts" setup>
import { Swipe as VanSwipe, SwipeItem as VanSwipeItem } from "vant";
import { reactive } from "vue";
</script>
<style lang="less" scpoed>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  overflow: hidden;
}
</style>
