import { API_URL } from "config/constants";

const baseUrl = API_URL;
const headers = { "Content-Type": "application/json" };

const buildUrl = ({ url, queryParams = null }) => {
  let fullUrl = `${baseUrl}/${url}`;
  if (queryParams === null) return fullUrl;
  return `${fullUrl}?${queryParams}`;
};

/**
 * setResponseType
 * @param {object} res
 * @returns {Promise<any>}
 */
const setResponseType = (res) => res.json();

/**
 * throwError
 * @param {object} res
 * @returns {void}
 */
const throwError = (res) => {
  if (!res.ok) throw new Error("Api response failed");
};

const http = {
  get: ({ url, queryParams = null }) =>
    fetch(buildUrl({ url, queryParams }), { headers }).then((res) => {
      throwError(res);
      return setResponseType(res);
    }),
  post: ({ url, queryParams, body }) =>
    fetch(buildUrl({ url, queryParams }), {
      headers,
      body: JSON.stringify(body),
    }).then(setResponseType),
  put: ({ url, queryParams, body }) =>
    fetch(buildUrl({ url, queryParams }), {
      headers,
      body: JSON.stringify(body),
    }).then(setResponseType),
  delete: ({ url, queryParams, body }) =>
    fetch(buildUrl({ url, queryParams }), { headers }).then(setResponseType),
};

export default http;
