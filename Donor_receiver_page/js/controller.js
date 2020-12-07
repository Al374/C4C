import * as model from './model.js';
import familyView from './familyView.js';
import searchView from './searchView.js';
import resultView from './resultsView.js';
import paginationView from './paginationView.js';

// import '/core-js/stable';
// import '/regenerator-runtime';

const familyContainer = document.querySelector('.family');

// https://x4iabc5bxj.execute-api.us-west-2.amazonaws.com/dev/changeforchange/{userid}

///////////////////////////////////////

const controlFamily = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    //guard cluase
    if (!id) return;
    //1. loading the fmailies details
    familyView.renderSpinner();
    await model.loadfamily(id);

    //2. Rendering the families details

    familyView.render(model.state.family);
  } catch (error) {
    familyView.renderError();
  }
};

const controlsearchResults = async function () {
  try {
    //1. get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultView.renderSpinner();
    //2. load search results
    await model.loadSearchResults(query); //replace this with type for now later));

    //3. render results
    // console.log(model.state.search.results); // search result for all
    console.log(model.getSearchResultsPage());
    resultView.render(model.getSearchResultsPage()); // hard code only for demo ; page number 1 for page 1 ; 2 for page 2 , etc..

    //4. render iniital pagination btns
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const controlPagination = function (goToPage) {
  // console.log(goToPage); for testing only
  //1. Render New Results

  resultView.render(model.getSearchResultsPage(goToPage));

  //2.Render new pagination --btns
  paginationView.render(model.state.search);
};

const controlFamilySize = function (newFamilySize) {
  //1. update the family size in state

  model.updateFamilySize(newFamilySize); // a method in the model

  //2. update the family view
  familyView.render(model.state.family);
};

const controlDonationSchdule = function (newDonationSchdule) {
  model.updateDonationSchdule(newDonationSchdule);
  familyView.render(model.state.family);
};

// controlsearchResults();
const init = function () {
  familyView.addHandlerrender(controlFamily);
  familyView.addHandlerUpdateFamilySize(controlFamilySize);
  familyView.addHandlerUpdatedonationSchdule(controlDonationSchdule);
  searchView.addHandlerSearch(controlsearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
