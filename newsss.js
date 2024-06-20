// const API_KEY = "af400dd0c7aa47b9aa12311ba329b525";
// const url = "https://newsapi.org/v2/everything?q="; // Include '=' here for the query parameter

// window.addEventListener("load", () => fetchNews("india"));

// async function fetchNews(query) {
//   const res = await fetch(`${url}${query}&apiKey=${API_KEY}`); // Fix template literals
//   const data = await res.json();
//   console.log(data);
//   bindData(data.articles)
// }
// function bindData(articles)
// {
//     const cardsCotainer=document.getElementById('card-container');
//     const cardTemplate=document.getElementById('news_template_card');
//     cardsCotainer.innerHTML="";
//     articles.forEach((article) => {
//         if(!article.urlToimage) return;
//         const cardClone=cardTemplate.content.cloneNode(true);
//         filterDataIncard(cardClone,article);
//         cardsCotainer.appendChild(cardClone);
          
//     });
// }
//     function filterDataIncard(cardClone,article){
//       const newsimg=cardClone.querySelector('#news_img');
//       const newstitle=cardClone.querySelector('#news_title');
//       const newssource=cardClone.querySelector('#news_source');
//       const newsdesc=cardClone.querySelector('#news_desc');
      
//       newsimg.src=article.urlToImage;
//       newstitle.innerHTML=article.title;
//       newsdesc.innerHTML=article.description;

//       const date=new Date(article.publishedAt).toLocaleString("en-US",{
//         timeZone:"Asia/Jakarta"
//       });
//       newssource.innerHTML='${article.source.name} . ${date}';
//       cardClone.firstElementChild.addEventlistener('click',()=>{
//         window.open(article.url,"_blank");
//       })
//     }
// // console.log("hello we are inthe news");
// function onNaveItemClick(id){
//   fetchNews(id);

// }
const API_KEY = "af400dd0c7aa47b9aa12311ba329b525";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();//jab home par jana hai to function ko reload kr dete hai yah logo pr click hone se hoga
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;//initially tab selected nhi hai
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");//current selected nav null nhi hai(?) to active ko remove kr dijiye
    curSelectedNav = navItem;//current item ab nav item ban jayega
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");//jab search button click ho to jo selected item hai wo remove ho jay
    curSelectedNav = null;//aur current status fir se initial state me chala jay
});