<!-- <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <link rel="stylesheet" href="newss.css">
</head>
<body>
<nav>
    <div class="main_nave container flex">
   <a href="" class="logo"> <img src="https://www.hindustantimes.com/static-content/1y/ht/ht-logo2.webp" alt="logo"></a>
<div class="nav_links">
<ul class="flex">
<a href="#" ><li id="Home" onclick="onNaveItemClick('Home')">Home</li></a>
<a href="#" ><li id="latestNews" onclick="onNaveItemClick('latestNews')">Latest News</li></a>
<a href="#"><li>HT Premium</li></a>
<a href="#"><li>Cricket</li></a>
<a href="#"><li>Education</li></a>
<a href="#"><li>India</li></a>
<a href="#"><li>World</li></a>
<a href="#"><li>Cities</li></a>
<a href="#"><li>Entertainment</li></a>
<a href="#"><li>Lifestyle</li></a>
<a href="#"><li>Astrology</li></a>
<a href="#"><li>Real Estate</li></a>
<a href="#"><li>Shop Now</li></a>
</ul>
</div>
<div class="search_bar flex">
<input type="text" placeholder="search" size="10px">
<button type="submit">Go</button>
</div>
</div>
</nav>
<main>
    <div class="card-container flex container" id="card-container">
        
    </div>
</main>
    <template id="news_template_card">
        <div class="card">
        <div class="card-header">
            <img src="https://st.depositphotos.com/68330470/57442/i/450/depositphotos_574424718-stock-photo-car-driving-road-side-view.jpg" alt="" id="" height="250px" width="400px" class="news_img">
        </div>
        <div class="card-content">
            <h1 id="news_title">
            this is title
            </h1>
            <h2  class="news_source" id="news_source"> end date</h2>
            <p class="news_desc" id="news_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo reiciendis explicabo veniam consectetur natus, eaque numquam ab accusantium similique dolor!</p>
        </div>
    </div>
    </div>
</template>
<script src="newsss.js">   
</script>
</body>
</html> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="browser_icon.jpg" type="image/jpeg">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News site</title>
    <link rel="stylesheet" href="newss.css">

</head>
<body>

    <nav>
        <div class="main-nav container flex">
            <a href="#" onclick="reload()" class="company-logo">
                <img src="newslogo.jpg" alt="company logo">
            </a>
            <div class="nav-links">
                <ul class="flex">
                    <li class="hover-link nav-item" id="ipl" onclick="onNavItemClick('ipl')">IPL</li>
                    <li class="hover-link nav-item" id="finance" onclick="onNavItemClick('finance')">Finance</li>
                    <li class="hover-link nav-item" id="politics" onclick="onNavItemClick('politics')">Politics</li>
                    <li class="hover-link nav-item" id="politics" onclick="onNavItemClick('Love')">Love</li>
                    <li class="hover-link nav-item" id="politics" onclick="onNavItemClick('Entertainment')">Entertainment</li>
                </ul>
            </div>
            <div class="search-bar flex">
                <input id="search-text" type="text" class="news-input" placeholder="e.g. Science">
                <button id="search-button" class="search-button">Search</button>
            </div>
        </div>
    </nav>


    <main>
        <div class="cards-container container flex" id="cards-container">

        </div>
    </main>

    <template id="template-news-card">
        <div class="card">
            <div class="card-header">
                <img src="https://via.placeholder.com/400x200" alt="news-image" id="news-img">
            </div>
            <div class="card-content">
                <h3 id="news-title">This is the Title</h3>
                <h6 class="news-source" id="news-source">End Gadget 26/08/2023</h6>
                <p class="news-desc" id="news-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe quis voluptatum quisquam vitae doloremque facilis molestias quae ratione cumque!</p>
            </div>
        </div>
    </template>

    <script src="newsss.js"></script>
</body>
</html>
