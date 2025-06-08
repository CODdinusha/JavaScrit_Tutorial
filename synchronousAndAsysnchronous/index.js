console.log('test_1');
console.log('test_2');

setTimeout(() => {
    for(let i = 0; i < 5; i++ ){
        console.log(i);
    }
}, 100);

fetch('https://x.ai/grok').then(()=>{
    console.log(run);
    
})

