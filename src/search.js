const searchPage = (domCreatorObj, root) => {
  let interactive;
  const drawPage = () => {
    (root.childElementCount === 0) || root.removeChild(root.lastElementChild);
    const section = domCreatorObj.elementGenerator({
      root: root,
      elementName: 'section',
      classes: ['section', 'container-bg-primary']
    });
    const article = domCreatorObj.elementGenerator({
      root: section,
      elementName: 'article',
      classes: ['flex', 'just-center', 'align-end', 'self-center']
    });
    const input = domCreatorObj.elementGenerator({
      root: article,
      elementName: 'input',
      classes: ['input'],
      attributes: { placeholder: 'e.g. london, uk', required: true }
    });
    const button = domCreatorObj.elementGenerator({
      root: article,
      elementName: 'button',
      classes: ['button'],
      attributes: { textContent: 'Submit Query', type: 'submit' }
    });

    interactive = [button]
  }

  const getInteractive = () => interactive || [];

  return { drawPage, getInteractive };
}

export default searchPage;