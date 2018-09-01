(function (app) {
  var _global = {};

  function MovieTiles() {
    app.component.call(this);
  }

  MovieTiles.prototype = Object.create(app.component.prototype);

  MovieTiles.prototype.beforeInit = async function () {
    _global.dom = {
      movieTiles: document.querySelector('#movieTiles')
    }
    app.loadingStart(_global.dom.movieTiles);
    var res = await fetch('./json/movies.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson;
      });
    app.store.movies = res;
    return res;
  }

  MovieTiles.prototype.initDom = function () {
    if (!_global.dom.movieTiles.classList.contains('m-loading')) {
      app.loadingStart(_global.dom.movieTiles)
    }
    var movieTilesStr = '<div class="m-movie-tiles__wrapper">',
      movieTileIns;
    movieTilesStr += getSortingOptions();
    for(var i = 0, apiLen = this.apiRes.length; i < apiLen; i++) {
      movieTileIns = new app.component.movieTile(this.apiRes[i]);
      movieTilesStr += movieTileIns.getStr();
    }
    movieTilesStr += '</div>';
    _global.dom.movieTiles.innerHTML = '';
    _global.dom.movieTiles.append(app.getHtmlFromStr(movieTilesStr));
    app.loadingEnd();
  }

  function getSortingOptions() {
    var sortingStr = '<div class="m-movie-tiles__sorting">';
    sortingStr += '<span class="m-movie-tiles__sorting-heading">Sort By: </span>';
    sortingStr += `<input class="m-movie-tiles__sorting-radio" type="radio" name="sortMovies" value="title_year" id="sortByYear" ${_global.sortBy === 'title_year' ? 'checked' : ''}/> <label class="m-movie-tiles__sorting-label" for="sortByYear">Year</label>`;
    sortingStr += `<input class="m-movie-tiles__sorting-radio" type="radio" name="sortMovies" value="budget" id="sortByBudget"  ${_global.sortBy === 'budget' ? 'checked' : ''}/> <label class="m-movie-tiles__sorting-label" for="sortByBudget">Budget</label>`;
    sortingStr += '</div>'
    return sortingStr;
  }

  MovieTiles.prototype.initEvents = function () {
    _global.dom.movieTiles.addEventListener('change', handleSortMoviesChange);
  }

  function handleSortMoviesChange(e) {
    if (e.target.name === 'sortMovies') {
      _global.sortBy = e.target.value;
      _global.movieTile.apiRes = app.sortBy(e.target.value, app.store.movies);
      _global.movieTile.initDom()
      _global.movieTile.initEvents();
    }
  }

  _global.movieTile = new MovieTiles;
})(window.app)