import { useState } from "react";

function useLocalStorage(key, initailValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initailValue)
  );

  const setValue = (value) => {
    //Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    //Set to state
    setLocalStorageValue(value);
    //Set to Local Storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initailValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initailValue;
}

export default useLocalStorage;
 