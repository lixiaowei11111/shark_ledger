export function enumToArray<T extends Record<string, string>>(enumObj: T): string[] {
  const values: string[] = []
  for (const key in enumObj) {
    if (Object.prototype.hasOwnProperty.call(enumObj, key)) {
      values.push(enumObj[key])
    }
  }
  return values
}
