//question 1
// function sum()
// {
//     let a = 8;
//     const b=2;
//     var c=a+b;
// }
// console.log(a,b,c)
// sum()
// console.log(a,b,c)

//question 2
// let arr=[1,2,3,4,5]
// console.log(arr[2], arr.length);
// arr.length=0;
// console.log(arr[2], arr.length);

//question 3
// for (var i = 0; i < 3; i++) 
// {
//   setTimeout(function() { 
//     console.log(i); 
// }, 1000 + i);
// }

//question 4
// for(let i = 0; i <5; i++)
// {
// 	setTimeout(()=>{
// 		console.log(i);
//     },0)
// }

//question 5
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

//question 6
// console.log(1+false);
// console.log(1+true); 
// console.log(1-false); 
// console.log(1+'2'-1); 

//question 7
// (function fnA(a) {
//     return (function fnB(b) {
//       console.log(a); // What is logged?
//     })(1);
//   })(0);