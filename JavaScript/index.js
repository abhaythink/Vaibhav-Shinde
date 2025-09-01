// function testVar(){
//     if(true){
//         var x=10;
//     }
//     console.log(x);
// }
// testVar();

// function testLet(){
//     if(true){
//         let y=20;
//     }
//     console.log(y);
// }
// testLet();

// console.log(a);
// var a=5;

// console.log(b);
// let b=10;

// console.log(c);
// const c = 15;

// var x=6;
// var x=5;
// console.log(x);
// let y;
// let y=3;
// console.log(y);
// const z=5;
// z=7;
// console.log(z);

// let globleVar="i am global";
// function demo(){
//     console.log(globleVar);
//     globleVar="i am new global";
// }
// demo();
// console.log(globleVar);

// function test(){
//     if(true){
//         var x=10;
//         let y=20;
//         console.log(y);
//     }

//     console.log(x);

// }
// test();
// console.log(x);

// function outer(){
//     let count=0;
//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }
// console.log(inner());
// let couner=outer();
// console.log(couner());

// var x=5;
// function foo(){
//     var x=10;
//     console.log(x);
// }
// foo();
// console.log(x);

// if (true) {
//   let a = 1;
//   const b = 2;
//   var c = 3;
// }

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// let output = "";
// for (let i = 1; i <= 5; i++) {        // 5 rows
//     for (let j = 1; j <= 4; j++) {    // 4 stars per row
//         output += "* ";
//     }
//     output += "\n";                    // add newline after each row
// }

// console.log(output);

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324

// console.log(NaN/2); // NaN
// console.log(NaN == NaN); // false

// let str=`It\'s a sunney day`;
// console.log(str);
// let string="hi , good morning";
// console.log(string.split(' '));

// let arr=[1,2,3,4];
// console.log(typeof arr);

// let a = (1, 2, 3);
// console.log(a); // 3

// let a=0;
// console.log(a++); //1
// console.log(--a,a++,a+(a++));
//1

//a=2
//b=3
//5

// console.log(30 >> 3);

// let p = 10;
// console.log(p--); // ?
// console.log(p);   // ?

// let b = 5;
// console.log(++b); // ?
// console.log(b);   // ?

// let x = 3;
// let y = x++ + 2;
// console.log(x); // ?
// console.log(y); // ?

// let m = 3;
// let n = ++m + 2;
// console.log(m); // ?
// console.log(n); // ?

// let p = 10;
// console.log(p--); // ?
// console.log(p);   // ?

// let a = 5;
// let b = a++ + ++a + a--;
// console.log(a); // ?
// console.log(b); // ?

//5 + 7 + 7

// let str="123";
// console.log(parseInt(str));

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// // Output: Hello, Alice!
// greet("Alice");

// const greet = function(name) {
//     console.log("Hello, " + name + "!");
// };

// // Output: Hello, Bob!
// greet("Bob");

// function greet(name = "Guest") {
//     console.log("Hello, " + name);
// }

// greet(); // Hello, Guest

// function sum(...num){
//     // console.log(num);
//     return num.reduce((acc,curr)=>{
//             return  acc+=curr;
//     },0)
// }
// console.log(sum(1,2,3,4,5));

// let arr=[1,2,3];
// let newArr=[...arr,4,5];
// console.log(newArr);

// let num=123.456;
// num.toString()
// num.toFixed(2)
// Number.isInteger(10);
// Number.parseInt("123px");   // 123
// Number.parseFloat("3.14");  // 3.14
// console.log(Number.parseInt("123px"))

// Using 'n' at the end
// let big1 = 123456789012345678901234567890n;

// // Using BigInt() constructor
// let big2 = BigInt("123456789012345678901234567890");

// console.log(big1);
// console.log(big2);

// let x = 10n;
// let y = 5;

// console.log(x + BigInt(y));
// console.log(parseInt(x) + y);

// console.log(10n > 5n);   // true
// console.log(10n == 10);  // true (loose equality does type conversion)
// console.log(10n === 10); // false (different types)

// console.log(Number.parseFloat("3.r4"));
// let num=255;
// console.log(num.toString());
// console.log(num.toString(2));

// let flag=Boolean();
// console.log(flag);

// let str="Hello";
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.concat("abc"));
// console.log(str.indexOf('l'));
// console.log(str.slice(0,3));
// console.log(str.substring(0,3));

// console.log(str.split());
// console.log(str.toLowerCase());
// console.log(str.trim());

// const fun=function solve(str){
//     return str.split('').reverse().join('');
// }
// let string="abcd";
// console.log(fun(string));

//  let ans="";
// const fun=function solve(str){

//     for(let i=str.length-1;i >= 0;i--){
//         ans+=str.charAt(i);
//     }
//     return ans;

// }
// let string="abcd";
// console.log(fun(string));

// const set=new Set();

// let arr=[1,2,2,2,3,4];
// for(let i=0;i<arr.length;i++){
//     set.add(arr[i]);
// }
// console.log(set);

// let arr=[1,[2,[3]]];
// console.log(arr.flat(Infinity));

// let arr=[12,3,5,3,1,6,3,3,5,9,0,2,1,4,8];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i;j++){
//         if(arr[j] > arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);

// let str1="aabbca";
// let map=new Map();
// for(let i=0;i<str1.length;i++){
//     if(map.has(str1.charAt(i))){
//         map.set(str1.charAt(i),map.get(str1.charAt(i))+1);
//     }
//     else{
//         map.set(str1.charAt(i),1);
//     }
// }
// for(let [key,val] of map){
//     if(val==1){
//     console.log(key);
//     break;
//     }
// }
// console.log(map);

// let str="aabbca";

// for(let i=0;i<str.length;i++){

// }

// let n=6;
// let arr=[0,1];
// for(let i=2;i<=n;i++){
//     arr[i]=arr[i-1]+arr[i-2];

// }
// // console.log(arr[n-1]);

// for(let i=0;i<=n;i++){
//    console.log(arr[i]);
// }

// let str="abacadcdeee";

// let obj={};
// for(let i=0;i<str.length;i++){
//     obj[str.charAt(i)]=(obj[str.charAt(i)]||0)+1;
// }

// console.log(obj);

// let arr=[1,"abc",true,"fd",2,5];
// let ans=arr.filter((ele)=>typeof(ele)=='number');
// console.log(ans);

// let arr=[1,2,3,4];

// arr.map((ele)=>console.log(ele));

// window.addEventListener("resize", () => {
//   console.log("Screen resized! Current size:", window.innerWidth, "x", window.innerHeight);
// });

// window.addEventListener("resize",()=>{
//     console.log(window.innerWidth ," * ",window.innerHeight);
// })

// let arr=[12,23,43,"Hello",45];
// for(let [valele,val] in arr){
//     console.log(val);
// }
// console.log(arr);

// for(let i=0;i<=4;i++){
//     loop:
//     for(let j=0;j<=5;j++){
//         for(let k=0;k<=4;k++){
//             if(k==2) break loop;
//             console.log(k);
//         }
//     }
// }
// let a=70,b=30,c=210;
// let ans=a > b ?((a >c)?a:c):((b >c)?b:c);
// console.log(ans);

// console.log(promise.then);

// const promise=new Promise((resolved)=>{
//         console.log("hii");
//         resolved("I am Vaibhav");

// })

// promise.then(val=>console.log(val));
// promise.finally(
//     console.log("Hello")
// );
// const promise=new Promise();
// console.log(promise);
// const p1=Promise.resolve(1);
// console.log(p1);

// const p1=Promise.resolve(1);
// const p2=Promise.reject("Error in promise 2");
// const p3=Promise.reject("Error in promise 3");

// Promise.all([p1,p2,p3]).then(result=>console.log(result))
//                 .catch(error=>console.log(error))

// function addition(a,b,add){
//     return add(a,b);
// }
// function add(a,b){
//     console.log(a+b);
// }
// addition(2,3,add);

// const promise=new Promise((resolved,reject)=>{
//     resolved("promise is resolved");
//     reject("promise is rejected");

// })
// promise.then(resolve=>console.log(resolve))
//             .catch(error=>console.log(error))
//             .finally(console.log("1st final"))

// async function myFun(){
//     return "Hello";
// }
// console.log(myFun());

// async function fetchData() {
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();
// console.log("Hello");


// async function fun(){
//   const response=await fetch("https://dummyjson.com/products");
//   const data=await response.json();
//   console.log(data);
// }
// fun();

// const p2=null
// const p1=Promise.resolve(1);
// const p2=new Promise((resolved,reject)=>{
// setTimeout(()=>{
//   resolved("resolved");
// },5000)
// })


// const p3=Promise.resolve(3);

// Promise.allSettled([p1,p2,p3]).then(result=>console.log(result))
//                 .catch(error=>console.log(error))

// const person = {
//   name: "Vaibhav",
//   age: 22,
//   isStudent: true,
//   greet: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// console.log(person.name);    // Vaibhav
// console.log(person["age"]);  // 22
// person.greet();              // Hello, my name is Vaibhav


// const person={
//   firstName:"vaibhav",
//   lastName:"Shinde",
//   age:23,
//   inPune:true,
//   collegeObj:{
//     name:"dkte",
//     loc:"Nashik"
//   }

// }
// console.log(person);

// person.fullName="Vaibhav Shinde";
// person.name="v";
// delete person.age;
// console.log(person);

// async function fun(){
//   const response=await fetch("https://dummyjson.com/products");
//   const data=await response.json();
//   console.log(data);
// }
// fun();


// function first() {
//   console.log("First function");
//   second();
// }

// function second() {
//   console.log("Second function");
//   third();
// }

// function third() {
//   console.log("Third function");
// }

// first();


// let arr=[1,2,3,4];
// arr.map((val)=>{
// console.log(val);
// })

// const map=new Map();
// map.set("name","vaibhav");
// map.set("age",22);
// console.log(map);


// // console.log(map.get("age"));


// for(let [val] of map){
//   console.log(val);
// }

// sayHi(); // Error: sayHi is not a function

// var sayHi = function() {
//   console.log("Hi!");
// };


















