/**
 * @description Load arbitrary JSON data from local storage, and return it as type T
 * @param key String to search in localStorage
 * @returns Empty object of type T, or the loaded object as T
 *
 * @example: const data: MyData = loadFromLocalStorage<MyData>('myDataKey');
 */
export const loadFromLocalStorage = <T>(key: string): T => {
  const localValue = localStorage.getItem(key);
  if (localValue === null) {
    return {} as T;
  }

  return JSON.parse(localValue) as T;
};
