import { ref } from "vue";

let count = ref(0);

const increase = (step: number = 1): void => {
  count.value += step;
}

const decrease = (step: number = 1): void => {
  if (count.value >= step) {
    count.value -= step;
  }
}

const autoIncrement = (step: number = 1): NodeJS.Timeout => {
  const timer = setInterval(() => increase(step), 1000);
  return timer;
}

export function useCountService() {
  return {
    count,
    increase,
    decrease,
    autoIncrement
  }
}