import express from 'express';
import { createContact, deleteContact, getContacts } from '../controllers/Contact.controller.js';






const router = express.Router();


router.post('/', createContact);
router.get('/', getContacts);
router.delete('/:id', deleteContact);

export default router;