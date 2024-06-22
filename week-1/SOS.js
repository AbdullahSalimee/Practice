let signal = 'SOSTOSDOSSOS';

function signalCORRECTER(sig) {
let sign = 0;   
      
  sig.match(/.{1,3}/g).forEach(function(v, i, arr) {
    
    if ( v !== 'SOS' ) {
      sign++
      
    }
    
    

})
  console.log(sign);
}

signalCORRECTER(signal);

