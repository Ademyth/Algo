let word_count = 0;
let vowel_count = 0;
let char_count = 0;
const sentence = "This is a sample sentence.";
for (const c of sentence) {
  if (c === ' ') {
    word_count++;
  } else if (['a', 'e', 'i', 'o', 'u'].includes(c)) {
    vowel_count++;
  } else if (c === '.') {
    break;
  }
  char_count++;
}
console.log(`Number of words: ${word_count}`);
console.log(`Number of vowels: ${vowel_count}`);
console.log(`Number of characters: ${char_count}`);
