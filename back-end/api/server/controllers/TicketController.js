import TicketService from '../services/TicketService';
import Util from '../utils/Utils';
const util = new Util();

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


class TicketController {
  static async getAllTickets(req, res) {
    try {
      const allTicket = await TicketService.getAllTickets();
      if (allTicket.length > 0) {
        util.setSuccess(200, 'Tickets retrieved', allTicket);
      } else {
        util.setSuccess(200, 'No Ticket found',allTicket);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllStatus(req, res) {
    try {
      const allStatus = await TicketService.getAllStatus();
      if (allStatus.length > 0) {
        util.setSuccess(200, 'Status retrieved', allStatus);
      } else {
        util.setSuccess(200, 'No Status found',allStatus);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getTicketById(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const ticket = await TicketService.getTicketById(id);

      if (!ticket) {
        util.setError(404, `Cannot find ticket with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found ticket', ticket);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getTicketsByTicketCode(req, res) {
    const { ticketCode } = req.body;

    if (!ticketCode) {
      util.setError(400, 'Please input a valid value');
      return util.send(res);
    }

    try {
      const tickets = await TicketService.getTicketsByTicketCode(ticketCode);

      if (!tickets) {
        util.setError(404, `Cannot find ticket with the ticket code ${ticketCode}`);
      } else {
        util.setSuccess(200, 'Found ticket', tickets);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async createTicket(req, res) {
    if (!req.body.ticket_title &&  !req.body.contract_name && !req.body.contract_email ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTicket = req.body;
    try {
      const createdTicket = await TicketService.createTicket({
        ticket_code: generateString(2)+"-"+ Date.now().toString(),
        ticket_title: newTicket.ticket_title,
        contract_name: newTicket.contract_name,
        contract_email: newTicket.contract_email,
        ticket_description: newTicket.ticket_description,
        status:1
      });
      util.setSuccess(201, 'Ticket Created !', createdTicket);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

   static async getAllTicketsByStatus(req, res) {
    const { status } = req.params;
    try {
      const allTickets = await TicketService.getAllTicketsByStatus(status);
      if (allTickets.length > 0) {
        util.setSuccess(200, 'Tickets retrieved', allTickets);
      } else {
        util.setSuccess(200, 'No Tickets found',allTickets);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async updateTicket(req, res) {
    const alteredTicket = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedTicket = await TicketService.updateTicket(id, alteredTicket);
      if (!updatedTicket) {
        util.setError(404, `Cannot find ticket with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Ticket updated',alteredTicket);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default TicketController;