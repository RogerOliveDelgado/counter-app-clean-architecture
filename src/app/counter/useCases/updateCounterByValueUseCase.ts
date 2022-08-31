import debounce from "lodash.debounce";

import type { Counter } from "../domain/counterEntity";
import type { CounterStore } from "../domain/counterStore";

type UpdateCounterByValueStore = Pick<
  CounterStore,
  "counter" | "updateCounter" | "setCounter"
>;

const debouncedTask = debounce((task) => Promise.resolve(task()), 500);

const updateCounterByValueUseCase = (
  store: UpdateCounterByValueStore,
  updateBy: (counter: Counter, incrementValue: number) => Counter,
  incrementValue: number
) => {
  const updatedCounter = store.counter
    ? updateBy(store.counter, incrementValue)
    : store.counter;

  if (!updatedCounter || store.counter?.value === updatedCounter?.value) return;

  store.setCounter(updatedCounter);

  return debouncedTask(() => store.updateCounter(updatedCounter));
};

export { updateCounterByValueUseCase };
export type { UpdateCounterByValueStore };