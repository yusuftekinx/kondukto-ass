import axios from "@/helper/axios/AxiosInstance";
import type { PostError } from "@/helper/types/Error";
import type { PostType } from "@/helper/types/Post";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("post", {
  state() {
    return {
      posts: ref<PostType[]>([]),
      error: ref<PostError | null>(null),
      loading: ref<Boolean>(false),
    };
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getPost(state) {
      return (postId: number) => {
        const findPost = state.posts.find((post) => post.id === postId);
        return findPost;
      };
    },
  },
  actions: {
    async setPosts() {
      this.setLoading(true);
      try {
        const { data } = await axios.get("/");
        this.posts = data;
      } catch (err: any) {
        this.error = {
          message: err.message,
        };
      } finally {
        this.setLoading(false);
      }
    },
    setLoading(value: boolean) {
      this.loading = value;
    },
    setError(value: PostError | null) {
      this.error = value;
    },
  },
});
