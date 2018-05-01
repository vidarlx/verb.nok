import axios from 'axios';
import config from '../config';

const API_URL = config.apiUrl;

export const FETCH_VERBS = 'FETCH_VERBS';
export const FIND_VERB = 'FIND_VERB';
export const FIND_RANDOM = 'FIND_RANDOM';
export const CLEAR_VERBS = 'CLEAR_VERBS';

export function fetchVerbs() {
  const req = axios.get(API_URL);

  return {
    type: FETCH_VERBS,
    payload: req,
  }
}

export function findVerb(verb) {
  return {
    type: FIND_VERB,
    verb,
  }
}

export function clearVerbs() {
  return {
    type: CLEAR_VERBS,
  }
}
