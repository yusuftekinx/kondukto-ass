<script lang="ts">
import HomeView from "@/views/HomeView.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HomeView,
  },
});
</script>

<template lang="pug">
.app 
  HomeView
</template>
