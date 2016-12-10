const _ = require('lodash');
const sprintf = require('sprintf');

const degreeMatch = require('../util/match/degree');
const profile = require('../util/profile');

const party = require('../generators/party');
const bill = require('../generators/bill');
const voter = require('../generators/voter');

const partyMatcher = require('../matchers/party');

const numParties = process.argv[2] || 10;
const numBills = process.argv[3] || 10;
const numVoters = process.argv[4] || 10;

var parties = [],
  bills = [],
  voters = [],
  extremismCount = {};

console.log('Parties:');
for (var i = 0; i < numParties; i++) {
  let p = party.create({name: 'Party ' + (i + 1)});
  profile.calculateExtremism(p);
  extremismCount[p.extremism] = extremismCount[p.extremism] ? extremismCount[p.extremism] += 1 : 1;
  if (numParties < 24) {console.log(p);}
  p.voters = [];
  parties.push(p);
}
console.log(numParties, 'created');

console.log('Extremism spread', extremismCount);

console.log('Bills:');
for (var j = 0; j < numBills; j++) {
  let b = bill.create({elements: _.random(1,2), name: 'Bill ' + (j + 1)});
  if (numBills < 24) {console.log(b);}
  bills.push(b);
}
console.log(numBills, 'created');

console.log('Voters:');

for (var k = 0; k < numVoters; k++) {
  let v = voter.create({name: 'Voter ' + (k + 1)});
  if (numVoters < 24) {console.log(v);}
  v.parties = [];
  voters.push(v);
}
console.log(numVoters, 'created');

if (numParties < 24) {
  _.forEach(parties, (party, pIndex) => {
    _.forEach(voters, (voter) => {
      let match = degreeMatch.profileMatch(voter, parties[pIndex], 5);
      if (match) {
        voter.parties.push(party);
        party.voters.push(voter);
      }
    });

    console.log('party', pIndex, 'has', party.voters.length, 'from', numVoters);
  });
}

partyMatcher.matchVoters(parties[0], voters);

console.log('Party 0 matches', parties[0].potentialVoters.length, 'voters');

partyMatcher.matchCandidates(parties[0], voters);

console.log('Party 0 matches', parties[0].potentialCandidates.length, 'candidates');

partyMatcher.matchBills(parties[0], bills);

console.log('Party 0 matches', parties[0].billsSupported.length, 'bills');
