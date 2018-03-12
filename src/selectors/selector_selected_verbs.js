import { createSelector } from 'reselect';
import { RANDOM_VERB } from '../common/consts';

const verbSelector = state => state.verbs;
const selectedVerbsSelector = state => state.active_verbs;

const getVerbs = (verbs, selectedVerbs) => {
  return selectedVerbs.map((verb) => {
    // get random key
    if (verb === RANDOM_VERB) {
      verb = randomProperty(verbs);
    }
    return { verb, ...verbs[verb] };
  });
};

const randomProperty = (obj) => {
  var keys = Object.keys(obj)
  return keys[ keys.length * Math.random() << 0];
};

export default createSelector(
  verbSelector,           // pick off a piece of state
  selectedVerbsSelector,  // pick off a piece of state
  getVerbs                // last argument is the fn that selects logic
);
