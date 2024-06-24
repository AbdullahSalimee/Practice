function matrix(max){
    let dia1 = 0;
    let dia2 = 0;
    let n = max.length;
    
  
    for (let i = 0; i < n; i++) {
      dia1 += max[i][i];
    }
    
  
    for (let i = 0; i < n; i++) {
      dia2 += max[i][n - 1 - i];
    }
    
  return dia1 - dia2;
  }
  
  console.log(matrix([[3,4,6],[1,4,8],[9,2,7]]));
  