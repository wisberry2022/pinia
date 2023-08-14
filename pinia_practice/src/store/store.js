import { defineStore } from "pinia";
import { reactive, computed } from 'vue';

export const useCountStore = defineStore('count', () => {
  const state = reactive({ count: 0 });
  const increment = ({ num }) => {
    state.count += num;
  }

  const count = computed(() => state.count)

  return { count, increment };
})

// export const useCountStoreByOption = defineStore('oCount', {
//   state: () => {
//     count: 0
//   },
//   actions: {
//     increment({ num }) {
//       this.count += num;
//     },
//   }
// })