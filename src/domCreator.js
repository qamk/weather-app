const domCreator = (() => {

  const articleElement = (root, ...classes) => {
    let article = document.createElement('article');
    root.appendChild(article);
    
    return article;
  }

  const h2Element = (root, text, ...classes) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = text;
    root.appendChild(h2);
  }

  const divElement = (root, ...classes) => {
    let div = document.createElement('div');
    root.appendChild(div);
    
    return div;
  }

  const paraElement = (root, ...classes) => {
    let p = document.createElement('p');
    root.appendChild(p);
    
    return p;
  }

  const sectionElement = (root, ...classes) => {
    let section = document.createElement('section');
    root.appendChild(section);
    
    return section;
  }

  const figureElement = (root, imgElement, ...classes) => {
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

  const buttonElement = (root, textContent, data) => {
    let button = document.createElement('button');
    data && button.setAttribute('data-name', data);
    button.innerHTML = textContent || '';
    root.appendChild(button);
    return button;
  }

  const spanElement = (root, textContent) => {
    let span = document.createElement('span');
    span.innerHTML = textContent;
    root.appendChild(span);
    return span;
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

  return {
          articleElement, divElement, paraElement, sectionElement,
          figureElement, imgElement, inputElement, buttonElement,
          spanElement, ulGenerator, h2Element,
        }

})();

export default domCreator;