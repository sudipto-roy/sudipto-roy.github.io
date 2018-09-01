(function (app, $) {
  function Component() {
    this.init();
  }

  // function that start initializing an component
  Component.prototype.init = async function () {
    this.apiRes = await this.beforeInit();
    this.initDom();
    this.initCache();
    this.initEvents();
    this.afterInit();
  }

  // hook to make api call
  Component.prototype.beforeInit = function () {}

  // hook to create/manipulate the DOm of the component
  Component.prototype.initDom = function () {}

  // function to cache all required DOM elements
  Component.prototype.initCache = function () {}

  // function to add event listeners to the cached DOM Elements
  Component.prototype.initEvents = function () {}

  // hook to perform some operation when the component has successfully been created
  Component.prototype.afterInit = function () {}

  app.component = Component;
})(window.app)