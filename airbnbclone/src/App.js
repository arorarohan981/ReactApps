import './App.css';
import Navbar from "./Components/Navbar";
import HeroComponent from './Components/HeroComponent';
import Card from './Components/Card';

import stariconImage from "./Images/staricon.jpg";
import cardData from "./data";


const Cards = cardData.map((item) => {
  return <Card
  key={item.id}
  item={item}
    // Mainimg={card.coverImg}
    // availabilityImage={soldoutImage}
    // stariconImage={stariconImage}
    // ratingText={card.stats.rating}
    // cardHeader={card.title}
    // cardPricingBoldText={card.price}
    // openSpots={card.openSpots}
  ></Card>
});

function App() {
  return (
    <div className="rootContainer">
      <Navbar />
      <HeroComponent />
      <section className="cards-list">
        {Cards}
      </section>

    </div>
  );
}

export default App;
