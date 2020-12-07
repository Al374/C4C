import View from './View.js';

class PaginationView extends View {
  _parentElment = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElment.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      //   console.log(btn); /// for test only
      if (!btn) return; // gaurd clause

      const goTopage = +btn.dataset.goto;
      //   console.log(goTopage);for test
      handler(goTopage); //
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerpage
    );
    console.log(numPages);

    // 1. Page 1 , and there are other pages

    if (curPage === 1 && numPages > 1) {
      return `          
    <button data-goto = "${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>${curPage + 1}</span>
        <svg class="search__icon">
            <use href="../img/icons.svg#icon-arrow-right"></use>
        </svg>
    </button>`; // for testing
    }

    //last page

    if (curPage === numPages && numPages > 1) {
      return `
      <button  data-goto = "${
        curPage - 1
      }"class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="../img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
    </button>`;
    }

    // other page

    if (curPage < numPages) {
      return `<button  data-goto = "${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>${curPage + 1}</span>
        <svg class="search__icon">
            <use href="../img/icons.svg#icon-arrow-right"></use>
        </svg>
    </button>
    <button   data-goto = "${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="../img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
    </button>
    `;
    }

    // 1. Page 1 , and there NO other pages

    return ``;
  }
}

export default new PaginationView();
