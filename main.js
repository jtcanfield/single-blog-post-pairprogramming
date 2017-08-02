let blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here
console.log(blogPost);
let htmlBody = document.querySelector(".container");
console.log(htmlBody);
blogPost.newsection = new Object();
blogPost.newsection.image = 5;
console.log(blogPost.newsection);





let holder = `
      <article>
        <h2>${blogPost.title}</h2>
        <div class="meta">
          <span class="date">Written on ${blogPost.meta.date}</span>
        </div>
        <div class="post">
          <img src="${blogPost.post.image}">
          <p>${blogPost.post.content}</p>
        </div>
        <div class="site">
          Part of this content was pulled from <a href=${blogPost.site.name}>${blogPost.site.url}</a>
        </div>
      </article>
`;
htmlBody.innerHTML = holder;
