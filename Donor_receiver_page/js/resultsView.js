import View from './View.js';

class ResultView extends View {
  _parentElment = document.querySelector('.results');
  _errorMessage = `We could not find any search result for this query. please try again.`;
  _message = ``; //sucess message provision

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
            <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${result.title} ...</h4>
                <p class="preview__publisher">${result.name}</p>
                <div class="preview__user-generated">
                    <svg>
                        <use href="./img/icons.svg#icon-user"></use>
                    </svg>
                </div>
            </div>
        </a>
   </li>`;
  }
} // similar to family view

export default new ResultView();
