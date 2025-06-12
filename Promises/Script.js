// const myPromises = new Promise((resolve,reject)=>{
// const myNumber = Math.random()
// console.log(myNumber);

//     if(myNumber>0.5){
//         resolve('More than 0.5')
//     }
//     else{
//         reject('less than 0.5')
//     }
    // setTimeout(() => {
    //     // resolve('Full filled in 2 seconds')
    //     reject('rejected in 2 second')
    // }, 2000);
// })
// console.log(myPromises)

// myPromises.then((res)=>{
//     // console.log(res);
//     document.getElementById('result').textContent = res
    
// }).catch((err)=>{
//     // console.log(err);
//     document.getElementById('result').textContent = err
    
// }).finally(()=>{
//     document.getElementById('final result').textContent = 'all done'
// })

function myFunc(){
    
return new Promise((resolve,reject)=>{
const myNumber = Math.random()
console.log(myNumber);

    if(myNumber>0.5){
        resolve('More than 0.5')
    }
    else{
        reject('less than 0.5')
    }
    // setTimeout(() => {
    //     // resolve('Full filled in 2 seconds')
    //     reject('rejected in 2 second')
    // }, 2000);
})
}

myFunc().then((res)=>{
    // console.log(res);
    document.getElementById('result').textContent = res
    
}).catch((err)=>{
    // console.log(err);
    document.getElementById('result').textContent = err
    
}).finally(()=>{
    document.getElementById('final result').textContent = 'all done'
})
