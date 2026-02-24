// // 1. Create generic Stack and Queue

// class Stack<ItemType>{
//     private items: ItemType[] = []

//     push(item: ItemType): void{
//         this.items.push(item)
//     }

//     pop(): ItemType | undefined {
//            return this.items.pop()
//     }

//     see(): ItemType[] | undefined {
//         return this.items
//     }
// }

// // usauge 
// const numbersArray = new Stack<number> 
// numbersArray.push(1)
// numbersArray.push(2)
// numbersArray.push(4)
// console.log(numbersArray.see())
// numbersArray.pop()
// console.log(numbersArray.see())

// // For Queue'

// class Queue<T>{
//     private items: T[] = []

//     enQueue(item: T): void {
//       this.items.push(item)
    
//     }

//     deQueue(): T | undefined{
//         return this.items.shift()
//     }

//     see(): T[] | undefined{
//         return this.items
//     }
// }

// const freuits = new Queue()
// freuits.enQueue("apples")
// freuits.enQueue("Banana")
// console.log(freuits.see())
// freuits.deQueue()
// console.log(freuits.see())

// //2. Implement type guards

// function printId(id: string | number){
//     if(typeof id==="string"){
//        console.log("This is string")
//     }else{
//         console.log("number her e")
//     }
// }
// printId(1)
// printId("hi")

// // 3. Build type-safe API client with generics

// class ApiClient {
//     async get<T>(url: string): Promise<T>{
//         const response = await fetch(url)
//         return await response.json() as T
//     }
// }

// const api = new ApiClient()

// interface User{
//     name: string,
//     id: number,
//     username: string,
//     email: string
// }

// async function main() {
//     const users = await api.get<User[]>("https://jsonplaceholder.typicode.com/users")
//     console.log(users[0]?.name)
// }

// main()

// // 5. Create custom utility types

// interface User{
//     name: string,
//     id: number   
// }

// type myPartial<T> = {
//     [K in keyof T]?: T[K]
// }

// const userOne: myPartial<User> = {
//     name: "Ali"
// }

