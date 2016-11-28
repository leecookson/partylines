
const should = require('should');
const party = require('../../generators/party');

describe('party', () => {
  it('created', () => {
    const p1 = party.create();
    should.exist(p1);
  });
  it('has elements', () => {
    const p1 = party.create();
    p1.f.should.exist;
    p1.s.should.exist;
    p1.d.should.exist;
    p1.t.should.exist;
    p1.l.should.exist;
  });
  it('has elements as integers', () => {
    const p1 = party.create();
    p1.f.should.be.within(1, 4);
    p1.s.should.be.within(1, 4);
    p1.d.should.be.within(1, 4);
    p1.t.should.be.within(1, 4);
    p1.l.should.be.within(1, 4);
  });
});
