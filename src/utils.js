export function sort(array, type) {
  if (type === "price") {
    array.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  if (type === "score") {
    array.sort((a, b) => {
      if (a.score > b.score) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  if (type === "alphabet") {
    array.sort((a, b) => a.name.localeCompare(b.name));
  }
  return array;
}
