const resultsPage = (domCreatorObj, root) => {
    let interactive;
  
  const drawPage = () => {
    (root.childElementCount === 0) || root.removeChild(root.lastElementChild);
    const section = domCreatorObj.elementGenerator({
      root: root,
      elementName: 'section',
      classes: [],
    });
    const titleDiv = domCreatorObj.elementGenerator({
      root: section,
      elementName: 'div',
      classes: []
    });
    const cardDiv = domCreatorObj.elementGenerator({
      root: section,
      elementName: 'div',
      classes: [],
    });
    const article = domCreatorObj.elementGenerator({
      root: cardDiv,
      elementName: 'div',
      classes: [],
    });
    const buttonDiv = domCreatorObj.elementGenerator({
        root: article,
        elementName: 'div',
        classes: [],
      });
    const fButton = domCreatorObj.elementGenerator({
        root: buttonDiv,
        elementName: 'button',
        classes: [],
        attributes: {textContent: 'Fahrenheit', id: 'f'}
      });
    const cButton = domCreatorObj.elementGenerator({
        root: buttonDiv,
        elementName: 'button',
        classes: [],
        attributes: {textContent: 'Celsius', id: 'c'}
      });
    const dataDiv = domCreatorObj.elementGenerator({
      root: article,
      elementName: 'div',
      classes: [],
    });
    const dataList = domCreatorObj.ulGenerator(dataDiv, 4, 'data_list');
    
    interactive = [fButton, cButton];
  }

  const getInteractive = () => interactive || [];

  return { drawPage, getInteractive };
}

export default resultsPage;