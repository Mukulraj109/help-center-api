import Card from "./Card";

const CardList = ({ cards }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
    {cards.map(card => (
      <Card key={card.id} title={card.title} description={card.description} />
    ))}
  </div>
);

export default CardList;
