<template>
   <div class="row">
       <Course v-for="course in  courses.courselist" :coursedetails="course" @deletecourse="(theCourseId:number)=>DeleteCourseHandler(theCourseId)" :key="course.id" />
   </div>
</template>
<script setup lang="ts">
import Course from "@/components/Course.vue";
import type { CourseModel } from '@/types/types';
import {reactive} from "vue"

type CourseType = {
    courselist:CourseModel[]
}

let courses = reactive<CourseType>({
    courselist :[
    {
        id: 1,
        title: "VueJS",
        price: 5000,
        likes: 500,
        rating: 4,
        imageUrl: "https://img-b.udemycdn.com/course/750x422/5157066_66bb.jpg"
    },
    {
        id: 2,
        title: "React",
        price: 4000,
        likes: 300,
        rating: 4,
        imageUrl: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
    },
    {
        id: 3,
        title: "Redux",
        price: 4500,
        likes: 100,
        rating: 3,
        imageUrl: "https://blog.openreplay.com/images/understanding-redux-thunk-for-react--the-big-picture/images/hero.png"
    }
],

});



function DeleteCourseHandler(theCourseId:number){
    // console.log("Deleting..",theCourseId)
    courses.courselist = courses.courselist.filter((course:CourseModel)=>course.id !== theCourseId)
}


</script>
<style>

</style>