let container = document.querySelector(".container")


let users = fetch("https://jsonplaceholder.typicode.com/users")
users.then((Response) => {
    if (Response) {
        return Response.json();
    }
}).then(data => {
    //posts(data[0].id)
    data.forEach(element => {
        let button = document.createElement("button");
        button.classList.add("button");
        button.textContent = element.name;
        container.appendChild(button);

        button.addEventListener("click", () => {
            const postsDivs = document.querySelectorAll('.postsDiv');
            postsDivs.forEach(div => {
                div.parentNode.removeChild(div);
            });
            posts(element.id)
        })
    });
})


async function posts(id) {
    try {
        let posts_div = document.createElement("div");
        posts_div.classList.add("postsDiv");
        let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        let p = await posts.json()

        p.forEach(element => {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = element.title;
            paragraph.classList.add("paragraph_style");
            posts_div.appendChild(paragraph)

        });
        document.body.appendChild(posts_div);
    }
    catch (e) {
        console.log(e);
    }
}