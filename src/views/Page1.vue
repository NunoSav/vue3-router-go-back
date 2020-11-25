<template>
  <div>
    <h1>Page 1</h1>

    <button @click="go()">GO TO Page2</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "page1",

  setup() {
    const router = useRouter();
    const go = () => {
      console.log("GO");
      router.push({
        name: "page2",
      });
    };

    return {
      go,
    };
  },
});
</script>

<style>
</style>