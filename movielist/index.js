let text = 'star wars';
getMovies(text);
let article = document.createElement("article");
let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
let img = document.createElement("img");

async function getMovies(text){
    let responsefromAPI = await fetch(location.protocol+`//www.omdbapi.com/?s=${text}&apikey=f84c9e9b`);
    let movies = await responsefromAPI.json();
    let movieList = movies.Search;
    
    
    movieList.forEach(movie => {    
        let movieId = document.querySelector("#movies");
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = movie.Title;
        let h4 = document.createElement("h4");
        h4.innerHTML = movie.Year;
        let img = document.createElement("img");
        img.setAttribute("src", movie.Poster);
        img.setAttribute("alt", movie.Title);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(img);
        movieId.appendChild(article);
    });
}

let detail = 'Star Wars: Episode I';
getMoviesDetails(detail);
async function getMoviesDetails(text){
    let responsefromAPI = await fetch(location.protocol+`//www.omdbapi.com/?s=${text}&apikey=f84c9e9b`);
    let movies = await responsefromAPI.json();
    let movieList = movies.Search[0];
 
        let movieId = document.querySelector("#movies2");
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = movieList.Title;
        let h4 = document.createElement("h4");
        h4.innerHTML = 'Release Date:2019-10-19&nbsp&nbsp&nbspPopularity:26&nbsp&nbsp&nbspVote Count:201';
        
        let img = document.createElement("img");
        img.setAttribute("src", movieList.Poster);
        img.setAttribute("alt", movieList.Title);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(img);
        movieId.appendChild(article);
}

