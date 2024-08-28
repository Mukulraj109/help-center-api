import React, { useState, useEffect } from 'react';
import CardList from './component/CardList';
import Footer from './component/Footer';
import axios from 'axios';  
import Header from './component/Header';
import Navbar from './component/Navbar';

let url = "http://localhost:8000";

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    axios.get(`${url}/cards`)
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  const handleCardSubmit = (newCard) => {
    axios.post(`${url}/cards`, newCard)
      .then(response => {
        setCards(prevCards => [...prevCards, response.data]);
      })
      .catch(error => console.error('Error creating card:', error));
  };

  
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar onCardSubmit={handleCardSubmit} />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto px-4 items-center">
        <CardList cards={filteredCards} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
