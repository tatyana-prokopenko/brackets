module.exports = function check(str, bracketsConfig) {
  let savedStr = str;
  let result;
  (function deleteBrackets() {
    bracketsConfig.forEach(function reducesavedStr(element) {
      const bracketIndex = savedStr.indexOf(element.join(''));
      if (bracketIndex !== -1) {
        savedStr =
          savedStr.slice(0, bracketIndex) + savedStr.slice(bracketIndex + 2);
        if (savedStr !== '') {
          reducesavedStr(element);
        }
      }
    });
    if (savedStr === '') {
      result = true;
    } else if (
      bracketsConfig
        .map((elem) => {
          return savedStr.indexOf(elem.join(''));
        })
        .some((value) => value >= 0)
    ) {
      deleteBrackets();
    } else {
      result = false;
    }
  })();
  return result;
};
