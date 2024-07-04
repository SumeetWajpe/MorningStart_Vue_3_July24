import ListOfCourses from "@/components/ListOfCourses.vue";
import Posts from "@/components/Posts.vue";
import PostDetails from "@/components/PostDetails.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: ListOfCourses },
  { path: "/posts", component: Posts },
  { path: "/postdetails/:id", component: PostDetails },
];

const router = createRouter({
  routes,
  history: createWebHistory(), // maintains history for SPA (used html5 history API)
});

export default router;