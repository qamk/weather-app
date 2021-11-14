const searchPage = (domCreatorObj) => {
  const _drawPage = (root) => {
    // const root = document.getElementById('content');
    const section = domCreatorObj.sectionElement(root);
    const article = domCreatorObj.articleElement(section);
    const input = domCreatorObj.inputElement(article);
    const button = domCreatorObj.buttonElement(article, 'Submit Query');
  }

  const _setupListeners = (callback) => {
    const button = document.querySelector('button');
    button.addEvent('click', callback);
  }

  const run = (callback) => {
    _drawPage();
    _setupListeners(callback);
  }

  return { run };
}

export default searchPage;