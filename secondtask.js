let sum = 0;
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
for (const element of set1) {
  if (!set2.includes(element)) {
    sum += element;
  }
}
for (const element of set2) {
  if (!set1.includes(element)) {
    sum += element;
  }
}
console.log(`Sum of distinct elements: ${sum}`);
