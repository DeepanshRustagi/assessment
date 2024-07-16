/*
HTTP Status Code
Informational responses (100–199)
Successful responses (200–299)
Redirects (300–399)
Client errors (400–499)
Server errors (500–599)
*/
import * as Constants from "../../common/contants";
import env from "../../env.json";
import { client } from "./client";

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use((response) => {
  if (response.status === Constants.NOT_AUTHORIZED) {
  }
  return response;
});

const getNetworkResponse = async (config: any, apiPath: any) => {
  return client(config)
    .then(async function (response: any) {
      return response;
    })
    .catch(async (error: any) => {
      if (error?.response?.status === Constants.NOT_AUTHORIZED) {
      }
      return error.response || error.message || apiPath;
    });
};

/*
Function to handle HTTP GET request
@params- for query params
*/
export const get = async (url: any, params: any, apiPath: any) => {
  const config = {
    baseURL: env.API_HOST,
    method: "GET",
    url,
    params,
  };

  return getNetworkResponse(config, apiPath);
};

/*
Function to handle HTTP POST request
@data for passing data as body
@params- for query params
*/
export const post = async (
  url: any,
  data: any = {},
  params: any = {},
  apiPath: any = null
) => {
  const config = {
    baseURL: env.API_HOST,
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  return getNetworkResponse(config, apiPath);
};

/**
 * Handle HTTP PUT request
 * @param {string} url http url of api
 * @param {object} data data to pass in body
 * @param {object} params params to pass in api call
 */
export const put = async (
  url: any,
  data: any = {},
  params: any = {},
  apiPath: any = null
) => {
  const config = {
    baseURL: env.API_HOST,
    method: "PUT",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  return getNetworkResponse(config, apiPath);
};

/**
 * Handle HTTP DELETE request
 * @param {string} url http url of api
 * @param {object} data data to pass in body
 * @param {object} params params to pass in api call
 */
export const Delete = async (
  url: any,
  data: any = {},
  params: any = {},
  apiPath: any = null
) => {
  const config = {
    baseURL: env.API_HOST,
    method: "DELETE",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  return getNetworkResponse(config, apiPath);
};


const NetworkService = {
  get,
  post,
  put,
  Delete,
};

export default NetworkService;
