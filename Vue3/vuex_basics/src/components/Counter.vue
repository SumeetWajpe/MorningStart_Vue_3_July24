<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
// const incrementCount = () => store.dispatch("incrementCount");
// const decrementCount = () => store.dispatch("decrementCount");
const count = computed(() => store.state.count)
</script>

<template>
    <div>
        <p> Count: {{ count }}</p>
    </div>
</template>

<style scoped></style>
