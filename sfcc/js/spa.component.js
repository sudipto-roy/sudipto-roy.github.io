(function (spa, $) {
  function Component() {
    this.init();
  }
  Component.prototype.init = function () {
    var _self = this;
    _self.beforeInitDeff = $.Deferred();
    $.when(_self.beforeInitDeff).then(function (res) {
      _self.initDom();
      _self.initCache();
      _self.initEvents();
      _self.afterInit();
    });
    _self.beforeInit();
  }
  Component.prototype.beforeInit = function () {}

  Component.prototype.initDom = function () {}

  Component.prototype.initCache = function () {}

  Component.prototype.initEvents = function () {}

  Component.prototype.afterInit = function () {}

  Component.prototype.reInit = function () {
    this.initDom();
    this.initCache();
    this.initEvents();
    this.afterInit();
  }

  spa.component = Component;
})(window.spa, window.jQuery)