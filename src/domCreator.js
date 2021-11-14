const domCreator = (() => {
  const articleElement = (root) => {
    let article = document.createElement('article');
    root.appendChild(article);
    return article;
  } 

  const divElement = (root) => {
    let div = document.createElement('div');
    root.appendChild(div);
    return div;
  }

  const paraElement = (root) => {
    let p = document.createElement('p');
    root.appendChild(p);
    return p;
  }

  const sectionElement = (root) => {
    let section = document.createElement('section');
    root.appendChild(section);
    return section;
  }

  const figureElement = (root, imgElement) => {
    let figure = document.createElement('figure');
    root.appendChild(figure);
    figure.appendChild(imgElement);
    return figure;
  }

  const imgElement = (src) => {
    let img = document.createElement('img');
    img.src = src;
    return img;
  }

  const inputElement = (root, type) => {
    let input = document.createElement('input');
    input.type = type || 'text';
    root.appendChild(input);
    return input;
  }

  const buttonElement = (root, textContent) => {
    let button = document.createElement('button');
    button.innerHTML = textContent;
    root.appendChild(button);
    return button;
  }

  const spanElement = (root, textContent) => {
    let span = document.createElement('span');
    span.innerHTML = textContent;
    root.appendChild(span);
    return span;
  }

  const ulGenerator = (root, childCount) => {
    let ul = document.createElement('ul');
    for (let i=0; i<childCount; i++) {
      let listItem = document.createElement('li');
      listItem.setAttribute('data-id', i);
      ul.appendChild(listItem);
    }
    return ul;
  }

  return {
          articleElement, divElement, paraElement, sectionElement,
          figureElement, imgElement, inputElement, buttonElement,
          spanElement, ulGenerator
        }

})();

export default domCreator;