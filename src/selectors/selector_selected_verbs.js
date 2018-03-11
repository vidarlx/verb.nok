import { createSelector } from 'reselect';

const verbSelector = state => state.verbs;
const selectedVerbsSelector = state => state.active_verbs;

const getVerbs = (verbs, selectedVerbs) => {
  return selectedVerbs.map((verb) => {
    return { verb, ...verbs[verb] };
  });
};

export default createSelector(
  verbSelector,           // pick off a piece of state
  selectedVerbsSelector,  // pick off a piece of state
  getVerbs                // last argument is the fn that selects logic
);
