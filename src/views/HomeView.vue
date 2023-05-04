<script lang="ts">
import { usePostStore } from "@/stores/post";
import { mapState } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = usePostStore();
    store.setPosts();
  },
  computed: {
    ...mapState(usePostStore, ["posts", "loading",'error']),
  },
});
</script>

<template lang="pug">
main
  div(v-if="loading")
    div.alert.alert-success Yükleniyor
  div(v-else-if="error")
    div.alert.alert-danger {{ error.message }}
  div(v-else)
    div.postsList
      div.panel.panel-default
        div.panel-heading 
          span Toplam 
          b {{ posts.length }}
          span  gönderi listeleniyor
        div.table-responsive-lg
          table.table.table-light.table-striped.table-bordered.table-hover
            thead.thead-dark
              tr
                th(scope="col",width="10%") User ID
                th(scope="col",width="5%") ID
                th(scope="col",width="40%") Title
                th(scope="col",width="45%") Content

            tbody
              tr(v-for="post in posts" :key="post.id")
                th(scope="row")
                  b {{ post.userId }}
                td {{ post.id }}
                td {{ post.title }}
                td {{ post.body }}



</template>
