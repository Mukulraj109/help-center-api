const Card = ({ title, description }) => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-left transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
  
  export default Card;
  