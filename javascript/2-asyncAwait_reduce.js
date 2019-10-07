async function promiseReduce(asyncFunctions, reduce, initialValue) {
  const it = asyncFunctions[Symbol.iterator]();
  let result = initialValue;
  let current = it.next();

  while (!current.done) {
    result = reduce(await current.value(), result)
    current = it.next();
  }

  return result;
};

const fn1 = () => Promise.resolve(1);
const fn2 = () => new Promise(resolve => {
  setTimeout(() => resolve(2), 1000);
});


promiseReduce([fn1, fn2], (memo, value) => memo * value, 2).then(console.log);
