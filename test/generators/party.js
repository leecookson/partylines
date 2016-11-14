const should = require('should');
const party = require('../../generators/party');

describe('party', () => {
  it('created', () => {
    const p1 = party.create();
    should.exist(p1);
  });
  it('has elements', () => {
    const p1 = party.create();
    p1.F.should.exist;
    p1.S.should.exist;
    p1.D.should.exist;
    p1.T.should.exist;
    p1.L.should.exist;
  });
  it('has elements as integers', () => {
    const p1 = party.create();
    p1.F.should.be.within(1, 4);
    p1.S.should.be.within(1, 4);
    p1.D.should.be.within(1, 4);
    p1.T.should.be.within(1, 4);
    p1.L.should.be.within(1, 4);
  });
});
