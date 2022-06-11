<!--
 * @Author: wlj
 * @Date: 2022-05-31 15:22:20
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-11 11:00:35
 * @Description: 文件单个块
-->
<template>
  <div class="file_container">
    <div class="title">
      <div>
        <el-icon color="#FFBD4C" :size="20"><Folder /></el-icon>
      </div>
      <div class="name">新建文件夹</div>
      <div class="more">
        <el-icon color="#a9b2c2"><MoreFilled /></el-icon>
      </div>
    </div>
    <div class="time">2022.5.31</div>
  </div>
</template>
<script lang="ts" setup>
import { Folder, MoreFilled } from "@element-plus/icons-vue";
</script>
<style lang="less" scpoed>
.file_container {
  padding: 15px 8px;
  margin: 0 11px 0 12px;
  .title {
    display: flex;
    align-items: center;
    .name {
      margin-left: 8px;
      padding-left: 5px;
      cursor: pointer;
    }
    .more {
      flex: 1;
      text-align: right;
    }
  }
  .time {
    color: #a9b2c2;
    margin: 4px 0 0 30px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.file_container:hover {
  border-radius: 4px;
  background-color: #f4f6f7;
}
</style>
