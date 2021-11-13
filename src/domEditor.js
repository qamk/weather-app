const domEditor = (() => {
  const addEvent = (element, eleEvent, callback) => {
    element.addEventListener(eleEvent, callback);
  }

  const changeClassList = (element, ...newClassList) => {
    element.classList = newClassList.join(' ');
  }

  return { addEvent, changeClassList };
})();

export default domEditor;