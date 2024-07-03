<script setup lang="ts">
import Message from './components/Message.vue';
import { MessageDetails } from "../types/types.ts"
var messages: MessageDetails[] = [{ msg: "Hello", from: "John", to: "Joe", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/640px-Hello_Web_Series_%28Wordmark%29_Logo.png" },
{ msg: "Hey", from: "John", to: "Joe", imageUrl: "https://www.shutterstock.com/image-vector/hey-text-speech-bubble-hi-260nw-2328471449.jpg" }];

</script>

<template>

  <div v-for="message in messages">
    <Message :details="message" />
  </div>

  <!-- <Message msg="Hi" from="Marc" to="Hillary" /> -->

</template>

<style scoped></style>
