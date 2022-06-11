<!--
 * @Author: wlj
 * @Date: 2022-05-25 08:43:10
 * @LastEditors: wlj
 * @LastEditTime: 2022-05-25 09:45:45
 * @Description: v-model主页面
-->
<template>
  <div style="padding: 10px; border: 2px solid green">
    <div>父组件</div>
    <div>{{ name }}</div>
    <Child v-model:name="name" />
  </div>
</template>

<script lang="ts">
import Child from "./Child.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { Child },
  setup() {
    let name = ref("");
    return {
      name,
    };
  },
});
</script>

<style></style>
