import React from "react";
import styled from "styled-components";

import Button from "../../shared/ui/Button";
import Spinner from "../../shared/ui/Spinner";

import { useCounterViewModel } from "../controller/counterViewModel";
import { useCounterStoreImplementation } from "../data/counterStoreImplementation";

const Count = styled.span`
  font-size: 1.375rem;
  min-width: 4rem;
  display: inline-block;
`;

const CounterView = () => {
  const store = useCounterStoreImplementation();
  const {
    count,
    canDecrement,
    isLoading,
    getCounter,
    incrementCounter,
    decrementCounter,
    incrementCounterByValue
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  const incrementValue = 7

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Button onClick={decrementCounter} disabled={!canDecrement}>
            dec
          </Button>
          <Count>{count}</Count>
          <Button onClick={incrementCounter}>inc</Button>
          <Button onClick={() => incrementCounterByValue(incrementValue)}>+5</Button>
        </>
      )}
    </div>
  );
};

export default CounterView;
