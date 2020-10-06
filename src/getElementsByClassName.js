// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  var getClassName = function(element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.childNodes) {
      element.childNodes.forEach(function(childNode) {
        getClassName(childNode);
      });
    }
  };
  getClassName(document.body);
  return result;
};
