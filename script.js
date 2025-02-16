document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector(".articles-container");

    articles.forEach((article) => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p class="date">${article.date}</p>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
            <p><strong>Ages:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p><strong>Rating:</strong> ${article.stars}</p>
        `;

        articlesContainer.appendChild(articleElement);
    });
});
