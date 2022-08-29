// -----> load comment data
const loadComment = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const data = await res.json()
            .then(data => showAllData(data))
    } catch (err) {
        console.log(err)
    }

}

loadComment()
const commentsArea = document.querySelector('.comments_area');

// ----->comments data show
const showAllData = (data) => {
    const comments = data.slice(0, 20);

    comments.forEach(comment => {

        const commentWrapper = document.createElement('div');
        commentWrapper.classList.add('comment_wrapper');
        commentWrapper.innerHTML = `
        <div class="comment_box bg-blue-400 p-8 rounded">
                        <p><strong>Post's Comment :</strong>"${comment?.body.slice(0, 100)}..."</p>
                        <div class="info_area mt-2">
                            <h2><strong>Name :</strong> <span class="ml-2">${comment?.name.slice(0, 35)}</span></h2>
                            <h2><strong>email :</strong> <span class="ml-2">${comment?.email}</span></h2>
                            <button
                                class="p-2 w-full bg-blue-300 mt-4 font-semibold tracking-wide transition duration-300 ease-in-out rounded hover:bg-blue-500 hover:text-white"
                                onclick={relevantPostLoad(${comment.postId})}
                                >
                                Show Post
                                </button>
                        </div>
                    </div>
        `;

        commentsArea.appendChild(commentWrapper)

    })

}


// -----> relevant comments show
const relevantPostLoad = async (relevantCommentId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${relevantCommentId}`)
    const data = await res.json()
        .then(data => relevantPostDisplay(data))

}


// -----> relevant Comments display
const relevantPostDisplay = (relevantDta) => {
    document.getElementById('title').innerText = "This is Real Post";
    commentsArea.innerHTML = '';
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment_wrapper');
    commentWrapper.innerHTML = `
    <div class="comment_box bg-cyan-300 p-8 rounded">
                    <div class="info_area mt-2">
                        <h2 class='mb-2 text-lg font-semibold'>${relevantDta?.title}</h2>
                        <p>"${relevantDta?.body.slice(0, 100)}..."</p>
                    </div>
                </div>
    `;
    commentsArea.appendChild(commentWrapper)
}

