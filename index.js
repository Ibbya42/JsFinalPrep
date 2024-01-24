// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// Async function to call the user data from the api 
// Create a function called main 
async function main(){
    // Create a const for users will collect the information from the back end. 
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    // Create a const that will convert the backend data to frontend data. 
    const usersData = await users.json();
    // Creating a const that will call the html document through query selector
    const userListEl = document.querySelector('.user-list');
    // Set the innerHtml to the element data which we mapped to recieved all the data
    // from the api in the styled format 
    userListEl.innerHTML = usersData.map((user) => `<div class="user-card">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="${user.website}" target="_blank">
        ${user.website}</a></p>
    </div>
    </div>`).join("");
   
}

main();