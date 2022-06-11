<!--
 * @Author: wlj
 * @Date: 2022-05-25 10:13:28
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-01 15:47:13
 * @Description: 
-->
<template>
  <Layout :list="notepadList">
    <div class="container">
      <div class="list">
        <div class="list_search">
          <div class="search_input">
            <el-autocomplete
              :input-style="{
                'border-radius': '55px',
                border: 'none',
                'font-size': '12px',
              }"
              v-model="condition"
              placeholder="搜索全部笔记"
              :prefix-icon="Search"
            />
          </div>
        </div>
        <!-- 列表 -->
        <ul class="list_detail">
          <li>
            <FileItem></FileItem>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import FileItem from "@/components/FileItem.vue";
import Layout from "@/components/Layout.vue";
import { Search } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
//接口
interface NotepadList {
  icon: string;
  name: string;
  [propsName: string]: Object;
}
//代码
let notepadList = reactive<NotepadList[]>([
  {
    icon: "Folder",
    name: "新建文件夹",
    list: [{ name: "item1" }],
  },
]);
let condition = ref<string>("");
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  .list {
    width: 260px;
    border-right: 1px solid#eceff4;
    height: 100%;
    .list_search {
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      height: 72px;
      .search_input {
        position: relative;
        margin: 24px 0 16px 20px;
      }
    }
  }
}
/deep/.el-input__wrapper {
  padding: 0;
  border: none;
  box-shadow: none;
  background-color: #f4f6f7;
  width: 140px;
  border-radius: 50px;
  padding-left: 15px;
}
</style>
