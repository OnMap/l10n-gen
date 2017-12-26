const oldLogErr = console.error;

const ignoreErrors = [
  'Unhandled error'
];

console.error = (err) => {
  const lines = err.split('at ');
  const skip = ignoreErrors.reduce((res, err) => res || lines[0].indexOf(err) !== -1, false)
  if (!skip) {
    oldLogErr(err);
  }
}
