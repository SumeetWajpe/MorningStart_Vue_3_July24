<script setup lang="ts">
import Message from './components/Message.vue'
var firstMessage = { msg: "Hello", from: "John", to: "Joe" }

</script>

<template>

  <Message :details="firstMessage" />
  <!-- <Message msg="Hi" from="Marc" to="Hillary" /> -->

</template>

<style scoped></style>
