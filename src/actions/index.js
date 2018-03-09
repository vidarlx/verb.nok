import axios from 'axios';

const API_URL = 'https://s3.eu-central-1.amazonaws.com/nok.verbs/norsk_verbs.json';

export const FETCH_VERBS = 'FETCH_VERBS';
export const FIND_VERB = 'FIND_VERB';

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
