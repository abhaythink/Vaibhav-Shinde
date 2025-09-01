let now=new Date();
console.log(now);

let date=new Date();

// let d1 = new Date(2025, 8, 1, 14, 30, 0);
// console.log(d1);


// let d3 = new Date(0); // Epoch
// console.log(d3);


console.log(date.getFullYear());   // Year (e.g., 2025)
console.log(date.getMonth());      // Month (0-11, 0=Jan)
console.log(date.getDate());       // Day of month (1-31)
console.log(date.getDay());        // Day of week (0=Sun, 6=Sat)
console.log(date.getHours());      // Hours (0-23)
console.log(date.getMinutes());    // Minutes
console.log(date.getSeconds());    // Seconds
console.log(date.getMilliseconds());// Milliseconds


date.setFullYear(2030);
date.setMonth(0);       // January
date.setDate(15);       // 15th day
date.setHours(10, 30);  // 10:30
console.log(date);
