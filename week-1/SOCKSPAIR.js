let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockspair(socks) {
      let socksobj = {};  
      let pair =0;
for (let i = 0; i < socks.length; i++){
    let item = socks[i];  
    socksobj[item] = (socksobj[item] || 0)+1;    
  
}

     for (let key in socksobj){
    if ( socksobj[key] %2 === 0) {
      
      pair += socksobj[key];
      
    }else{
      
      pair += socksobj[key] - 1;
    }

    }

 console.log(socksobj,pair/2);
  

}

sockspair(socks);
