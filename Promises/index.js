function delay(ms){
   return new Promise((resolve)=>{
    setTimeout(() => {
        resolve()
    }, ms);
   })
}

function myFunc(){
    delay(2000).then(()=>{
        console.log("Approach the counter");
    return delay(1000);
   }).then(()=>{
    console.log("Ask for the menu");
    return delay(2000);
   }).then(()=>{
    console.log("Speify the order");
    return delay(100);
   }).then(()=>{
    console.log("Choose the size");
    return delay(2000);
   }).then(()=>{
    console.log("Secify any modifiacations");
    return delay(1000);
   }).then(()=>{
    console.log("Reviera");
    return delay(500)
   }).then(()=>{
    console.log("Finish");
   }).catch(()=>{
    console.log("ërror");
    
   }).finally(()=>{
    console.log("done");
    
   })
   
}
myFunc();