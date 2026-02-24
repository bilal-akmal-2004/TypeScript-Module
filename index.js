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
// // 3.Build typsafe utility lib. 
// function getFirstElement<ElementType>(array: ElementType[]){
//     return array[0]
// }
// const numArray = [1,2,3,4]
// let firstNum = getFirstElement<number>(numArray)
// const stringArray = ["sdf","sdf"]
// let firstString = getFirstElement<string>(stringArray)
// // 4. define type for the api response 
// type ApiResponse<Data> = {
//     data: Data,
//     isError: boolean,
// }
// type UserResponse = ApiResponse<{name: string, age: number}>
// const  userResponse: UserResponse = {
//        data: {
//         name: 'Bilal',
//         age: 23
//        },
//        isError: false,
//     }
// type ProductResponse = ApiResponse<{title: string}>
// const productResponse: ProductResponse = {
//     data: {
//     title: "icreaceram"
//     },
//     isError: false
// }
