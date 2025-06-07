//Event handling
//overriding
const btn = document.getElementById('btn');

btn.onclick = function(){
    console.log("first Clicked");
    
}

btn.onclick = function(){
    console.log('2nd clicked');
    
}

btn.onclick = function(e){
    console.log(e);
    
}

//Event Listner

btn.addEventListener('click',function(){
    // console.log('Clicked by Listner');
    
})
btn.addEventListener('click',function(){
    // console.log('clcked by 2nd listner ');
    
})

window.addEventListener('offline',function(){
    console.log("offline");
    
})

window.addEventListener('online',function(){
    console.log('online');
    
})