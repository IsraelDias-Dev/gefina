import { Router } from 'express';

import { findCustomersOptions } from './customer.service.ts';

const router = Router();

router.get('/options', async (_request, response) => {
    const CustomerOptions = await findCustomersOptions();

       response.status(200).json(CustomerOptions)
});
export default router;