/**
 * @param {string} key - Должен быть задан в формате UUID для исключению пересений
 */
export function useStorage<T>(key: string, defaultValue?: T) {
  function setValue(value: string | number | boolean | object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  let parsedValue = defaultValue;
  const value = localStorage.getItem(key);

  if (value) {
    try {
      parsedValue = JSON.parse(value);
    } catch (e) {}
  }

  return [parsedValue, setValue] as const;
}
