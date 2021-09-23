export function lastFromArray<T>(input: T[], last: number): T[] {
  const result: T[] = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (element && input.length - i <= last) {
      result.push(element);
    }
  }

  return result;
}
