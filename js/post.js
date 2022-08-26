/* 
    Fetch post and show on your website.
*/


function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => showPost(posts));
}

function showPost(posts) {
    const userPosts = document.getElementById('user-posts');
    for (const post of posts) {
        const userPost = document.createElement('div');
        console.log(post);
        userPost.innerHTML = `
            <div>
                <h4>User: ${post.userId}</h4>
                <h5>Title: ${post.title}</h5>
                <p>Post Description: ${post.body}</p>
            </div> 
        `;
        userPosts.appendChild(userPost);
        userPost.classList.add('user-post');
    }
}

loadPosts();