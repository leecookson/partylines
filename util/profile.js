const _ = require('lodash');

const ELEMENT_IDS = [
  's', 'f', 'd', 't', 'l'
];

const ELEMENTS = {
  F: 'FISCAL',
  S: 'SOCIAL',
  D: 'DIPLOMACY',
  T: 'TECH',
  L: 'LAW'
};

const elementsValueMessage = 'profile.create(opts), opts.elements must be an array, or 0 <= n <= ' + ELEMENT_IDS.length;

function getDegree () {
  return Math.floor(Math.random() * 4) + 1;
}

module.exports = {

  create: function (opts) {
    const DEFAULT = {
      elements: ELEMENT_IDS
    };
    opts = _.defaults(opts, DEFAULT);
    let profile = {};

    if (typeof opts.elements === 'number') {
      if (opts.elements < 0 || opts.elements > ELEMENT_IDS.length) {
        throw new Error(elementsValueMessage);
      }
      opts.elements = _.sampleSize(ELEMENT_IDS, opts.elements);
    }

    if (_.isArray(opts.elements)){
      opts.elements.forEach((element) => {
        profile[element] = getDegree();
      });
    } else {
      throw new Error(elementsValueMessage);
    }

    profile.name = '';
    ELEMENT_IDS.forEach((el) => {
      if (profile[el]) {
        profile.name += el + profile[el];
      }
    });

    return profile;
  },

  calculateExtremism: (profile) => {
    const total = _.reduce(ELEMENT_IDS, (accumulator, value) => {
      const margin = Math.abs(profile[value] - 2.5);
      return accumulator + margin;
    }, 0);

    profile.extremism = Math.round((total - 2.5) * 8 / 4.5) + 1;
    return profile.extremism;
  },

  getElementName: (element) => {
    return ELEMENTS[element];
  },

  getElementIDs: function () {
    return ELEMENT_IDS;
  }
};
