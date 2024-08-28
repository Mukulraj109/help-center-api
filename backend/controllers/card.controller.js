import Card from "../models/Card.js";

export const createCard = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
  
    try {
      const newCard = new Card({ title, description });
      await newCard.save();
      res.status(201).json(newCard);
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({ error: `Card with title "${title}" already exists` });
      }
      res.status(500).json({ error: 'Server error, please try again later.' });
    }
}

  export const getAllCard = async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const getCardByTitle = async (req, res) =>  {
    const { title } = req.params;
    try {
      const card = await Card.findOne({ title });
      if (!card) {
        return res.status(404).json({ error: `Card with title "${title}" not found` });
      }
      res.json(card);
    } catch (err) {
      res.status(500).json({ error: 'Server error, please try again later.' });
    }
  }
  