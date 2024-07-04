<template >
    <div>
        
        <header>
            <h1>All Posts</h1>
        </header>
        <main>
            <ul>
                <li v-for="post in posts.list">
                    {{post.title}}
                </li>
            </ul>

        </main>
    </div>
</template>
<script setup lang="ts">
import axios from "axios";
import {onMounted, reactive} from "vue";

// add strong type here
const posts = reactive<any>({
    list:[],error:""
});

onMounted(async () => {
    try {
         const {data} =  await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts.list = data;
    } catch (error:any) {
        posts.error = error?.message
    }
});

</script>
<style>
    
</style>