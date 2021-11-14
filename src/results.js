const resultsPage = (domCreatorObj, domEditorObj) => {
  const _drawPage = (root) => {
    const section = domCreatorObj.sectionElement(root);
    const titleDiv = domCreatorObj.divElement(section);
    const cardDiv = domCreatorObj.divElement(section);
    const article = domCreatorObj.articleElement(cardDiv);
      const buttonDiv = domCreatorObj.divElement(article);
      const button = domCreatorObj.buttonElement(buttonDiv);
      const buttonSpan = domCreatorObj.spanElement(button, "Toggle Units\n(F/C)");

    const dataDiv = domCreatorObj.divElement(article);
      const tempDiv = domCreatorObj.divElement(dataDiv);
        const tempList = domCreatorObj.ulGenerator(tempDiv, 3);
      const extraInfoDiv = domCreatorObj.divElement(dataDiv);
        const extraList = domCreatorObj.ulGenerator(extraInfoDiv, 3);
  }

  const run = (root) => {
    _drawPage(root)
  }
}

export default resultsPage;