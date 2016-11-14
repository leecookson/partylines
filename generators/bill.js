const _ = require('lodash');

const profile = require('../util/profile');


module.exports = {

  create: function (opts) {
    const DEFAULT = {
      elements: profile.getElementIDs()
    };
    opts = _.defaults(opts, DEFAULT);

    return profile.create({elements: opts.elements});
  }

};
