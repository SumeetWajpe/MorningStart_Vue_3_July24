import ListOfCourses from "@/components/ListOfCourses.vue";
import Posts from "@/components/Posts.vue";
import PostDetails from "@/components/PostDetails.vue";
import CourseDetails from "@/components/CourseDetails.vue";
import Dashboard from "@/components/Dashboard.vue";
import NotFound from "@/components/NotFound.vue";

import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   { path: "/", component: ListOfCourses },
//   {
// path: "/coursedetails/:id",
// name: "coursedetails",
// component: CourseDetails,
//   },

// { path: "/posts", component: Posts },
// { path: "/postdetails/:id", component: PostDetails },
// ];

// Nested Routes
const routes = [
  // {path:"/",component:Login},
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "", component: ListOfCourses },
      {
        path: "coursedetails/:id",
        name: "coursedetails",
        component: CourseDetails,
      },
      { path: "posts", component: Posts },
      { path: "postdetails/:id([0-9]+)", component: PostDetails },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(), // maintains history for SPA (used html5 history API)
});

export default router;
