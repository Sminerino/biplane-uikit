export default number => {
  const abs = Math.abs(number);
  switch(true) {
    case abs < 1000:
      return `${number}`;
    case abs < 1000000:
      return `${(number / 1000).toFixed(1)}k`;
    default:
      return `${(number / 1000000).toFixed(1)}mil`
  }
};