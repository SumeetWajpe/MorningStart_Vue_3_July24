<template>
    <div>
        List Of Courses !
    </div>
</template>
<script setup lang="ts">
import type { CourseModel } from '@/types/types';


let courses: CourseModel[] = [
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
        imageUrl: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5923684/og_image/optimized/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
    }
];




</script>
<style></style>