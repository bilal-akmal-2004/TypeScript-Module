// // 1. conver the 3 function into typescript 
// // js funcitons 
// function add(a, b) {
//   return a + b;
// }
// function greet(name) {
//   return "Hello " + name;
// }
// function getFirst(arr) {
//   return arr[0];
// }
// // typescript functions 
// function add(a: number, b: number): number{
//     return a+b;
// }
// function greet(name: string) {
//   return "Hello " + name;
// }
// function getFirst(arr: number[]) {
//   return arr[0];
// }
// // 2.Crreate interface User, Product, Order 
// interface User{
//     id: number,
//     name: string
// }
// // usauge
// const user: User = {
//     id: 23,
//     name: "blala"
// }
// //product
// interface Product{
//     pid: number,
//     name: string
// }
// //usauge
// const product01: Product = {
//     pid: 1,
//     name: "Books"
// }
// // Order 
// interface Order{
//     oid: number,
//     items: string[]
// }
// //usauge
// const orderOne: Order = {
//       oid:1,
//       items: ["iceCream", "bread"]
// }
// 3.Build typsafe utility lib. 
function getFirstEle(array) {
    return array[2];
}
var numArray = [1, 2, 3, 4];
var someNum = getFirstEle(numArray);
console.log(someNum);
