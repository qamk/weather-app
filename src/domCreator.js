const domCreator = (() => {
  const articleElement = (root) => {
    let article = document.createElement('article');
    root.appendChild(article);
  } 

  const divElements = (root) => {
    let div = document.createElement('div');
    root.appendChild(div);
  }

  const paraElement = (root) => {
    let p = document.createElement('p');
    root.appendChild(p);
  }

  const sectionElement = (root) => {
    let section = document.createElement('section');
    root.appendChild(section);
  }

  const figureElement = (root, imgElement) => {
    let figure = document.createElement('figure');
    root.appendChild(figure);
    figure.appendChild(imgElement);
  }

  const imgElement = (src) => {
    let img = document.createElement('img');
    img.src = src;
    return img;
  }

  const buttonElement = (root) => {
    let button = document.createElement('button');
    root.appendChild(button);
  }

  return { articleElement, divElements, paraElement, sectionElement, figureElement, imgElement, buttonElement }

})();

export default domCreator;