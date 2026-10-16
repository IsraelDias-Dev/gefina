import { Router } from 'express';

import {
  findALLInvoices,
  findInvoicesById
} from './invoice.service.ts';
import { error } from 'node:console';

const router = Router();

router.get('/', async (_request, response) => {
  try{
  const invoices = await findALLInvoices();

  response.status(200).json(invoices);
}catch (error) {
  console.error(error);

  response.status(500).json({error:{
    status: 500,
    message: 'Não foi possível carregar as faturas.'
  }});
}  
});

router.get('/:id', async (request, response) => {
  const id = Number (request.params.id);
try{
 const invoice = await findInvoicesById(id);

 if(!invoice)response.status(404).json({error:{
  status:404,
  message: 'fatura não encontrada.'
 }})

 response.status(200).json(invoice);
}catch (error) {
  console.error(error);

  response.status(500).json({ error:{
    status: 500,
    message: 'Não foi possível carregar as faturas.'
  }});
}
});

export default router;
