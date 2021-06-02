const Sequelize = require('sequelize');
import database from '../src/models';
const Op = Sequelize.Op;
class TicketService {
  static async getAllTickets() {
    try {
      return await database.ticket_status.findAll({
         include: [
          {
            model: database.ticket,
             as: 'tickets',
          }
        ],
        order: [['id','asc'],['tickets','id','desc']]
      });
    } catch (error) {
      throw error;
    }
  }
    static async getAllStatus() {
    try {
      return await database.ticket_status.findAll({
          attributes: ['id','status']
      });
    } catch (error) {
      throw error;
    }
  }
  static async createTicket(newTicket){
    try {
      return await database.ticket.create(newTicket);
    } catch (error) {
      throw error;
    }
  }

  static async getAllTicketsByStatus(status) {
    try {
      const tickets = await database.ticket.findAll({
        where: { status:status},
        order: [['updatedAt', 'DESC']]
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  static async getTicketById(id) {
    try {
      const ticket = await database.ticket.findOne({
        where: { id: Number(id)}
      });
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  static async getTicketsByTicketCode(ticket_code) {
    
    try {
      const tickets = await database.ticket.findAll({
         where: {
          ticket_code: {
            [Op.like]:`%${ticket_code}%`
          }
         }
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  static async updateTicket(id,updateTicket){
    try {
      return await database.ticket.update(updateTicket,{where:{id:Number(id)}});
    } catch (error) {
      throw error;
    }
  }
}

export default TicketService;