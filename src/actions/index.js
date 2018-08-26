import axios from 'axios';
import config from '../config';

const API_URL = config.apiUrl;

export const FETCH_VERBS = 'FETCH_VERBS';
export const FIND_SINGLE_VERB = 'FIND_SINGLE_VERB';
export const FIND_RANDOM = 'FIND_RANDOM';
export const RETURN_CACHED = 'RETURN_CACHED';

export function fetchVerbs() {
  const req = axios.get(`${API_URL}/get-verbs`);

  return {
    type: FETCH_VERBS,
    payload: req,
  }
}

export function findVerbDetails(verb) {
  const req = axios.post(`${API_URL}/get-verb`, { verb });
  return {
    type: FIND_SINGLE_VERB,
    payload: req,
  }
}

export function returnCached(verb) {
  return {
    type: RETURN_CACHED,
    verb
  }
}

