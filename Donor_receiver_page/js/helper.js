import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([
      fetch(
        url
        // 'https://forkify-api.herokuapp.com/api/v2/familys/5ed6604591c37cdc054bc886'
      ),
      timeout(TIMEOUT_SEC),
    ]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(res, data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
