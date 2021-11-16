const searchPage = (domCreatorObj, root) => {
  let interactive;
  const drawPage = () => {
    (root.childElementCount === 0) || root.removeChild(root.lastElementChild);
    const section = domCreatorObj.elementGenerator({
      root: root,
      elementName: 'section',
      classes: []
    });
    const article = domCreatorObj.elementGenerator({
      root: section,
      elementName: 'article',
      classes: []
    });
    const input = domCreatorObj.elementGenerator({
      root: article,
      elementName: 'input',
      classes: [],
      attributes: {placeholder: 'e.g. london, uk'}
    });
    const button = domCreatorObj.elementGenerator({
      root: article,
      elementName: 'button',
      classes: [],
      attributes: {textContent: 'Submit Query'}
    });

    interactive = [button]
  }

  const getInteractive = () => interactive || [];

  return { drawPage, getInteractive };
}

export default searchPage;