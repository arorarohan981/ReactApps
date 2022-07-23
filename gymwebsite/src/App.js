import './App.css';
import Herocomponent from './Components/Hero/Herocomponent';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/programs';
import Reason from './Components/Reasons/reason';

function App() {
  return (
    <div className="App">
     <Herocomponent/>
     <Programs/>
     <Reason/>
     <Plans/>
    </div>
  );
}

export default App;
