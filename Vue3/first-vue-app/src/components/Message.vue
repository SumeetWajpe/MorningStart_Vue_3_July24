<script setup lang="ts">
import { IMessage } from "../types/types.ts"


// const props = defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// });


// OR

const props = defineProps<IMessage>()
// console.log(props.details.msg)
</script>

<template>
    <img width="200px" :src="details.imageUrl" :alt="details.msg">
    <h3>{{ details.msg }}</h3>

    <h5>From : {{ details.from }}</h5>
    <h5>To : {{ details.to }}</h5>

</template>

<style scoped></style>
