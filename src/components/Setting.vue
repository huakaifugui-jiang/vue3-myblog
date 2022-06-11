<!--
 * @Author: wlj
 * @Date: 2022-06-06 16:34:42
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-10 14:44:46
 * @Description: 可视化页面的设置组件
-->
<template>
  <div class="setting_container">
    <div class="title">{{ title || "页面配置" }}</div>
    <!-- 全局页面配置面板选项 -->
    <div class="color_item">
      背景颜色
      <el-color-picker
        v-model="color"
        show-alpha
        :predefine="predefineColors"
        @change="onColorChange"
      />
    </div>
    <div class="color_item">
      背景图片
      <el-input
        style="width: 150px"
        v-model="backImg"
        placeholder="请输入图片"
        @change="onBackImgChange"
      />
    </div>
    <div class="color_item">
      上内边距
      <el-slider
        style="width: 70%"
        v-model="paddingTopVal"
        show-input
        input-size="small"
        @input="onPaddingTopChange"
      />
    </div>
    <div class="color_item">
      左内边距
      <el-slider
        style="width: 70%"
        v-model="paddingLeftVal"
        show-input
        input-size="small"
        @input="onPaddingLeftChange"
      />
    </div>
    <div class="color_item">
      右内边距
      <el-slider
        style="width: 70%"
        v-model="paddingRightVal"
        show-input
        input-size="small"
        @input="onPaddingRightChange"
      />
    </div>
    <div class="color_item">
      下内边距
      <el-slider
        style="width: 70%"
        v-model="paddingBottomVal"
        show-input
        input-size="small"
        @input="onPaddingBottomChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
const emit = defineEmits(["styleChange"]);
const params = defineProps({
  title: {
    type: String,
    default: "页面配置",
  },
  styleItemArray: {
    type: Object,
  },
});
const predefineColors = ref<string[]>([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
]);
onMounted(() => {
  console.log(
    document.getElementsByClassName("color_item"),
    Array.from(document.getElementsByClassName("color_item"))
  );
});

//切换背景颜色
let color = ref<string>("");
const onColorChange = function (e: string): void {
  emit("styleChange", `backColor$:${e}`);
};

//切换背景图片
const backImg = ref<string>("");
const onBackImgChange = function (val: string): void {
  emit("styleChange", `backImg$:${val}`);
};

//改变上内边距
const paddingTopVal = ref(0);
const onPaddingTopChange = function (val: number): void {
  emit("styleChange", `padding-top$:${val}`);
};

//改变左内边距
const paddingLeftVal = ref(0);
const onPaddingLeftChange = function (val: number): void {
  emit("styleChange", `padding-left$:${val}`);
};

//改变右内边距
const paddingRightVal = ref(0);
const onPaddingRightChange = function (val: number): void {
  emit("styleChange", `padding-right$:${val}`);
};

//改变下内边距
const paddingBottomVal = ref(0);
const onPaddingBottomChange = function (val: number): void {
  emit("styleChange", `padding-bottom$:${val}`);
};
</script>
<style lang="less" scpoed>
.setting_container {
  height: 100%;
  width: 100%;
  padding: 10px 0px;
  .title {
    padding: 0px 0px 10px 10px;
    border-bottom: 1px solid #f2f4f6;
    font-weight: 600;
    font-size: 18px;
  }
  .color_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
}
.el-slider__input {
  width: 85px;
  margin: 0;
}
.el-slider__runway.show-input {
  margin-right: 10px;
}
</style>
