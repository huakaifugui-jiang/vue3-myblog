<template>
  <div>这是子组件</div>
  <div>{{ age }}</div>
  <button @click="xxxEmit"></button>
  <button @click="propsChange">修改props</button>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
export default defineComponent({
  name: "Child",
  props: {
    age: Number,
    name: String,
  },
  setup(props, { attrs, expose, slots, emit }) {
    function xxxEmit() {
      emit("xxx", 222);
    }
    function propsChange() {
      emit("update:name", "1");
      nextTick(() => {
        console.log(props);
      });
    }
    let name1 = ref("花开富贵");
    let age1 = ref(18);
    expose({ age1 });
    return {
      xxxEmit,
      propsChange,
    };
  },
});
</script>

<style></style>
