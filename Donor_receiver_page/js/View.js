export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElment.innerHTML = '';
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="../img/icons.svg#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', markup);
  }

  renderSucess(message = this._message) {
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="../img/icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner = function () {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="../img/icons.svg#icon-loader"></use>
      </svg>
    </div> 
    `;
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', markup);
  };
}
// we are exporting class itself no instance of this view; will be used as parent class fro all these child views ( family, search , results,...)
