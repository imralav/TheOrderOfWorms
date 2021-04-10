const nextNumber = (from, to) => from + Math.random() * (to - from);
const nextInt = (from, to) => Math.round(nextNumber(from, to));
const nextInts = (from, to, amount) =>
  Array(amount)
    .fill(0)
    .map(() => nextInt(from, to));

export { nextNumber, nextInt, nextInts };
