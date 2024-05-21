document.addEventListener("DOMContentLoaded", () => {
    let post = document.getElementById("post1");
    let postsBox = document.getElementById("allposts");

    let imgurls = [
        "https://www.thesun.co.uk/wp-content/uploads/2021/11/NINTCHDBPICT000676377647.jpg",
        "https://d.ibtimes.co.uk/en/full/1397636/cristiano-ronaldo.jpg",
        "https://i.pinimg.com/originals/8c/ce/98/8cce983e13190b3a550103a66c8b5bb7.jpg",
        "https://i.eurosport.com/equinoxe/2015/05/05/1478396.jpg"
    ];

    for (let i = 0; i < 100; i++) {
        let newpost = post.cloneNode(true);
        let imgpost = newpost.getElementsByClassName("postImg")[0];
        imgpost.setAttribute("src", imgurls[i % 4]);

        postsBox.appendChild(newpost);
    }
});
