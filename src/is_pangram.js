const alphabets = 'abcdefghijklkmnopqrstuvwxyz'.split('');
const checker = {};

const isPangram = function(text) {
  alphabets.forEach(alphabet => {
    checker[alphabet] = 0;
  });

  text.split('').forEach(char => {
    checker[char] = 1;
  });

  for (const alphabet in checker) {
    if (checker[alphabet] === 0){
      return false;
    }
  }
  return true;
};


module.exports = isPangram;
