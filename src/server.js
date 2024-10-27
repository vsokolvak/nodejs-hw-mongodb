import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './env.js';
import { getAllContacts, getContactsById } from './services/contacts.js';

const PORT = Number(env('PORT')) || 3000;

export const setupServer = () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  //

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );
  app.use(cors());

  // response controllers

  app.get("/contacts", async (req, res) => {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get("/contacts/:contactId", async (req, res) => {
    const {contactId} = req.params;
    const contact = await getContactsById(contactId);

    if(!contact) {
      res.status(400).json({
        message:"contact not found"
      });
      return;
    };

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  });

  //

  app.use('*', (req, res) => {
    res.status(404).json({
      message: '404 Path not found',
    });
  });
};