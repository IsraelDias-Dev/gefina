import { response, Router } from 'express';
import {
  findAllInvoice,
  findInvoiceById,
  insertInvoice,
  modifyInvoice,
  removeInvoice
} from './invoice.service.ts';
import { error } from 'node:console';
import { request } from 'node:http';
import pool from './database.ts';
import { stat } from 'node:fs';


const router = Router();

router.get('/', async (_req, res) => {
  try {
    const invoices = await findAllInvoice();

    res.status(200).json(invoices);
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: { message: { status: 500, message: 'Não foi possível carregar as faturas.' } } })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const invoice = await findInvoiceById(id);

    if (!invoice) res.status(404).json({ error: { status: 404, message: 'Fatura não encontrada.' } });

    res.status(200).json(invoice);
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: { status: 500, message: 'Não foi possível carregar as faturas.' } })
  }
});

router.post('/', async (request, response) => {
  try{
    const invoice = await insertInvoice(request.body);

    if(!invoice) response.status(404).json({error:{
      status : 404,
      message: 'Fatura não encontrada.'
    }});

    response.status(201).json(invoice);
  } catch (error) {
   console.error(error);

   response.status(500).json({ error:{
    status: 500,
    message: 'Não foi possível inserir fatura.'
   }});
  }
});

router.put('/:id', async (request, response)=> {
try{
    const invoice = await modifyInvoice(
      Number(request.params.id),
      request.body
    );

  if(!invoice) response.status(404).json({error:{
      status : 404,
      message: 'Fatura não encontrada.'
    }});

  response.status(200).json(invoice);
}catch (error) {
 console.error(error);

 response.status(500).json({error: {
  status: 500,
  message: 'Não foi possivel modificar a fatura'
 }});
}
});

router.delete('/:id', async (request, response) => {
  try{
    const deleted = await removeInvoice(Number(request.params.id));

    if(!deleted) response.status(404).json({error:{
      status : 404,
      message: 'Fatura não encontrada.'
    }});

    response.status(204).end();
  } catch (error) {
   console.error(error);

   response.status(500).json({ error:{
    status: 500,
    message: 'Não foi possível deletar fatura.'
   }});
  }
});
  
export default router;
