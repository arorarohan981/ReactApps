import './App.css';
import CurrentWeather from './Components/Current-Weather/current-weather';
import Search from './Components/search';

function App() {

  const handleOnSearchChange =(searchData)=>{
    console.log(searchData);
  }
  return (
    <div className="conatainer">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather/>
    </div>
  );
}

export default App;
