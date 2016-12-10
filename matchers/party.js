
const degree = require('../util/match/degree');

const VOTER_PARTY_DEGREE = 5;
const VOTER_CANDIDATE_DEGREE = 2  ;
const VOTER_BILL_DEGREE = 3;

module.exports = {

  matchVoters: function (party, voters) {
    party.potentialVoters = [];

    voters.forEach((voter) => {
      if (degree.profileMatch(party, voter, VOTER_PARTY_DEGREE)) {
        party.potentialVoters.push(voter);
      }
    });
  },

  matchCandidates: function (party, candidates) {
    party.potentialCandidates = [];

    candidates.forEach((candidate) => {
      if (degree.profileMatch(party, candidate, VOTER_CANDIDATE_DEGREE)) {
        party.potentialCandidates.push(candidate);
      }
    });
  },

  matchBills: function (party, bills) {
    party.billsSupported = [];

    bills.forEach((bill) => {
      if (degree.profileMatch(party, bill, VOTER_BILL_DEGREE)) {
        party.billsSupported.push(bill);
      }
    });
  }

};
