export function countWordFreq(text) {
  const map = {};
  let buffer = [];

  for(let i = 0; i < text.length; i++) {
    if(text[i] === ' ' || text[i] === '\n') {
      const word = buffer.join('').toLowerCase();
      if(word.length > 0) {
        map[word] = (map[word] || 0) + 1;
      }
      buffer = [];
    } else {
      buffer.push(text[i]);
    }
  }

  return map;
}