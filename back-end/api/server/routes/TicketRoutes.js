import { Router } from 'express';
import TicketController from '../controllers/TicketController';

const router = Router();

router.get('/all', TicketController.getAllTickets);
router.get('/status', TicketController.getAllStatus);
router.post('/all/:status', TicketController.getAllTicketsByStatus);
router.post('/ticket', TicketController.createTicket);
router.post('/search', TicketController.getTicketsByTicketCode);
router.put('/ticket/:id', TicketController.updateTicket);

export default router;