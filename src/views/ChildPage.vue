<template>
  <div>
    <h1>Child Page</h1>
    <button @click="goBack()">GO BACK</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "childPage",
  setup() {
    const router = useRouter();
    const goBack = () => {
      console.log("GO BACK");
      router.go(-2);
    };

    return {
      goBack,
    };
  },
});
</script>

<style>
</style>