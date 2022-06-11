<!--
 * @Author: wlj
 * @Date: 2022-05-25 10:12:33
 * @LastEditors: wlj
 * @LastEditTime: 2022-05-25 14:08:54
 * @Description: 导航
-->
<template>
  <div class="j_nav">
    <div class="j_nav_content"></div>
    <div class="j_nav_bottom">
      <span class="iconfont icon-caidanzhankai" />
      <span class="iconfont icon-caidanshouqi" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "JNav",
});
</script>

<style lang="less" scoped>
@media screen and (max-width: 900px) {
  .j_nav {
    display: inline-block;
    width: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon-caidanshouqi {
    display: none;
  }
}
@media screen and (min-width: 900px) {
  .j_nav {
    width: 30%;
  }
}
.j_nav {
  position: relative;
  background: #f9fafb;
  height: 100%;
  max-width: 200px;
}
.j_nav_bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 80px;
  border-top: 1px solid rgb(226, 225, 225);
}
</style>
