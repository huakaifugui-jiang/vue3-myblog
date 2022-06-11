<!--
 * @Author: wlj
 * @Date: 2022-06-01 11:23:22
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-01 14:51:07
 * @Description: 我的拖拽测试
-->
<template>
  <draggable :disabled="false" :list="list" :move="checkMove" item-key="id">
    <template #item="{ element }">
      <ul>
        <li style="margin-top: 50px">
          {{ element.name }}
        </li>
      </ul>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import draggable from "vuedraggable";
import { ref, reactive } from "vue";
let dragging = ref(false);

let list = reactive([
  { name: "John", id: 0 },
  { name: "Joao", id: 1 },
  { name: "Jean", id: 2 },
]);
const checkMove = function (e) {
  window.console.log("Future index: " + e.draggedContext.futureIndex);
  console.log(list);
};
</script>
<style lang="less" scpoed></style>
