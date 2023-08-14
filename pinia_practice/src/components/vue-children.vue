<template>
  <div>
    <strong>{{ count }}</strong>
    <button @click="increment({ num: 1 })">증가</button>
  </div>
</template>

<script setup>
import { useCountStore } from '@/store/store.js';
import { computed } from 'vue';

const store = useCountStore();
const count = computed(() => store.count);
const increment = store.increment;
</script>