
// new Promise(function(resolve, regect){
//     setTimeout(function(){
//         console.log('Async completed...');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async  2 resolved");
// })


// const promiseTwo = new Promise(function(resolve, reject){
// setTimeout(function(){
//     let error= false;
//     if(!error){
//         resolve({username:'Prakash', Password:'Abc'})
//     }else 
//     reject('Error detected...')
// })
// ,1000})

// promiseTwo
// .then(function(user){
//     console.log(user);
// return {u:user.username, p:user.Password}
// }).then(function({u, p}){
//     console.log(typeof u);
//     console.log(typeof p);
//     console.log( u);
//     console.log(p);
// })
// .catch(function(){
//     console.log('Some error is detected while proceeding');
// })
// .finally(function(){
//     console.log("Either it will be subjected or it will be rejected!!!");
// })


// Async and await concept

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error= true;
//         if(!error){
//             resolve({username:'Java', Password:'Abc123'})
//         }else 
//         reject('Error detected for programming language...')
//     }
//     ,1000)
// })

 


// async function consumePromiseThree(){
//     try {
//         const response = await promiseThree
//     console.log(response);
//     } catch (error) {
//        console.log(error); 
//     }
// }
// consumePromiseThree()

// async function getAllUsers()
// {
    
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
return response.json()
})
.then((data)=> 
{
console.log(data);
}
)
.catch((error)=> console.log(error))