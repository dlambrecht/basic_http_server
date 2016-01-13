const chai = require('chai');
const server = require(__dirname + '/../server');//eslint-disable-line
const chaiHttp = require('chai-http');
// const fs = require('fs');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('http server', () => {//eslint-disable-line
  it('should have a time route', (done) => {//eslint-disable-line
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.msg).to.eql('it is: ' + new Date());
      done();
    });
  });
});

  it('should have a greet route', (done) => {//eslint-disable-line
    request('localhost:3000')
    .get('/greet/name')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.msg).to.eql('Hello Trillie');
      done();
    });
  });

  it('should 404 on a page that does not exist', (done) => {//eslint-disable-line
    request('localhost:3000')
      .get('/doesnotexist')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('page not found');
        done();
      });
  });
