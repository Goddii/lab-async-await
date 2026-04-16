// // Write your code here!

   

function displayPosts(posts) {
    const postContainer = document.getElementById('post-list')
    posts.forEach(post => {
        const postElement = document.createElement('li')

        const title = document.createElement('h1')
        title.textContent = post.title

        const body = document.createElement('p')
        body.textContent = post.body

        postElement.appendChild(title)
        postElement.appendChild(body)

        postContainer.appendChild(postElement)

 
    });
}

async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
        displayPosts(data)
    } catch(error) {
        console.error('Error fetching post:', error)
    }




}

createPost()