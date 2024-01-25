// Creating a const that will call the html document div through query selector
const postListEL = document.querySelector('.post-list')

// Creating a function to search for different id through the search bar
async function onSearchChange(event){
    const id = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postData = await posts.json();

    postListEL.innerHTML = postData.map ( post => `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`).join('');


}

async function main(){
    // Get the item id from the local storage 
    const id = localStorage.getItem("id");
    // Create a const posts that will call the api from the backend 
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // Create another const that calls the backend data and converts it into 
    // frontend reable code. 
    const postData = await posts.json();
    console.log(postData)

    // Using Array Map to add the backend data into Html 
   postListEL.innerHTML = postData.map ( post => `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`).join('');
}

main();
