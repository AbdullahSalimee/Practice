let original = [1,2,3,4,5,6,7,8,9];
let copy = [1,2,3];

function tester(original, copy) {
  let notsame = 0;
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== copy[i]) {
      notsame++;
    }
  }
  console.log(notsame);
}

tester(original, copy);
