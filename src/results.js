const resultsPage = (domCreatorObj, root) => {
    let interactive;
  
  const drawPage = () => {
    (root.childElementCount === 0) || root.removeChild(root.lastElementChild);
    const section = domCreatorObj.elementGenerator({
      root: root,
      elementName: 'section',
      classes: ['section', 'height-med-len'],
    });
    const titleDiv = domCreatorObj.elementGenerator({
      root: section,
      elementName: 'div',
      classes: ['container-medium']
    });
    const titleh2 = domCreatorObj.elementGenerator({
      root: titleDiv,
      elementName: 'h2',
      classes: ['title-2', 'weight-normal'],
      attributes: { innerHTML: 'Weather search results:' }
    })
    const titlePara = domCreatorObj.elementGenerator({
      root: titleDiv,
      elementName: 'p',
      classes: ['subtitle'],
      attributes: { id: 'weather' }

    });
    const cardDiv = domCreatorObj.elementGenerator({
      root: section,
      elementName: 'div',
      classes: [],
    });
    const article = domCreatorObj.elementGenerator({
      root: cardDiv,
      elementName: 'div',
      classes: ['container-bg'],
    });
    const buttonDiv = domCreatorObj.elementGenerator({
        root: article,
        elementName: 'div',
        classes: ['container-narrow'],
      });
    const fButton = domCreatorObj.elementGenerator({
        root: buttonDiv,
        elementName: 'button',
        classes: ['button', 'm-5'],
        attributes: {textContent: 'Fahrenheit', id: 'f'}
      });
    const cButton = domCreatorObj.elementGenerator({
        root: buttonDiv,
        elementName: 'button',
        classes: ['button'],
        attributes: {textContent: 'Celsius', id: 'c', disabled: true}
      });
    const dataDiv = domCreatorObj.elementGenerator({
      root: article,
      elementName: 'div',
      classes: ['cols', 'container-medium'],
    });
    const dataList = domCreatorObj.ulGenerator({
      root: dataDiv,
      childCount: 4,
      classes: ['col-3', 'list'],
      attributes: { id: 'data_list' }
    });
    
    interactive = [fButton, cButton];
  }

  const getInteractive = () => interactive || [];

  return { drawPage, getInteractive };
}

export default resultsPage;