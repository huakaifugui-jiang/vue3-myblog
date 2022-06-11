<!--
 * @Author: wlj
 * @Date: 2022-05-25 08:43:18
 * @LastEditors: wlj
 * @LastEditTime: 2022-05-25 09:49:23
 * @Description: 
-->
<template>
  <div style="padding: 10px; border: 2px solid red">
    <div>子组件</div>
    <div>我的名字：<input @input="changeName" /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  props: {
    name: String,
  },
  setup(props, { emit }) {
    function changeName(val: any) {
      emit("update:name", val.target.value);
      console.log(val.target.value);
    }
    return { changeName };
  },
});
</script>

<style></style>
