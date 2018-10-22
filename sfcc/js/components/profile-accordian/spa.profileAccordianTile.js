(function (spa, $) {
  function getProfileAccordianStr(accordianData, profileTiles) {
    var profileAccordianStr = '',
      tempTile;
    for(var i = 0, tileLen = profileTiles.length; i < tileLen; i++) {
      tempTile = new _ProfileAccordianTile(accordianData[profileTiles[i]]);
      profileAccordianStr += tempTile.getProfileAccordianTile();
    }
    return profileAccordianStr;
  }

  function getProfileAccordian$(accordianData, profileTiles) {
    return $(getProfileAccordianStr(accordianData, profileTiles));
  }

  function _ProfileAccordianTile(profileData) {
    this.title = profileData.tileTitle;
    this.formName = profileData.formName;
    this.formInputs = profileData.inputs;
    this.formAction = profileData.formAction;
  }
  _ProfileAccordianTile.prototype.getProfileAccordianTitle = function () {
    return '<h3>' + this.title + '</h3>';
  }
  _ProfileAccordianTile.prototype.getProfileAccordianContent = function () {
    var accordianContentHTMLStr = '<div><form action="' + this.formAction + '" name="' + this.formName + '">';
    for(var i = 0, inputLen = this.formInputs.length; i < inputLen; i++) {
      accordianContentHTMLStr += spa.inputfield.getStr(this.formInputs[i]);
    }
    accordianContentHTMLStr += '<input type="submit" class="button-primary" value="Edit" /></form></div>';
    return accordianContentHTMLStr;
  }
  _ProfileAccordianTile.prototype.getProfileAccordianTile = function () {
    var accordianTileHTMLStr = '';
    accordianTileHTMLStr += this.getProfileAccordianTitle();
    accordianTileHTMLStr += this.getProfileAccordianContent();
    return accordianTileHTMLStr;
  }

  spa.profileAccordianTile = {
    get$ : getProfileAccordian$,
    getStr : getProfileAccordianStr
  }
})(window.spa, window.jQuery);