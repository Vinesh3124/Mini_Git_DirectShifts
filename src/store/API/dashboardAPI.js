import axios from "axios";

export const getAllPullAPI = (payload) => {
  const { state, perPage, page, sort, owner, repo } = payload;
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls?state=${state || 'all'}&per_page=${perPage || 10}&page=${page || 1}&sort=${sort || ''}`;
  return axios
    .get(url)
    .then((resp) => resp)
    .catch((err) => {
      throw err;
    });
};

export const getAllIssuesAPI = (payload) => {
  const { state, filter, label, perPage, page, owner, repo } = payload;
  const url = `https://api.github.com/repos/${owner}/${repo}/issues?state=${state || 'all'}&filter=${filter || ''}&label=${label || ''}&per_page=${perPage || 10}&page=${page || 1}`;
  return axios
    .get(url)
    .then((resp) => resp)
    .catch((err) => {
      throw err;
    });
};

export const getPullCommentsAPI = (payload) => {
  const url = payload;
  return axios
    .get(url)
    .then((resp) => resp)
    .catch((err) => {
      throw err;
    });
};