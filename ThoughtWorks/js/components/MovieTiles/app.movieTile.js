(function (app) {
  // constructor method for MovieTile Class
  function MovieTile(data) {
    this.tileData = data;
  }

  // create html string of the movie tile and return the same
  MovieTile.prototype.getStr = function () {
    var tileStr = `<div class="m-movie-tile">`;
    tileStr += `<h3 class="m-movie-tile__title">${this.tileData.movie_title}</h3>`;
    tileStr += `<dl class="m-movie-tile__desc-list">`;
    tileStr += `<dt class="m-movie-tile__desc-title">Director: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.director_name}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Actor 1: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.actor_1_name}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Actor 2: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.actor_2_name}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Genres: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.genres}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Language: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.language}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Country: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.country}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Content Rating: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.content_rating}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Budget: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.budget}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Year: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.title_year}</dd>`;
    tileStr += `<dt class="m-movie-tile__desc-title">Plot Keywords: </dt>`;
    tileStr += `<dd class="m-movie-tile__desc-def">${this.tileData.plot_keywords}</dd>`;
    tileStr += `</dl>`;
    tileStr += `<a class="m-movie-tile__ext-link" href="${this.tileData.movie_imdb_link}" title="${this.tileData.movie_title}" target="_blank">See IMDB Page</a>`
    tileStr += `</div>`;
    return tileStr;
  }

  // return the HTML of movie tile
  MovieTile.prototype.getHtml = function () {
    return app.getHtmlFromStr(this.getStr());
  }

  app.component.movieTile = MovieTile;
})(window.app)