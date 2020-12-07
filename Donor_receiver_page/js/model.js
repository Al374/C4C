// import { async } from 'regenerator-runtime';

import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helper.js';
export const state = {
  family: {},
  search: {
    query: '',
    results: [],
    resultsPerpage: RES_PER_PAGE,
    page: 1,
  },
};

export const loadfamily = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const [{ family }] = data;
    state.family = {
      id: family.id,
      title: family.title,
      user_name: family.user_name,
      family_size: family.family_size,
      source_userid: family.source_userid,
      needs: family.needs,
      image: family.image_url,
      donation_schedule: family.donation_schedule,
    };
    console.log(state.family);
  } catch (error) {
    //Temp error handling
    console.error(`${error} ******`);
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query; // for future
    const data = await getJSON(`${API_URL}search/${query}`);
    console.log(data);

    state.search.results = data.Items.map(rec => {
      return {
        id: rec.data.family.id,
        title: rec.data.family.title,
        name: rec.data.family.user_name,
        family_size: rec.data.family.family_size,
        source_userid: rec.data.family.source_userid,
        needs: rec.data.family.needs,
        image: rec.data.family.image_url,
        donation_schedule: rec.data.family.donation_schedule,
      };
    });
    console.log(state.search.results);
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerpage; //0;
  const end = page * state.search.resultsPerpage; //9 slice mehtod will not take into the consideration the last number we enter in the parameter  ;
  return state.search.results.slice(start, end);
};

export const updateFamilySize = function (newFamily) {
  console.log(newFamily);
  state.family.needs.forEach(element => {
    element.quantity =
      (element.quantity * newFamily) / state.family.family_size; //new qt = oldqt * newfamilysize/oldfamilysize
    element.quantity ? element.quantity : (element.quantity = 'null');
    console.log(element.quantity);
  });

  state.family.family_size = newFamily;
  // update the family size to the new value
};
export const updateDonationSchdule = function (newSchdule) {
  state.family.donation_schedule = newSchdule; // update the family size to the new value
};
