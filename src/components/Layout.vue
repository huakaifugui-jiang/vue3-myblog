<!--
 * @Author: wlj
 * @Date: 2022-05-24 10:29:01
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-02 08:42:14
 * @Description: 布局
-->
<template>
  <div class="layout">
    <!-- 左边菜单栏 -->
    <el-menu
      :popper-offset="0"
      class="layout_menu el-menu-vertical-uncollapse"
      :collapse="isCollapse"
    >
      <div style="margin-bottom: 5px">
        <el-avatar
          shape="circle"
          :size="isCollapse ? 40 : 50"
          fit="cover"
          src=""
        />
      </div>
      <div index="4">
        <el-button class="btn" type="primary">
          <span style="font-size: 20px">+</span>
          <span style="margin-left: 5px" v-show="!isCollapse">新建</span>
        </el-button>
      </div>
      <div v-for="(item, index) in list" :key="index">
        <el-sub-menu v-if="item.list" :index="`${index}`">
          <template #title>
            <el-icon><Folder /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-if="item.list"
            v-for="(subitem, subindex) in item.list"
            :key="subindex"
            index="1-1"
            >{{ subitem.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else>
          <template #title>
            <el-icon><Folder /></el-icon>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </div>
      <div class="bottom">
        <el-icon
          style="cursor: pointer"
          color="#ACB3C0"
          @click="handleOpen"
          :size="25"
        >
          <Expand />
        </el-icon>
        <el-icon
          v-show="!isCollapse"
          style="cursor: pointer"
          color="#ACB3C0"
          @click="handleClose"
          :size="25"
          ><Fold
        /></el-icon>
      </div>
    </el-menu>
    <!-- 右边内容 -->
    <div class="layout_content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, PropType } from "vue";
import { Folder, Expand, Fold } from "@element-plus/icons-vue";
interface PropList {
  icon: string;
  name: string;
  [propsName: string]: Object;
}
let isCollapse = ref<boolean>(false);
const props = defineProps({
  list: {
    type: Array as PropType<PropList[]>,
  },
});
//监视菜单开关
const handleOpen = (): void => {
  if (!isCollapse.value) return;
  isCollapse.value = false;
};
const handleClose = (): void => {
  if (isCollapse.value) return;
  isCollapse.value = true;
};
let screenWidth = ref<number>(0);
watch(screenWidth, (val: number) => {
  if (val <= 600) {
    isCollapse.value = true;
  } else if (val >= 720) {
    isCollapse.value = false;
  }
});
onMounted((): void => {
  window.onresize = (): void => {
    return ((): void => {
      screenWidth.value = document.body.clientWidth;
    })();
  };
});
</script>

<style lang="less" scoped>
.btn {
  width: 60%;
}
.layout {
  display: flex;
  height: 100vh;
  .layout_menu {
    padding: 10px 0;
    background: #f9fafb;
    text-align: center;
    .bottom {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 70%;
      height: 30px;
      border-top: 1px solid rgb(226, 225, 225);
    }
  }
  .layout_content {
    width: 100%;
    height: 100%;
  }
}
.el-menu-vertical-uncollapse:not(.el-menu--collapse) {
  width: 240px;
}
</style>
