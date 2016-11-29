
const _ = require('lodash');

const profile = require('../profile');

const ELEMENT_IDS = profile.getElementIDs();


module.exports = {

  degreeMatch: function (profile1, profile2, degree) {
    return degree >= this.degreeDifference(profile1, profile2);
  },

  profileMatch: function (profile1, profile2, degree) {
    return degree >= this.profileDifference(profile1, profile2);
  },

  degreeDifference: function (profile1, profile2) {
    return this.profileDifference(profile1, profile2) / ELEMENT_IDS.length;
  },

  profileDifference: function (profile1, profile2) {
    return _.reduce(ELEMENT_IDS, (sum, element) => {
      return sum + this.elementDifference(profile1[element], profile2[element]);
    }, 0);
  },

  elementDifference: function (element1, element2) {
    return Math.abs(element1 - element2);
  }

};
