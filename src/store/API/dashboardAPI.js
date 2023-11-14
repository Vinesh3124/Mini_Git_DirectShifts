import axios from "axios";

export const getAllPullAPI = (payload) => {
  const { state, perPage, page, sort } = payload;
  const url = `https://api.github.com/repos/Vinesh3124/pepperfry_clone/pulls?state=${state || 'all'}&per_page=${perPage || 10}&page=${page || 1}&sort=${sort || ''}`;
  return axios
    .get(url)
    .then((resp) => resp)
    .catch((err) => {
      throw err;
    });
};

export const getAllIssuesAPI = (payload) => {
    const { state, filter, label, perPage, page } = payload;
    const url = `https://api.github.com/repos/Vinesh3124/pepperfry_clone/issues?state=${state || 'all'}&filter=${filter || ''}&label=${label || ''}&per_page=${perPage || 10}page=${page || 1}'`;
    return axios
      .get(url)
      .then((resp) => resp)
      .catch((err) => {
        throw err;
      });
  };