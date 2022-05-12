import './App.css';
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import carddata from "./carddata";


function App() {
  let cards=carddata.map((item)=>{
    return <Card 
    key={item.id}
    {...item}
    ></Card>
  });

  return (
    <div className="rootcontainer">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
