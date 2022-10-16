const ReactUseState = (() => {
  let stateHook = [];
  let index = 0;
  const useStateHook = (value) => {
    const localIndex = index;
    index++;
    if (stateHook[localIndex] === undefined) {
      stateHook[localIndex] = value;
    }
    const setStateHookFunc = (newValue) => {
      stateHook[localIndex] = newValue;
    };
    return [stateHook[localIndex], setStateHookFunc];
  };

  const useEffectHook = (callback, dependencyArray) => {
    let hasChanged = true;

    const oldDependency = stateHook[index];

    if (oldDependency) {
      hasChanged = false;
      dependencyArray.forEach((dependency, index) => {
        const oldDepend = oldDependency[index];
        const isTheSame = Object.is(oldDepend, dependency);
        if (!isTheSame) {
          hasChanged = true;
        }
      });
    }

    if (hasChanged) {
      callback();
    }

    stateHook[index] = dependencyArray;
    index++;
  };

  const resetIndex = () => {
    index = 0;
  };
  return { useStateHook, resetIndex, useEffectHook };
})();

const { useStateHook, resetIndex, useEffectHook } = ReactUseState;
const C = () => {
  debugger;
  const [counter, setCounter] = useStateHook(1);
  const [name, setName] = useStateHook("Thomas");

  console.log(counter);
  console.log(name);

  useEffectHook(() => {
    console.log("USE EFFECT");
  }, [name]);

  if (counter !== 2) {
    setCounter(2);
  }

  if (name !== "Jack" && counter === 2) {
    setName("Jack");
  }
};

C();
resetIndex();
C();
resetIndex();
C();
