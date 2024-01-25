// Creating a const that will call the html document div through query selector
const postListEL = document.querySelector('.post-list')
 // Get the item id from the local storage 
 const id = localStorage.getItem("id");

// Creating a function to search for different id through the search bar
async function onSearchChange(event){
    const id = event.target.value;
    renderPosts(id)


}

async function renderPosts(id){
    // Create a const posts that will call the api from the backend 
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // Create another const that calls the backend data and converts it into 
    // frontend readable code. 
    const postData = await posts.json();
    // Using Array Map to add the backend data into Html 
    // Calling the function that has the div content (posthtml)
   postListEL.innerHTML = postData.map ( post => postHTML(post)).join('');
    
}

// Creating a function that will store the div in the Html file and can collab with the api
function postHTML(post){
    return ` <div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

renderPosts(id);
