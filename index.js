// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// Async function to call the user data from the api 
// Create a function called main 
async function main(){
    // Create a const for users will collect the information from the back end. 
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    // Create a const that will convert the backend data to frontend data. 
    const usersData = await users.json();
    console.log(usersData);
}

main();