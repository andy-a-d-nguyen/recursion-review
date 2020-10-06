// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null || typeof obj === NaN || typeof obj === undefined) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var strResult = '[';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        strResult += stringifyJSON(obj[i]);
      } else {
        strResult += stringifyJSON(obj[i]) + ',';
      }
    }
    return strResult + ']';
  }
  if (typeof obj === 'object') {
    if (_.isEmpty(obj)) {
      return '{}';
    }
    var strObj = '{';
    for (var key in obj) {
      if (typeof obj[key] === undefined || typeof obj[key] === 'function') {
        return '{}';
      }
      strObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    strObj = strObj.slice(0, strObj.length - 1);
    return strObj + '}';
  }
};