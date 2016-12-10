
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
    if (this.numElements(profile1) < 5 || this.numElements(profile2) < 5) {
      console.log(this.numElements(profile1), this.numElements(profile2));
    }
    return this.profileDifference(profile1, profile2) / Math.min(this.numElements(profile1), this.numElements(profile2));
  },

  profileDifference: function (profile1, profile2) {
    return _.reduce(ELEMENT_IDS, (sum, element) => {
      if (profile1[element] && profile2[element]) {
        return sum + this.elementDifference(profile1[element], profile2[element]);
      } else {
        return sum;
      }
    }, 0);
  },

  elementDifference: function (element1, element2) {
    return Math.abs(element1 - element2);
  },

  numElements: function (profile) {
    return _.reduce(profile, (sum, element) => {
      if (!_.isNil(element)) {
        return sum + 1;
      }
    }, 0);
  }

};
