const domCreator = (() => {

  const emptyObj = (obj) => Object.keys(obj) === 0;

  const emptyArray = (arr) => arr.length === 0; 

  const elementGenerator = ({root, elementName, classes = [], attributes = {}} = {}) => {
    if (!elementName) { return } // require an element
    let element = document.createElement(elementName);
    emptyArray(classes) || imbueWithClasses(element, classes);
    emptyObj(attributes) || imbueWithAttributes(element, attributes); // Only call if attributes are supplied
    root.appendChild(element);
    return element;
  }

  const imbueWithClasses = (element, classes) => {
    for (let klass of classes) {
      element.classList.add(klass);
    }
  }

  const imbueWithAttributes = (element, attributes) => {
    for (let [attrName, attrValue] of Object.entries(attributes)) {
      try {
      element[attrName] = attrValue;
      } catch (err) {
        console.log(err);
      }
    }
  }

  const ulGenerator = (root, childCount, id) => {
    let ul = document.createElement('ul');
    ul.id = id;
    for (let i=0; i<childCount; i++) {
      let listItem = document.createElement('li');
      listItem.setAttribute('data-id', i);
      ul.appendChild(listItem);
    }
    root.appendChild(ul);
    return ul;
  }

  return {ulGenerator, elementGenerator}

})();

export default domCreator;