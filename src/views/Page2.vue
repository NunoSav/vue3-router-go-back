<template>
  <div>
    <h1>Page 2</h1>
    <button @click="go()">GO TO ChildPage</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "page2",
  setup() {
    const router = useRouter();
    const go = () => {
      console.log("GO");
      router.push({
        name: "childPage",
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