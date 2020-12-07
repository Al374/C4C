import View from './View.js';

class FamilyView extends View {
  _parentElment = document.querySelector('.family');

  _errorMessage = `We could not find that family. please try another one.`;
  _message = ``; //sucess message provision

  addHandlerrender(handler) {
    ['hashchange', 'load'].forEach(ev => addEventListener(ev, handler));
    // window.addEventListener('hashchange', controlFamily);
    // window.addEventListener('load', showFamily);
  } //it is our publisher -- need to get access to the sub and that is handler function --argument

  addHandlerUpdateFamilySize(handler) {
    this._parentElment.addEventListener('click', e => {
      const btn = e.target.closest('.btn--increase-family_size');
      if (!btn) return;
      const { updatefamilyTo } = btn.dataset;

      if (+updatefamilyTo > 0) handler(+updatefamilyTo); // we need to call the
    });
  }

  addHandlerUpdatedonationSchdule(handler) {
    this._parentElment.addEventListener('click', e => {
      const btn = e.target.closest('.btn--increase-donation_schedule');
      if (!btn) return;
      const { updateTo } = btn.dataset;
      if (+updateTo > 0) handler(+updateTo); // we need to call the
    });
  }
  _generateMarkup() {
    return `
<figure class="family__fig">
  <img src="${this._data.image}" alt="${
      this._data.title
    }" class="family__img" />
  <h1 class="family__title">
    <span>${this._data.title}</span>
  </h1>
</figure>
<div class="family__directions">
  <h2 class="heading--2">Our Story</h2>
  <p class="family__directions-text">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptatum debitis doloribus consequatur! Sint asperiores necessitatibus quis alias ipsam labore aperiam nesciunt expedita ab tempora. Enim ea soluta dolores fugiat!
    <span class="family__publisher">${
      this._data.user_name
    }</span>. Please check out
    your feedback box and make a new donation.
  </p>
  <a
    class="btn--small family__btn"
    href="${this._data.source_userid}"
    target="_blank"
  >
    <span>Donation</span>
    <svg class="search__icon">
      <use href="img/icons.svg#icon-arrow-right"></use>
    </svg>
  </a>
</div>
<div class="family__details">
  <div class="family__info">
    <svg class="family__info-icon">
      <use href="../img/icons.svg#icon-clock"></use>
    </svg>
    <span class="family__info-data family__info-data--minutes">${
      this._data.donation_schedule
    }</span>
    <span class="family__info-text">days, donation schdule</span> 
    <div class="family__info-buttons">
      <button class="btn--tiny btn--increase-donation_schedule" data-update-to="${
        this._data.donation_schedule - 1
      }" >
        <svg>
          <use href="../img/icons.svg#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--increase-donation_schedule" data-update-to="${
        this._data.donation_schedule + 1
      }">
        <svg>
          <use href="../img/icons.svg#icon-plus-circle"></use>
        </svg>
      </button>
    </div>   
  </div>
    
  <div class="family__info">
    <svg class="family__info-icon">
      <use href="img/icons.svg#icon-users"></use>
    </svg>
    <span class="family__info-data family__info-data--people">${
      this._data.family_size
    }</span>
    <span class="family__info-text">family members</span>
    <div class="family__info-buttons">
      <button class="btn--tiny btn--increase-family_size" data-updatefamily-to="${
        this._data.family_size - 1
      }" >
        <svg>
          <use href="../img/icons.svg#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--increase-family_size" data-updatefamily-to="${
        this._data.family_size + 1
      }">
        <svg>
          <use href="../img/icons.svg#icon-plus-circle"></use>
        </svg>
      </button>
    </div>       
  </div>

  <div class="family__user-generated">
    <svg>
    <use href="../img/icons.svg#icon-user"></use>
    </svg>
  </div>
  <button class="btn--round">
    <svg class="">
      <use href="../img/icons.svg#icon-bookmark-fill"></use>
    </svg>
  </button>
</div>

<div class="family__ingredients">
  <h2 class="heading--2">family needs</h2>
  <ul class="family__ingredient-list">
    ${this._data.needs.map(this._generateMarkupIngredient).join('')}
  </ul>
</div>`;
  }

  _generateMarkupIngredient(ing) {
    return ` 
    <li class="family__ingredient">
    <svg class="family__icon">
      <use href="../img/icons.svg#icon-check"></use>
    </svg>
    <div class="family__quantity">${ing.quantity}</div>
    <div class="family__description">
      <span class="family__unit">${ing.unit}</span>
      ${ing.description}
    </div>
  </li>`;
  }
}

export default new FamilyView();
