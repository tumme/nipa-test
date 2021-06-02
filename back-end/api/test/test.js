import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the ticket endpoint:', () => {
  it('It should create a ticket', (done) => {
    const ticket = {
      ticket_code: 'WH-123456789',
      contract_name: 'Tum',
      contract_email: 'tum2529it48@gmail.com',
      ticket_title: 'Test Ticket Title',
      ticket_description: 'Test Ticket Description',
      status: 1,
    };
    chai.request(app)
      .post('/api/v1/tickets/ticket')
      .set('Accept', 'application/json')
      .send(ticket)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });


  it('It should get all ticket', (done) => {
    chai.request(app)
      .get('/api/v1/tickets/all')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('get ticket by id', (done) => {
    const ticketId = 1;
    chai.request(app)
      .get(`/api/v1/tickets/${ticketId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

});
