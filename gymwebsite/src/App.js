import './App.css';
import Herocomponent from './Components/Hero/Herocomponent';
import Programs from './Components/Programs/programs';
import Reason from './Components/Reasons/reason';

function App() {
  return (
    <div className="App">
     <Herocomponent/>
     <Programs/>
     <Reason/>
    </div>
  );
}

export default App;
