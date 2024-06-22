let original = [1,2,3,4,5,6,7,8,9,8];
let copy = [7,6,4,2,8,1,8];
function tester(original, copy) {
  let notsame = [];
  let originalobj = {};
  let copyobj = {};
 
  for (let i =0; i < original.length; i++){
  let item = original[i];
originalobj[item] = (originalobj[item] || 0)+1 
  }
 
  for (let i =0; i < copy.length; i++){
  let item = copy[i];
copyobj[item] = (copyobj[item] || 0)+1 
  }
  
  for (let key in originalobj){
    if (!copyobj[key] || copyobj[key] < originalobj[key]) {
      
      notsame.push(key)
      
    }
    }
  console.log(notsame);
}

tester(original, copy);