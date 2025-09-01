// console.log("Start");

// setTimeout(() => {
//   console.log("Step 1: Login User");

//   setTimeout(() => {
//     console.log("Step 2: Fetch User Profile");

//     setTimeout(() => {
//       console.log("Step 3: Get User Posts");

//       setTimeout(() => {
//         console.log("Step 4: Show First Post");
//       }, 1000);

//     }, 1000);

//   }, 1000);

// }, 1000);
console.log("Start");
setTimeout(()=>{
    console.log("Step 1: Login User");

    setTimeout(()=>{
        console.log("Step 2: Fetch User Profile");

        setTimeout(()=>{
            console.log("Step 3:Get User Post");
        },1000)

    },1000)
},1000)