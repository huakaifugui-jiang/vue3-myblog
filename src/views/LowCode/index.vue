<!--
 * @Author: wlj
 * @Date: 2022-06-01 16:27:14
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-10 17:45:01
 * @Description: 
-->
<template>
  <Layout :list="lowCodeList">
    <div class="container">
      <div class="bar"></div>
      <div class="content">
        <!-- 左边的拖拽选项 -->
        <draggable
          :list="optionList"
          :group="{ name: 'people', pull: 'clone', put: false }"
          item-key="name"
          class="option"
          :clone="clone"
        >
          <template #item="{ element }" class="option">
            <div class="option_item">
              <div>
                <el-icon><Bicycle /></el-icon>
              </div>
              <div>{{ element.name }}</div>
            </div>
          </template>
        </draggable>
        <!-- 中间的手机 -->
        <Phone :styleObj="styleObj">
          <draggable
            :list="dragList"
            style="width: 100%; height: 100%"
            group="people"
            item-key="id"
          >
            <template #item="{ element }">
              <div
                class="component_item"
                :id="element.id"
                @click="onComponentClick(element)"
                @mouseenter="onComponentEnter(element.id)"
                @mouseleave="onComponentLeave(element.id)"
              >
                <component
                  :is="element.component"
                  :style="{
                    height: element.defaultHeight + 'px',
                    width: element.defaultWidth,
                  }"
                >
                </component>
                <div
                  v-show="elementClickId == element.id"
                  class="component-solid"
                ></div>
                <div
                  v-show="elementHoverId == element.id"
                  class="component-dashed"
                ></div>
                <div class="component-tips"></div>
              </div>
            </template>
          </draggable>
        </Phone>
        <!-- 右边的设置-->
        <div class="setting">
          <input
            v-focus
            v-debounce="{ fn: test, event: 'click', delay: 800 }"
          />
          <Setting
            @styleChange="onStyleChange"
            :title="elementTitle"
            :styleItemArray="styleItemArray"
          ></Setting>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import { Bicycle } from "@element-plus/icons-vue";
import { ref, reactive, shallowRef, markRaw } from "vue";
import draggable from "vuedraggable";
import JImage from "@/components/J-image.vue";
import JSwiper from "@/components/J-Swiper.vue";
import JVideo from "@/components/J-Video.vue";
import JTimeCount from "@/components/J-TimeCount.vue";
import JNoticeBar from "@/components/J-NoticeBar.vue";
import Phone from "@/components/Phone.vue";
import useDeepClone from "@/hooks/useDeepClone";
import Setting from "@/components/Setting";

interface LowCodeList {
  name: string;
  icon: string;
}

interface ComponentData {
  id: string;
  name: string;
  component: Function;
  defaultHeight: String;
  defaultWidth: String;
}

let lowCodeList = reactive<LowCodeList[]>([{ name: "海报", icon: "none" }]);
let optionList = shallowRef<ComponentData[]>([
  {
    id: "1",
    name: "图片",
    component: markRaw(JImage),
    defaultHeight: "50",
    defaultWidth: "100%",
  },
  {
    id: "2",
    name: "轮播",
    component: markRaw(JSwiper),
    defaultHeight: "100",
    defaultWidth: "100%",
  },
  {
    id: "3",
    name: "视频",
    component: markRaw(JVideo),
    defaultHeight: "150",
    defaultWidth: "100%",
  },
  {
    id: "4",
    name: "倒计时",
    component: markRaw(JTimeCount),
    defaultHeight: "20",
    defaultWidth: "100%",
  },
  {
    id: "5",
    name: "通知栏",
    component: markRaw(JNoticeBar),
    defaultHeight: "30",
    defaultWidth: "100%",
  },
]);
let dragList = reactive([]);

//拖拽过去时修改组件的id
const clone = function (origin: Event) {
  let data: {
    [propName: string]: Object;
  };
  data = useDeepClone(origin as any);
  data.id = parseInt(
    new Date().getMilliseconds() + "" + Math.ceil(Math.random() * 100000)
  ).toString(16);
  markRaw(data.component);
  return data;
};

//styleObj 全局页面传递给子组件 components/Phone
let styleObj = reactive({
  background: "#fff",
  "background-image": "url()",
  "padding-top": 0 + "px",
  "padding-left": 0 + "px",
  "padding-right": 0 + "px",
  "padding-bottom": 0 + "px",
});

//styleItemObj 单个容器的样式
let styleItemArray = reactive<{ [propName: string]: Object }>({});

//子组件 components/Phone 触发时间 修改样式
const onStyleChange = function (e: string): void {
  const type = e.split("$:")[0];
  let style = e.split("$:")[1];
  style == "null" ? (style = "") : "";
  switch (type) {
    case "backColor":
      styleObj.background = style;
      break;
    case "backImg":
      styleObj["background-image"] = `url(${style})`;
      break;
    case "padding-top":
      styleObj["padding-top"] = `${style}px`;
      break;
    case "padding-left":
      styleObj["padding-left"] = `${style}px`;
      break;
    case "padding-right":
      styleObj["padding-right"] = `${style}px`;
      break;
    case "padding-bottom":
      styleObj["padding-bottom"] = `${style}px`;
      break;
    default:
      break;
  }
};

//点击组件元素时
let elementClickId = ref<string>(""); //点击组件元素时的id
let elementTitle = ref<string>(""); //点击组件元素时的name
const onComponentClick = function (element: ComponentData): void {
  elementClickId.value = element.id;
  elementTitle.value = element.name;
  styleItemArray[element.id] = {
    id: "",
    background: "#fff",
    "background-image": "url()",
    "padding-top": 0 + "px",
    "padding-left": 0 + "px",
    "padding-right": 0 + "px",
    "padding-bottom": 0 + "px",
  };
  const itemDom: HTMLElement = document.getElementById(
    element.id
  ) as HTMLElement;
  //  itemDom.setAttribute("style", styleItemArray[element.id]);
};

//hover组件元素时
let elementHoverId = ref<string>("");
const onComponentEnter = function (id: string): void {
  elementHoverId.value = id;
};

//离开组件元素时
const onComponentLeave = function (id: string): void {
  elementHoverId.value = "";
};

const test = function () {
  console.log(123123123);
};
</script>
<style lang="less" scpoed>
.container {
  height: 100%;
  width: 100%;
  .bar {
    display: flex;
    height: 56px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #ebedf0;
  }
  .content {
    position: relative;
    background-color: #f7f8fa;
    display: flex;
    height: calc(100% - 57px);
    padding-top: 5px;
    box-sizing: border-box;
    overflow: hidden;
    .option {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 140px;
      background: #fff;
      align-content: baseline;
    }
    .option_item {
      width: 50px;
      height: 50px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: gray;
    }
    .option_item:hover {
      background: #d3dce6;
    }
    .setting {
      position: absolute;
      right: 0;
      width: 280px;
      background: #fff;
      height: 100%;
      padding-top: 10px;
    }
  }
  .component_item {
    position: relative;
    .component-solid {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: solid 1px #155bd4;
      z-index: 100;
    }
    .component-dashed {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: dashed 1px #155bd4;
      z-index: 100;
    }
    .component-tips {
      position: absolute;
      background: #fff;
    }
  }
}
</style>
