<template >
    <div class="col-md-3">
    <div class="card" width="250px" height="200px" >
  <img :src="coursedetails.imageUrl" class="card-img-top" :alt="coursedetails.title">
  <div class="card-body">
    <h5 class="card-title">{{coursedetails.title}}</h5>
    <p class="card-text">₹.{{coursedetails.price}}</p>
    <p class="card-text">{{coursedetails.rating}}</p>
    <button class="btn btn-primary">
        {{coursedetails.likes}} <i class="fa-solid fa-thumbs-up"></i>
    </button>
    
  </div>
</div>
    </div>
</template>
<script setup lang="ts">
import type { CourseProps } from '@/types/types';

defineProps<CourseProps>()

</script>
<style>
    
</style>