import axios from 'axios';

const API_URL = 'https://s3.eu-central-1.amazonaws.com/nok.verbs/norsk_verbs.json';

export const FETCH_VERBS = 'FETCH_VERBS';

export function fetchVerbs() {
  const req = axios.get(API_URL);

  //console.log('fetchVerbs action creator launched, payload:', req);

  return {
    type: FETCH_VERBS,
    payload: req,
  }
}
