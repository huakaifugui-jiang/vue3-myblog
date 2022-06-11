<!--
 * @Author: wlj
 * @Date: 2022-06-02 11:45:53
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-08 10:52:38
 * @Description: 手机模型
-->
<template>
  <div class="phone">
    <div class="phone_bar">
      <div style="display: flex; align-items: center">
        <img
          style="width: 15px; height: 10px"
          src="@/assets/images/signal.png"
        />
        <img
          style="width: 18px; height: 18px; padding-left: 2px"
          src="@/assets/images/wifi.png"
        />
      </div>
      <div>14:36</div>
      <div>
        <img
          style="width: 25px; height: 24px"
          src="@/assets/images/quantity.png"
        />
      </div>
    </div>
    <div
      class="phone_body"
      :style="styleObj"
      style="
        margin-top: 25px;
        height: calc(100% - 25px);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  styleObj: {
    type: Object,
  },
});
</script>
<style lang="less" scpoed>
.phone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 548px;
  background-color: #fff;
  box-shadow: 0 0 100px 0 rgb(0 0 0 / 10%);
  .phone_bar {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    height: 25px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    box-sizing: border-box;
  }
  .phone_body {
    box-sizing: border-box;
    overflow-y: auto;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
