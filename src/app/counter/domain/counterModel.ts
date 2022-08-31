import type { Counter } from "./counterEntity";

const create = (count: Counter["value"]) => ({ value: count });
const decrement = (counter: Counter) => ({
  value: Math.max(counter.value - 1, 0)
});
const increment = (counter: Counter) => ({ value: counter.value + 1 });
const increment_by_value = (counter: Counter, incrementingValue: number) => ({value: counter.value + incrementingValue})

export { create, decrement, increment, increment_by_value };
