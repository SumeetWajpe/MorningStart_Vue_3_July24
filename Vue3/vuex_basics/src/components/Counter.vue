<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const incrementCountHandler = () => store.dispatch("incrementCount");// actionName
const decrementCountHandler = () => store.dispatch("decrementCount");
const count = computed(() => store.state.count)
</script>

<template>
    <div>
        <p> Count: {{ count }}</p>

        <button @click="incrementCountHandler">
            ++
        </button>
    </div>
</template>

<style scoped></style>
