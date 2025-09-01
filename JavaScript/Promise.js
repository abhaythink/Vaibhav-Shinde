const promise=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        resolved("hey i am promise");
        reject("i am rejected promise");
    },1000);
})

promise.then(val=>console.log(val));
