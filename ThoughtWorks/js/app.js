(function (window) {
  /**
   * @function getHtmlFromStr
   * @description utility function to generate HTML Elemnents from HTML String
   * @params {string} htmlString representing the HTML
   * @returs {Element} HTML Element
   */
  function getHtmlFromStr(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  // loading animation starts
  function loadingStart($el) {
    $el.classList.add('m-loading');
    app.loadingEl = $el;
  }

  // loading animation ends
  function loadingEnd() {
    app.loadingEl.classList.remove('m-loading');
  }

  function sortBy(keyword, arr) {
    return arr.sort((a, b) => b[keyword] - a[keyword]);
  }

  // global object to save application data
  store = {};

  window.app  = {
    getHtmlFromStr,
    loadingStart,
    loadingEnd,
    sortBy,
    store
  }
})(window);