<script setup lang="ts">

class MessageDetails {
    constructor(public msg: string, public from: string, public to: string) {

    }
}

interface IMessage {
    details: MessageDetails
}

// const props = defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// });


// OR

const props = defineProps<IMessage>()

</script>

<template>
    <h3>{{ details.msg }}</h3>

    <h5>From : {{ details.from }}</h5>
    <h5>To : {{ details.to }}</h5>

</template>

<style scoped></style>
