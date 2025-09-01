function getData(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            reject("something went wrong");
        },2000)
    })
}

async function fun() {
    try {
        const responce=await getData();
        console.log(responce);
        
    } catch (error) {
        console.log(error);
    }
    
}
fun();