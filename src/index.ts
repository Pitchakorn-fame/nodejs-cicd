export function max(number: number[]): number {
  if (!number.length) throw Error("numbers was empty");
  const maxNum = Math.max(...number);
  return maxNum;
}

export function min(number: number[]): number {
  if (!number.length) throw Error("numbers was empty");
  const minNum = Math.min(...number);
  return minNum;
}

export function avg(number: number[]): number {
  if (!number.length) throw Error("numbers was empty");
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  const avg = sum / number.length;
  return avg;
}
