/**
 * @description Deduplicate an array of objects based on specified properties (single or multiple).
 * @param {Array<T>} arr - Array of objects.
 * @param {string | string[]} keys - Properties to deduplicate by (single or multiple).
 * @returns {Array<T>} Deduplicated array.
 */
function uniqueObjArr<T>(arr: T[], keys: string | string[]): T[] {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  if (!keys || (typeof keys !== 'string' && !Array.isArray(keys))) return arr;

  const seen = new Set<string>();

  return arr.filter(item => {
    // Generate a unique identifier
    const identifier = Array.isArray(keys)
      ? keys.map(key => getValueByPath(item, key)).join('|') // Multiple properties
      : getValueByPath(item, keys); // Single property

    if (seen.has(identifier)) {
      return false;
    } else {
      seen.add(identifier);
      return true;
    }
  });
}

/**
 * @description Retrieve the value of an object property by path (supports deep properties).
 * @param {T} obj - Object.
 * @param {string} path - Property path (e.g., "a.b.c").
 * @returns {any} Property value.
 */
function getValueByPath<T>(obj: T, path: string): any {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj as any);
}

// Example usage:
interface Data {
  id: number;
  name: string;
  info: {
    age: number;
  };
}

const data: Data[] = [
  { id: 1, name: 'Alice', info: { age: 25 } },
  { id: 2, name: 'Bob', info: { age: 30 } },
  { id: 1, name: 'Alice', info: { age: 25 } },
  { id: 3, name: 'Charlie', info: { age: 35 } },
  { id: 2, name: 'Bob', info: { age: 36 } },
];

console.log(uniqueObjArr(data, 'id')); // Single property deduplication
console.log(uniqueObjArr(data, ['id', 'name'])); // Multiple properties deduplication
console.log(uniqueObjArr(data, ['info.age'])); // Deep property deduplication
