(function (spa) {
  function getInputStr(inputConfig) {
    var inputfieldStr = '<div class="inputfield ' + inputConfig.wrapperClass + '">'
    inputfieldStr += '<label class="' + inputConfig.labelClass + '" for="' + inputConfig.name + '">' +
      inputConfig.label + '</label>';
    if (inputConfig.type === 'select') {
      inputfieldStr += '<select ' +
        ' id="' + inputConfig.name + '" ' +
        ' name="' + inputConfig.name + '" ' +
        inputConfig.required ? ' required="' + inputConfig.required + '" ' : '' +
        inputConfig.readonly ? ' readonly="' + inputConfig.readonly + '" ' : '' +
        inputConfig.disabled ? ' readonly="' + inputConfig.disabled + '" ' : '' +
        '>';
      for (var i = 0, optLen = inputConfig.options.length; i < optLen; i++) {
        inputfieldStr += '<option value="' + inputConfig.options[i] + '">' + inputConfig.options[i] + '</option>';
      }
      inputfieldStr += '</select>';
    } else {
      inputfieldStr += '<input type="' + inputConfig.type + '" ' +
        ' id="' + inputConfig.name + '" ' +
        ' name="' + inputConfig.name + '" ';
        inputfieldStr += inputConfig.value ? ' value="' + inputConfig.value + '" ' : '';
        inputfieldStr += inputConfig.placeholder ? ' placeholder="' + inputConfig.placeholder + '" ' : '';
        inputfieldStr += inputConfig.required ? ' required="' + inputConfig.required + '" ' : '';
        inputfieldStr += inputConfig.pattern ? ' pattern="' + inputConfig.pattern + '" ' : '';
        inputfieldStr += inputConfig.readonly ? ' readonly="' + inputConfig.readonly + '" ' : '';
        inputfieldStr += inputConfig.disabled ? ' readonly="' + inputConfig.disabled + '" ' : '';
        inputfieldStr += ' />';
    }
    inputfieldStr += '</div>';
    return inputfieldStr;
  }

  function getInputDom (inputConfig) {
    return $(getInputStr(inputConfig));
  }

  spa.inputfield = {
    getStr: getInputStr,
    getDom: getInputDom
  }
})(window.spa)