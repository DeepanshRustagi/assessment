import axios from "axios";
import { API_TIMEOUT } from "src/common/contants";
import env from "src/env.json";


export const client = axios.create();
client.defaults.timeout = env.API_TIMEOUT || 60000;

export const setAPITimeout = (_timeout: any) => {
  client.defaults.timeout = _timeout || env.API_TIMEOUT || 60000;
};

/** pick and set last API timeout from local storage */
const timeout = Number(API_TIMEOUT);
setAPITimeout(timeout);
