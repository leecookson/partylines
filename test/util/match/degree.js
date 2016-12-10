
const should = require('should');
const degree = require('../../../util/match/degree');

const profile1 = {
  f: 1,
  s: 1,
  d: 1,
  t: 1,
  l: 1
};
const profile2 = {
  f: 2,
  s: 2,
  d: 2,
  t: 2,
  l: 2
};
const profile3 = {
  f: 3,
  s: 3,
  d: 3,
  t: 3,
  l: 3
};
const profile4 = {
  f: 4,
  s: 4,
  d: 4,
  t: 4,
  l: 4
};
const profile5 = {
  f: 5,
  s: 5,
  d: 5,
  t: 5,
  l: 5
};

const partialProfile1 = {
  f: 1
}

const partialProfile1t = {
  t: 1
}

const partialProfile2 = {
  f: 2,
  s: 2
}

const partialProfile3 = {
  f: 3,
  s: 3,
  d: 3
}

const partialProfile4 = {
  f: 4,
  s: 4,
  d: 4,
  t: 4
}

describe('degree', () => {
  describe('elementDifference', () => {

    it('returns 0 for same value', () => {
      const v1 = degree.elementDifference(profile1.s, profile1.s);
      v1.should.equal(0);
    });

    it('returns 1 for 1,2', () => {
      const v1 = degree.elementDifference(profile1.s, profile2.s);
      v1.should.equal(1);
    });

    it('returns 1 for 2,1', () => {
      const v1 = degree.elementDifference(profile2.s, profile1.s);
      v1.should.equal(1);
    });

    it('returns 4 for 1,5', () => {
      const v1 = degree.elementDifference(profile1.s, profile5.s);
      v1.should.equal(4);
    });

    it('returns 4 for 5,1', () => {
      const v1 = degree.elementDifference(profile5.s, profile1.s);
      v1.should.equal(4);
    });

  });

  describe('profileDifference', () => {

    it('returns 0 for same profile', () => {
      const v1 = degree.profileDifference(profile1, profile1);
      v1.should.equal(0);
    });
    it('returns 20 for profile 1, profile 5', () => {
      const v1 = degree.profileDifference(profile1, profile5);
      v1.should.equal(20);
    });
    it('returns 20 for profile 5, profile 1', () => {
      const v1 = degree.profileDifference(profile1, profile5);
      v1.should.equal(20);
    });
    it('returns 10 for profile 1, profile 3', () => {
      const v1 = degree.profileDifference(profile1, profile3);
      v1.should.equal(10);
    });
    it('returns 10 for profile 3, profile 1', () => {
      const v1 = degree.profileDifference(profile3, profile1);
      v1.should.equal(10);
    });
    it('returns 2 for profile 3, partialProfile 1', () => {
      const v1 = degree.profileDifference(profile3, partialProfile1);
      v1.should.equal(2);
    });
    it('returns 6 for profile 5, partialProfile 3', () => {
      const v1 = degree.profileDifference(profile5, partialProfile3);
      v1.should.equal(6);
    });
    it('returns 0 for partialProfile 3, partialProfile 1 t', () => {
      const v1 = degree.profileDifference(partialProfile3, partialProfile1t);
      v1.should.equal(0);
    });

  });

  describe('degreeDifference', () => {

    it('returns 0 for same profile', () => {
      const v1 = degree.degreeDifference(profile1, profile1);
      v1.should.equal(0);
    });
    it('returns 4 for profile 1, profile 5', () => {
      const v1 = degree.degreeDifference(profile1, profile5);
      v1.should.equal(4);
    });
    it('returns 4 for profile 5, profile 1', () => {
      const v1 = degree.degreeDifference(profile1, profile5);
      v1.should.equal(4);
    });
    it('returns 2 for profile 1, profile 3', () => {
      const v1 = degree.degreeDifference(profile1, profile3);
      v1.should.equal(2);
    });
    it('returns 2 for profile 3, profile 1', () => {
      const v1 = degree.degreeDifference(profile3, profile1);
      v1.should.equal(2);
    });

  });

  describe('simpleMatch', () => {

    it('returns true for same profile, degree 0', () => {
      const v1 = degree.degreeMatch(profile1, profile1, 0);
      v1.should.equal(true);
    });
    it('returns true for same profile, degree 1', () => {
      const v1 = degree.degreeMatch(profile1, profile1, 1);
      v1.should.equal(true);
    });
    it('returns true for same profile, degree 2', () => {
      const v1 = degree.degreeMatch(profile1, profile1, 2);
      v1.should.equal(true);
    });
    it('returns true for same profile, degree 99', () => {
      const v1 = degree.degreeMatch(profile1, profile1, 99);
      v1.should.equal(true);
    });
    it('returns false for profile 1, profile 2, degree 0', () => {
      const v1 = degree.degreeMatch(profile1, profile2, 0);
      v1.should.equal(false);
    });
    it('returns true for profile 1, profile 2, degree 1', () => {
      const v1 = degree.degreeMatch(profile1, profile2, 1);
      v1.should.equal(true);
    });
    it('returns true for profile 1, profile 2, degree 2', () => {
      const v1 = degree.degreeMatch(profile1, profile2, 2);
      v1.should.equal(true);
    });
    it('returns true for profile 1, profile 2, degree 99', () => {
      const v1 = degree.degreeMatch(profile1, profile2, 99);
      v1.should.equal(true);
    });
    it('returns false for profile 1, profile 5, degree 0', () => {
      const v1 = degree.degreeMatch(profile1, profile5, 0);
      v1.should.equal(false);
    });
    it('returns false for profile 1, profile 5, degree 3', () => {
      const v1 = degree.degreeMatch(profile1, profile5, 3);
      v1.should.equal(false);
    });
    it('returns true for profile 1, profile 5, degree 4', () => {
      const v1 = degree.degreeMatch(profile1, profile5, 4);
      v1.should.equal(true);
    });
    it('returns true for profile 1, profile 5, degree 99', () => {
      const v1 = degree.degreeMatch(profile1, profile5,99);
      v1.should.equal(true);
    });

  });
});
