// attach events to edit and cancel button
(function (spa, $) {
  var _global = {};

  function ProfileAccordianTile() {
    spa.component.call(this);
  }

  ProfileAccordianTile.prototype = Object.create(spa.component.prototype);

  ProfileAccordianTile.prototype.beforeInit = function () {
    var _self = this;
    $.get('/json/profile.json').done(function (res) {
      _self.beforeInitRes = res;
      _self.beforeInitDeff.resolve(res);
    });
  }

  ProfileAccordianTile.prototype.initDom = function () {
    var _self = this;
    _global.$ = {
      profileAccordian : $('#profileAccordian')
    }
    _global.$.profileAccordian.html(spa.profileAccordianTile.getStr(_self.beforeInitRes, ['personal', 'educational', 'experience'])).accordion();
  }

  ProfileAccordianTile.prototype.initCache = function () {
    _global.$.accordianForms = _global.$.profileAccordian.find('form');
  }

  ProfileAccordianTile.prototype.initEvents = function () {
    _global.$.accordianForms.on('submit', _handleAccordianFormSubmit);
  }

  function _handleAccordianFormSubmit(e) {
    e.preventDefault();
    alert('form submitted');
  }

  new ProfileAccordianTile;
}) (window.spa, window.jQuery);