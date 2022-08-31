import { updateCounterByValueUseCase } from "./updateCounterByValueUseCase";
import type { UpdateCounterByValueStore } from "./updateCounterByValueUseCase";
import { increment_by_value } from "../domain/counterModel";

const incrementCounterByValueUseCase = (
  store: UpdateCounterByValueStore,
  incrementValue: number
) => {
  return updateCounterByValueUseCase(store,
    increment_by_value, incrementValue
  );
};

export { incrementCounterByValueUseCase };
