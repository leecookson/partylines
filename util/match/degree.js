
const _ = require('lodash');

const profile = require('../profile');

const ELEMENT_IDS = profile.getElementIDs();


module.exports = {

  simpleMatch: function (item1, item2, degree) {
    return degree >= _.reduce(ELEMENT_IDS, (sum, element) => {
      return sum + this.elementDifference(item1[element], item2[element]);
    }, 0);
  },

  elementDifference: function (element1, element2) {
    return Math.abs(element1 - element2);
  }

};
