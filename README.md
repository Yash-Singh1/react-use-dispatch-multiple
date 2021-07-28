# `react-use-dispatch-multiple`

A React Hook for dispatching multiple actions in Redux.

## Usage

```js
import { useDispatchMultiple } from "react-use-dispatch-multiple";

const App = () => {
  const dispatch = useDispatchMultiple();

  dispatch(
    { type: "ACTION1", info: "for action 1" },
    { type: "ACTION2", info: "for action 2" }
  );
};
```
